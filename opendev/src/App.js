import Hello from "./workshop-code/components/Hello";
import Counter from "./exercises-starter/components/Counter";
import CapitalFinder from "./exercises-starter/components/CapitalFinder";

const App = () => {
  return (
    <div>
      <h1>demo</h1>
      <Hello />

      <h1>exercises</h1>
      <h3>counter</h3>
      <Counter />
      <Counter />

      <h3>capital finder</h3>
      <CapitalFinder />
    </div>
  );
};

export default App;
