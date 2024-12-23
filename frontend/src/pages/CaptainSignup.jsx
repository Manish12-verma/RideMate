/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react'
import ridemate3 from '../assets/ridemate-captain.png'
import { Link } from 'react-router-dom'
import { CaptainDataContext } from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const CaptainSignup = () => {

  const navigate = useNavigate();

        const [email,setEmail]=useState('')
        const [password,setPassword]=useState('') 
        const [firstName,setFirstName]=useState('')  
        const [lastName,setLastName]=useState('') 
        const [vehicleColor,setVehicleColor]=useState('')
        const [vehiclePlate,setVehiclePlate]=useState('')
        const [vehicleCapacity,setVehicleCapacity]=useState('')
        const [vehicleType,setVehicleType]=useState('')


        const {captain, setCaptain} = useContext(CaptainDataContext)

          const submitHandler =async (e) => {
                e.preventDefault();
                const captainData = {
                    fullname: {
                        firstname: firstName,
                        lastname: lastName
                    },
                    email: email,
                    password: password,  
                    vehicle:{
                      color: vehicleColor,
                      plate: vehiclePlate,
                      capacity: vehicleCapacity,
                      vehicleType: vehicleType
                    }
              }

              const response  = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData)

              if(response.status === 201){
                     const data = response.data
                      setCaptain(data.captain)
                      localStorage.setItem('token', data.token) 
                      navigate('/captain-home') 
              } 

                setEmail('')
                setPassword('')
                setFirstName('')
                setLastName('')
                setVehicleCapacity('')
                setVehicleColor('')
                setVehiclePlate('')
                setVehicleType('')
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
              
              <h3 className='text-lg mb-2 font-medium'>Vehicle Information</h3>
              <div className='flex gap-4 mb-1'>
              <input 
                type="text"
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
                required
                value={vehicleColor}
                onChange={(e) => setVehicleColor(e.target.value)}
                placeholder='Vehicle Color'
              />
              <input 
                type="text"
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
                required
                value={vehiclePlate}
                onChange={(e) => setVehiclePlate(e.target.value)}
                placeholder='Vehicle Plate'
              />
              </div>
               <div className='flex gap-4 mb-7'>
              <input 
                type="number"
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
                required
                value={vehicleCapacity}
                onChange={(e) => setVehicleCapacity(e.target.value)}
                placeholder='Vehicle Capacity'
              />
              <select 
                className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
                required
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="" disabled >Select Vehicle Type</option>
                <option value="car">Car</option>
                <option value="auto">Auto</option>
                <option value="moto">Moto</option>
              </select>
            </div>
            <button
              className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-sm'
            >Create Captain Account</button>
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
