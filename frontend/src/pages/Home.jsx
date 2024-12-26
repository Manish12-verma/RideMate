import { useRef, useState, useEffect } from "react";
import ridemate2 from "../assets/ridemate2.png";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/vehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";


const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const confirmRidePanelRef = useRef(null);
  const [vehicleFound, setVehicleFound] = useState(false);
  const vehicleFoundRef = useRef(null);
  const WaitingForDriverRef = useRef(null);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useEffect(() => {
    if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehiclePanel]);

  //confirm rider
  useEffect(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [confirmRidePanel]);


  //looking for driver
  useEffect(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [vehicleFound]);

  //waiting for driver
  useEffect(() => {
    if (waitingForDriver) {
      gsap.to(WaitingForDriverRef.current, {
        transform: "translateY(0%)",
      });
    } else {
      gsap.to(WaitingForDriverRef.current, {
        transform: "translateY(100%)",
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-40 absolute left-5 top-5"
        src={ridemate2}
        alt="ridemate logo"
      />
      <div className="h-screen w-screen">
        {/* image for temporary use */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>
      <div className="h-screen absolute bottom-0 w-full flex flex-col justify-end">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            className="absolute opacity-0 top-6 right-6 text-2xl text-gray-500"
            onClick={() => setPanelOpen(false)}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-700 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
            />
            <input
              onClick={() => setPanelOpen(true)}
              type="text"
              className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </form>
        </div>
        <div ref={panelRef} className="h-0 bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 w-full bottom-0 px-3 py-10 bg-white rounded-t-3xl translate-y-full pt-12"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 w-full bottom-0 px-3 py-6 bg-white rounded-t-3xl translate-y-full pt-12"
      >
        <ConfirmRide setConfirmRidePanel={setConfirmRidePanel}  setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div
         ref={vehicleFoundRef}
        className="fixed z-10 w-full bottom-0 px-3 py-6 bg-white rounded-t-3xl translate-y-full pt-12"
      >
          <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div
        ref={WaitingForDriverRef}
        className="fixed z-10 w-full bottom-0 px-3 py-6 bg-white rounded-t-3xl pt-12"
      >
          <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  );
};

export default Home;
