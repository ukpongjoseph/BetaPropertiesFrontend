import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='w-[95%] md:w-11/12 mx-auto container flex justify-center items-center min-h-[100vh]'>
      <div className='shadow-2xl flex flex-col gap-3 h-[50%] w-[200px] text-center'>
        <h1>ERROR 404</h1>
        <Link to='/' className='text-white bg-[rgba(61,153,112,1)] px-3 py-1'>Back Home</Link>
      </div>
    </div>
  )
}

export default NotFound