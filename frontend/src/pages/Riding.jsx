import { Link } from "react-router-dom"
import Home from "./Home"

const Riding = () => {
  return (
    <div className="h-screen">
        <Link to='/home' className="fixed h-10 right-2 top-2 w-10 bg-white flex items-center justify-center rounded-full">
        <i className="text-lg font-medium ri-home-4-line"></i>
        </Link>
        <div className="h-1/2 ">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
        </div>
        <div className="h-1/2 p-4">
        <div className="flex gap-2 justify-between items-center ">
        <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
            <div className="text-right ">
               <h2 className="text-lg font-medium">Manish</h2>
               <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
               <p className="text-sm text-gray-600">Maruti Suzuki alto</p>
            </div>
        </div>
       <div className="flex gap-2 justify-between items-center flex-col">
       <div className="w-full mt-5">
        
                <div className="flex items-center gap-5 p-3 border-b-2">
                   <i className="text-lg ri-map-pin-fill"></i>
                 <div>
                   <h3 className="text-lg font-medium">562/11-A</h3>
                   <p className="text-sm -mt-1 text-gray-600">Greater Noida, U.P </p>
                 </div>
                 </div>
                <div className="flex items-center gap-5 p-3 ">
                <i className="text-lg ri-currency-line"></i>
                 <div>
                   <h3 className="text-lg font-medium">₹193.40</h3>
                   <p className="text-sm -mt-1 text-gray-600">Cash Cash </p>
                 </div>
                </div>
       </div>
       </div>
                 <button  className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">Make a Payment</button>
        </div>
    </div>
  )
}

export default Riding
