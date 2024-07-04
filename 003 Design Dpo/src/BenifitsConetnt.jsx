import React from 'react'

const BenifitsConetnt = ({ content }) => {
    return (
        <div>
            <div className='benifits-content'>
                <div>
                    <img src={content.subImg} />
                </div>
                <h1>{content.title}</h1>
                <div>
                    <button>{content.btn}</button>
                </div>
            </div>
        </div>
    )
}

export default BenifitsConetnt