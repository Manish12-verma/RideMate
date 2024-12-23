
import { useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const CaptainProtectWrapper = ({children}) => {


    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    const {captain, setCaptain} = useContext(CaptainDataContext)
    const [isLoading, setIsLoading] = useState (true)  
     
    useEffect(() => {   
        if(!token){
            navigate('/captain-login')
        }
    }, [token])
    
    axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
        headers:{
            Authorization: `Bearer ${token}`

        }
    }).then((response)=>{
        if(response.status === 200){
            const data = response.data
            setCaptain(data.captain)
            setIsLoading(false)
        }
    }).catch((error)=>{    //token expires ho chuka hai ya koi aur error aya hai -> then redirect to login page
        console.error('Profile fetch failed',error)
        localStorage.removeItem('token')    
        navigate('/captain-login')
     })


    if(isLoading){
        return <div>Loading...</div>
    }

      
   
  return (
    <>
      {children}
    </>
  )
}

export default CaptainProtectWrapper
