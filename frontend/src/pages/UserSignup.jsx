/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ridemate2 from '../assets/ridemate2.png'
import axios from 'axios' 
import {UserDataContext} from '../context/UserContext'


const UserSignUp = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('') 
    const [firstName,setFirstName]=useState('')  
    const [lastName,setLastName]=useState('') 
    const [userData, setUserData] = useState({})

    const navigate  = useNavigate();

    const {user,setUser} = React.useContext(UserDataContext)

      const submitHandler = async (e) => {
            e.preventDefault();
            const newUser = {
              fullname: {
                firstname: firstName,
                lastname: lastName
            },
            email: email,
            password: password
            }
            
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

            if(response.status === 201){
              const data = response.data;

              setUser(data.user)
              localStorage.setItem('token', data.token)
              navigate('/home')
            }

            setEmail('')
            setPassword('')
            setFirstName('')
            setLastName('')
        }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'> 
        <div>
        <img src={ridemate2} alt="ridemate"  className='w-40  mb-9 -ml-7'/>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
              <h3 className='text-lg mb-2 font-medium'>What&#39;s your name?</h3>
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
            <h3 className='text-lg mb-2 font-medium'>What&#39;s your email?</h3>
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
            >Create account</button>
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

export default UserSignUp
