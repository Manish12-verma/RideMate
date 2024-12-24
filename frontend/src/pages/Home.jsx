import { useRef, useState, useEffect } from 'react';
import ridemate2 from '../assets/ridemate2.png';
import { gsap } from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        opacity: 1,
        padding:24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0,
        padding:0
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-40 absolute left-5 top-5' src={ridemate2} alt='ridemate logo' />
      <div className='h-screen w-screen'>
        {/* image for temporary use */}
        <img
          className='h-full w-full object-cover'
          src='https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif'
          alt='map'
        />
      </div>
      <div className='h-screen absolute bottom-0 w-full flex flex-col justify-end'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5
            ref={panelCloseRef}
            className='absolute opacity-0 top-6 right-6 text-2xl text-gray-500'
            onClick={() => setPanelOpen(false)}
          >
            <i className='ri-arrow-down-wide-line'></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full'></div>
            <input
              onClick={() => setPanelOpen(true)}
              type='text'
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5'
              placeholder='Add a pick-up location'
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              onClick={() => setPanelOpen(true)}
              type='text'
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3'
              placeholder='Enter your destination'
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
           <LocationSearchPanel/>
        </div>
      </div>
      <div className='fixed z-10 w-full bottom-0 px-3 py-8 bg-white rounded-t-3xl translate-y-full'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
             <div className='flex w-full border-2 mb-2 active:border-black bg-gray-50 items-center justify-between p-3 rounded-xl'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>RideMate Go <span><i className="ri-user-3-fill"></i>4</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p  className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
                </div>
                    <h2 className='text-lg font-semibold'>₹193.20</h2>
             </div>
             <div className='flex w-full border-2 mb-2 active:border-black  bg-gray-50 items-center justify-between p-3 rounded-xl'>
                <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'> Moto <span><i className="ri-user-3-fill"></i>1</span></h4>
                    <h5 className='font-medium text-sm'>3 mins away</h5>
                    <p  className='font-normal text-xs text-gray-600'>Affordable motocycle rides</p>
                </div>
                    <h2 className='text-lg font-semibold'>₹65.20</h2>
             </div>
             <div className='flex w-full border-2 mb-2 active:border-black  bg-gray-50 items-center justify-between p-3 rounded-xl'>
                <img className='h-12' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s" alt="" />
                <div className=' w-1/2'>
                    <h4 className='font-medium text-lg'>RideMate Auto <span><i className="ri-user-3-fill"></i>3</span></h4>
                    <h5 className='font-medium text-sm'>2 mins away</h5>
                    <p  className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
                </div>
                    <h2 className='text-lg font-semibold'>₹113.5</h2>
             </div>
      </div>
    </div>
  );
};

export default Home;