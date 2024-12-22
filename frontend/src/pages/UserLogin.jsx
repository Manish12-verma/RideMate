/* eslint-disable no-unused-vars */
import React from 'react'
import ridemate2 from '../assets/ridemate2.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password,setPassword]=useState('')
    const [userData, setUserData] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setUserData({
            email: email,
            password: password
        })
        setEmail('')
        setPassword('')

    }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'> 
        <div>
        <img src={ridemate2} alt="ridemate"  className='w-40  mb-9 -ml-7'/>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <h3 className='text-lg mb-2 font-medium'>What&#39;s your email?</h3>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              required 
              placeholder='email@example.com'
              />
            <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              className='bg-[#eeeeee] mb-7  rounded px-4 py-2 border w-full text-lg placeholder:text-base'
              required
              placeholder='password'
              />
            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >Login</button>
        </form>
        <p className='text-center'>New here? <Link to='/signup' className='text-blue-400 '>Create new Account</Link></p>
        </div>
        <div>
            <Link  to='/captain-login'
            className='bg-[#10b461] flex items-center justify-center text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >Sign in as Captain</Link>
        </div>
    </div>
  )
}

export default UserLogin
