import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from './assests/redux-slices/productSlice';
import { getDatabase, ref, set } from 'firebase/database';
import { firebaseApp } from './assests/firebase-config/firebaseConfig';

function App() {
  const product = useSelector((state)=> state.product.value);
  const dispatch = useDispatch();
  console.log(product);

  const addUser = ()=>{
    const  db = getDatabase(firebaseApp);
    const userRef = ref(db, 'users/' + Math.floor(Math.random() * 99999 * 100000));

    const newUser = {
      name:'raghav',
      age: 25,
      contact:'raghav@mail.com'
    };


    set(userRef, newUser);
  }


  return (
    <div className="App">
      <button onClick={addUser}>add data</button>
     <input type='text' onChange={(e)=>{dispatch(changeName(e.target.value))}} value={product.name}/>
    </div>
  );
}

export default App;
