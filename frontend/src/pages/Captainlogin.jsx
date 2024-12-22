// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import ridemate3 from '../assets/ridemate-captain.png'
import { useState } from 'react'

const Captainlogin = () => {
    const [email, setEmail] = useState('')
        const [password,setPassword]=useState('')
        // eslint-disable-next-line no-unused-vars
        const [captainData, setCaptainData] = useState({})
    
        const submitHandler = (e) => {
            e.preventDefault();
            setCaptainData({
                email: email,
                password: password
            })
            setEmail('')
            setPassword('')
    
        }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'> 
    <div>
    <img src={ridemate3} alt="ridemate"  className='w-40  mb-6 -ml-7'/>
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
    <p className='text-center'>Ready to Join the Fleet? <Link to='/captain-signup' className='text-blue-400 '>Register as a captain</Link></p>
    </div>
    <div>
        <Link  to='/login'
        className='bg-[#d5622d] flex items-center justify-center text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as User</Link>
    </div>
</div> 
  )
}

export default Captainlogin
