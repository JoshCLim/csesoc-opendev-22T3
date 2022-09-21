import { useState } from "react";

const Hello = () => {
  // let message = "Hello, world!";

  // * the useState hook returns an array of size 2 -- the variable's current value and a function to change that variable
  const [message, setMessage] = useState("Hello, world!");

  // gets called when the button is clicked
  const handleOnClick = () => {
    // TODO: Update message to 'Hello, Open Dev!'
    // message = "Hello, Open Dev!";

    if (message === "Hello, world!") {
      setMessage("Hello, Open Dev!");
    } else {
      setMessage("Hello, world!");
    }
  };
  return (
    <div>
      <p>{message}</p>
      <button onClick={handleOnClick}>Update message</button>
    </div>
  );
};

export default Hello;
