import './App.css';
import Cookies from 'js-cookie';

function App() {

  const expiryTime = new Date(new Date().getTime() + (10 * 1000));

  // Cookies.set('my-key', 'value', {expires: expiryTime});

//  console.log(Cookies.get('my-key'));
  return (
   <>
    <h1>hello world</h1>
   </>
  );
}

export default App;
