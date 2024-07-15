import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [ifUpper, setIfUpper] = useState(false);
  const [ifNumber, setIfNumber] = useState(false);
  const [ifSplChar, setIfSplChar] = useState(false);

  const genPassword = () => {
    let str = 'abcdefghijklmnopqrstuvwxyz';

    if (ifUpper) str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (ifNumber) str += '1234567890';
    if (ifSplChar) str += '!@#$%^&*()?/><.';

    let pass = '';

    for (let i = 1; i <= length; i++) {
      let random = Math.floor(Math.random() * str.length);
      pass += str[random];
    }

    setPassword(pass);
  }

  useEffect(() => {
    genPassword();
  }, [length, ifUpper, ifNumber, ifSplChar]);

  const handleCopyPass = ()=>{
    navigator.clipboard.writeText(password);
  };


  return (
    <>
      <div className='p-4 bg-warning rounded box'>
        <div className='row justify-content-between'>
          <input type='text' value={password} readOnly className='col-8 p-2 rounded border border-primary' />
          <button className='col-3 rounded border border-primary' onClick={handleCopyPass}>Copy</button>
        </div>
        <div className='d-flex justify-content-between py-3'>
          <div>
            <input type='range' onChange={(e) => { setLength(e.target.value) }} min={6} max={40} value={length} className='' />
            <label>Length <span>{length}</span></label>
          </div>
          <div>
            <input type='checkbox' onClick={(e) => { setIfUpper(e.target.checked); }} className='' />
            <label>Uppercase</label>
          </div>
          <div>
            <input type='checkbox' onClick={(e) => { setIfNumber(e.target.checked); }} className='' />
            <label>Number</label>
          </div>
          <div>
            <input type='checkbox' onClick={(e) => { setIfSplChar(e.target.checked); }} className='' />
            <label>Special Charactor</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
