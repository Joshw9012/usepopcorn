import React, { useState } from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

// passing rating number from a component to external component
function GetRatingData() {
  const [getRating, setGetRating] = useState(0);

  return (
    <>
      <StarRating color="blue" maxRating={10} onSetRating={setGetRating} />
      <p>This movie was rated {getRating} stars</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "perfect"]}
      defaultRating={3}
    />
    <GetRatingData />
  </React.StrictMode>
);
