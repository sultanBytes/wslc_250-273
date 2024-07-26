import React, { useContext } from 'react'
import { myContext } from '../context/Context'

const Gallery = () => {
    const data = useContext(myContext);
    return (
        <>
            <div className='page'>Gallery</div>

            <button onClick={data.setname('ravi')}>click me</button>
        </>
    )
}

export default Gallery