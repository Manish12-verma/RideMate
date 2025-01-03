/* eslint-disable react/prop-types */

const WaitingForDriver = (props) => {
  return (
    <div>
    <h5
       className="p-1 text-center absolute w-[93%] top-0"
       onClick={() => {
           props.WaitingForDriver(false);
       }}
   >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i></h5>

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
       </div>
</div>
  )
}

export default WaitingForDriver
