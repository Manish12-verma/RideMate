/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import ridemate3 from '../assets/ridemate-captain.png'
import { Link } from 'react-router-dom'


const CaptainSignup = () => {
    const [email,setEmail]=useState('')
        const [password,setPassword]=useState('') 
        const [firstName,setFirstName]=useState('')  
        const [lastName,setLastName]=useState('') 
        const [userData, setUserData] = useState({})
          const submitHandler = (e) => {
                e.preventDefault();
                setUserData({
                    fullname: {
                        firstname: firstName,
                        lastname: lastName
                    },
                    email: email,
                    password: password   
                })
                setEmail('')
                setPassword('')
                setFirstName('')
                setLastName('')
            }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'> 
        <div>
        <img src={ridemate3} alt="ridemate"  className='w-40  mb-9 -ml-7'/>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
              <h3 className='text-lg w-full mb-2 font-medium'>What&#39;s our Captain&#39;s name?</h3>
              <div className='flex gap-3 mb-5'>
              <input 
              type="text" 
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm'
              required 
              placeholder='First name'
              value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
              />
              <input 
              type="text" 
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  text-lg placeholder:text-sm'
              required 
              placeholder='Last name'
              value={lastName}
            onChange={(e) => setLastName(e.target.value)}
              />
              </div>
            <h3 className='text-lg mb-2 font-medium'>What&#39;s our Captain&#39;s email?</h3>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
              required 
              placeholder='email@example.com'
              />
            <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
            <input 
              type="password"
              className='bg-[#eeeeee] mb-5  rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
              />
            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
            >Login</button>
        </form>
        <p className='text-center'>Already have a account? <Link to='/login' className='text-blue-400 '>Login</Link></p>
        </div>
        <div>
            <p className='text-[10px] text-center text-gray-400 leading-tight'>
            This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy</span> and <span className='underline'>Terms of Service apply</span> .
            </p>
        </div>
    </div>
  )
}

export default CaptainSignup
