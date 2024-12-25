
const ConfirmRide = (props) => {
  return (
    <div>
         <h5
            className="p-1 text-center absolute w-[93%] top-0"
            onClick={() => {
                props.setConfirmRidePanel(false);
            }}
        >
             <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
             </h5>
             <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
            <div className="flex gap-2 justify-between items-center flex-col">
            <img className='h-20' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
            <div className="w-full mt-5">
                     <div className="flex items-center gap-5 p-3 border-b-2">
                     <i className="text-lg ri-map-pin-user-fill"></i>
                      <div>
                        <h3 className="text-lg font-medium">562/11-A</h3>
                        <p className="text-sm -mt-1 text-gray-600">Greater Noida, U.P </p>
                      </div>
                     </div >
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
            <button onClick={()=>{
                props.setVehicleFound(true)
                props.setConfirmRidePanel(false)
                props.setVehiclePanel(false)
            }} className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
                Confirm
            </button>
            </div>
    </div>
  )
}

export default ConfirmRide
