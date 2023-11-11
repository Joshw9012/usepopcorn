import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StartRating from "./StarRating";

// passing rating number from a component to external component
function GetRatingData() {
  const [getRating, setGetRating] = useState(0);

  return (
    <>
      <StartRating color="blue" maxRating={10} onSetRating={setGetRating} />
      <p>This movie was rated {getRating} stars</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "perfect"]}
      defaultRating={3}
    />
    <GetRatingData />
  </React.StrictMode>
);
