import React from "react";

function Results({ fname, lname}) {
    
  return (
    <div className="idmeresults">
      <p>Hi, {fname} {lname}. Thank you for your service!</p>
    </div>
  );
}

export default Results;
