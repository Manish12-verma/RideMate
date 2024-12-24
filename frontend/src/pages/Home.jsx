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
    <div className='h-screen relative'>
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
    </div>
  );
};

export default Home;