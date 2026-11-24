# React Sample Code for an ID.me integration

#### This sample code is to help partners integrate the ID.me verification tool onto their React application

## This project is built with
    - React
    - JavaScript
    - NPM
    - CSS

This project needs Node.js `^22.13`, `^24` or `>=26`. Set your client ID, redirect URI and scopes in `src/button.jsx`, then navigate to the project directory and run:

`npm install`

`npm start`

The app opens at http://localhost:3000/, so register that as your redirect URI. Run the tests with `npm test`.

Continue through the below steps to see a Successful Verification or Unsuccessful Verification


### Steps for a successful verification

1. Click the 'Verify With ID.me' button
2. Continue through the user flow
3. Allow the release of your data for a Successful Verification
4. Check the console for user data

__________________________________________________________________________________________________

### Steps for an unsuccessful verification

1. Click the 'Verify With ID.me' button
2. Continue through the user flow
3. Deny the release of your data
4. See the appropriate error message displayed


### Sample Error Messages

- Invalid Request
- Invalid Client
- Invalid Redirect URI
- Access Denied
- Unsupported Response Type
- Invalid Scope
