import logo from './logo.svg';
import './App.css';
import PrpsCpmponent from './compoenents/PrpsCpmponent';

const data = [];

function App() {
  return (
    <div className="App">
      <PrpsCpmponent name="john wick" age="30"/>
      <PrpsCpmponent name="janny" age="32"/>

      <PrpsCpmponent name="jonny" age="24" id="20">
        <p>hello</p>
      </PrpsCpmponent>
    </div>
  );
}

export default App;
