import "./App.css";
import ConfirmedCases from "./confirmedCases";

function App(props) {
  return (
    <div className="App">
      <header className="text-white bg-gray-800">
        <ConfirmedCases />
      </header>
    </div>
  );
}

export default App;
