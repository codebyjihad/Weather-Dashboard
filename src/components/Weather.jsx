import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Weather = () => {
    const { weatherData ,  loading , error} = useSelector((state) => state.weather)

  return (
    <div className='bg-blue-300'>
        <div className='px-6 py-20 container max-w-full mx-auto min-h-screen'>
             <h1 className='text-3xl md:text-5xl font-bold'>Weather Dashboard</h1>
             <div>
                <p>Enter Your city name</p>
             </div>
        </div>
    </div>
  )
}

export default Weather