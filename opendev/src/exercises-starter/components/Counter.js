// Exercise 1

/**
 * Displays a counter that increments by 1 whenever a button is clicked.
 */
const Counter = () => {
  // TODO: Declare a new state variable for the counter with useState

  // gets called when the button is clicked
  const handleOnClick = () => {
    // TODO: Increment the counter by 1
  };

  return (
    <div>
      <p>Counter: 0</p>
      <button onClick={handleOnClick}>Increment</button>
    </div>
  );
};

export default Counter;
