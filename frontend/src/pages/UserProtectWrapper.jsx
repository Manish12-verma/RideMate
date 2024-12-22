
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const UserProtectWrapper = ({children}) => {


    const token = localStorage.getItem('token')
    const navigate = useNavigate();
    
    useEffect(() => {   
        if(!token){
            navigate('/login')
        }
    }, [token])

      
   
  return (
    <>
      {children}
    </>
  )
}

export default UserProtectWrapper
