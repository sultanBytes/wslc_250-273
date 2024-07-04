import React from 'react';
// import './hello.css';

const Hello = () => {
//   return (
//     <div className='hello-div'>Hello</div>
//   )

    return React.createElement('div', {id: 'shubham', class: 'hello-div'}, [React.createElement('h1', null, 'Hello Shubham')]);
}

export default Hello;