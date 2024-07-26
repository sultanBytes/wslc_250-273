import React, { createContext, useState } from 'react'

export const myContext = createContext();
const Content = ({ children }) => {
    const [name, setname] = useState('hello');
    const abc = '80';
  return (
    <myContext.Provider value={{abc, name, setname}}>
        {children}
    </myContext.Provider>
  )
}

export default Content