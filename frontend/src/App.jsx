// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import Captainlogin from './pages/Captainlogin'
import CaptainSignup from './pages/Captainsignup'
import Home from './pages/Home'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'

const App = () => {
  return (
    <div>
       <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/login" element={<UserLogin/>} />
          <Route path="/signup" element={<UserSignUp/>} />
          <Route path="/captain-login" element={<Captainlogin/>} />
          <Route path="/captain-signup" element={<CaptainSignup/>} />
          <Route path="/home" element={
            <UserProtectWrapper>
              <Home/>
            </UserProtectWrapper>
          } />
          <Route path="/user/logout" element={
            <UserProtectWrapper>
               <UserLogout/>
            </UserProtectWrapper>
          }/>
          <Route path='/captain-home' element={
            <CaptainProtectWrapper>
               <CaptainHome/>
            </CaptainProtectWrapper>
           }/>
        </Routes>
    </div>
  )
}

export default App
