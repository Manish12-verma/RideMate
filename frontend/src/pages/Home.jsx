/* eslint-disable no-unused-vars */
import React from 'react'
import ridemate from '../assets/ridemate.png'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1619059558110-c45be64b73ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D')] h-screen w-full flex justify-between flex-col">
            <img src={ridemate} alt="ridemate"  className='w-40 ml-3 -mt-7'/>
            <div className='bg-white py-4 pb-7 px-4'>
                 <h2 className='text-2xl font-bold'>Get started with RideMate</h2>
                 <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5 '>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Home