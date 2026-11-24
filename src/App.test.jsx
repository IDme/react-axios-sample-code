import { render, screen } from "@testing-library/react";

const axios = vi.hoisted(() => vi.fn());
vi.mock("axios", () => ({ default: axios }));

// button.jsx reads the URL hash when it is first imported, so each test sets
// the hash and then imports a fresh copy of the app.
const loadApp = async (hash) => {
  window.location.hash = hash;
  vi.resetModules();
  const { default: App } = await import("./App");
  return App;
};

afterEach(() => {
  axios.mockReset();
  window.location.hash = "";
});

test("links to ID.me when there is no redirect fragment", async () => {
  const App = await loadApp("");
  render(<App />);

  expect(screen.getByRole("img", { name: "Verify with ID.me" })).toHaveAttribute(
    "src",
    "/src/verify.svg",
  );
  expect(screen.getByRole("link")).toHaveAttribute(
    "href",
    "https://groups.id.me/?client_id=Insert Client ID here&redirect_uri=Insert Redirect URI here&response_type=token&scopes=Insert scopes here",
  );
  expect(axios).not.toHaveBeenCalled();
});

test("shows the mapped message for an error redirect", async () => {
  axios.mockRejectedValue(new Error("offline"));
  const App = await loadApp("#error=access_denied");
  render(<App />);

  expect(
    screen.getByText(/You have denied the consent to release data/),
  ).toBeInTheDocument();
});

test("greets the user with the attributes fetched for the access token", async () => {
  const attributes = [
    { handle: "fname", value: "Ada" },
    { handle: "lname", value: "Lovelace" },
  ];
  axios.mockResolvedValue({ data: { attributes } });
  const App = await loadApp("#access_token=xyz123&token_type=bearer");
  render(<App />);

  expect(
    await screen.findByText("Hi, Ada Lovelace. Thank you for your service!"),
  ).toBeInTheDocument();
  expect(axios).toHaveBeenCalledWith(
    "https://api.id.me/api/public/v3/attributes.json?access_token=xyz123",
  );
});
