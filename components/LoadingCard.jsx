import React from 'react'

const LoadingCard = () => {
  return (
    <div className='grid justify-center w-[380px] h-[500px]'>
        <div className="loader">
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            <div className="circle">
                <div className="dot"></div>
                <div className="outline"></div>
            </div>
            </div>
    </div>
  )
}

export default LoadingCard