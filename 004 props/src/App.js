import logo from './logo.svg';
import './App.css';
import PrpsCpmponent from './compoenents/PrpsCpmponent';
import UserCard from './compoenents/UserCard';

const data = [
  {
    name: 'john wick',
    age: 30,
  },
  {
    name: 'john wick',
    age: 30,
  },
  {
    name: 'john wick',
    age: 30,
  },
  {
    name: 'john wick',
    age: 30,
  },
  {
    name: 'john wick',
    age: 30,
  },
  {
    name: 'john wick',
    age: 30,
  },
  {
    name: 'john wick',
    age: 30,
  },
];


let arr = [];
function App() {
  return (
    <div className="App">
      <PrpsCpmponent name="john wick" age="30" />
      <PrpsCpmponent name="janny" age="32" />

      <PrpsCpmponent name="jonny" age="24" id="20">
        <p>hello</p>
      </PrpsCpmponent>

      {/* map and foraech */}

      <div className='inner'>
        {
          data.forEach((item)=>{
            arr.push(<UserCard data={item}/>)
          })
        }

        {arr}
      </div>

      <div className='inner'>
       {
         data.map((item)=>(
          <UserCard data={item}/>
        ))
       }
      </div>
    </div>
  );
}

export default App;
