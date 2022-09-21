const App = () => {
  let message = 'Hello, world!';

  // gets called when the button is clicked
  const handleOnClick = () => {
    // TODO: Update message to 'Hello, Open Dev!'
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={handleOnClick}>Update message</button>
    </div>
  );
};

export default App;
