import { useState } from 'react';
import './App.css';
import AccordItem from './component/AccordItem';

const data = [
  {
    quest: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    quest: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    quest: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    quest: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    quest: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    quest: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  }
]

function App() {
  const [openAns, setOpenAns] = useState(0);

  const handleStatus = (ind) => {

    if (openAns === ind) {
      setOpenAns(null)
    } else {
      setOpenAns(ind);
    }
  }

  return (
    <>
      <div className='w-[1200px] mx-auto bg-[skyblue]'>
        <h1 className='text-center text-[32px] font'>Accordion</h1>
        <div className=''>
          {
            data.map((item, index) => (
              <AccordItem
                key={index}
                details={item}
                ifOpen={openAns === index}
                check="test perpose"
                handleFunction={() => { handleStatus(index) }}
              />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default App;
