import { useEffect, useState } from "react";

const Hello = () => {
  // let message = "Hello, world!";

  // * the useState hook returns an array of size 2 -- the variable's current value and a function to change that variable
  const [message, setMessage] = useState("Hello, world!");

  // * the useEffect will fire on the first render, and then again every time the states given in the dependency array are changed

  useEffect(() => {
    console.log("first render");
  }, []); // since the array is empty, the callback only runs on the first render

  useEffect(() => {
    console.log("message changed");
  }, [message]); // the callback will run on the first render, and also on any time 'message' is updated

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
