/* eslint-disable react/prop-types */

const VehiclePanel = (props) => (
    <div>
        <h5
            className="p-1 text-center absolute w-[93%] top-0"
            onClick={() => {
                props.setVehiclePanel(false);
            }}
        >
            <i className="text-3xl text-gray-200 ri-arrow-down-wide-fill"></i>
        </h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
        <div
            onClick={() => {
                props.setConfirmRidePanel(true);
            }}
            className="flex w-full border-2 mb-2 active:border-black bg-gray-50 items-center justify-between p-3 rounded-xl"
        >
            <img
                className="h-12"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1555367349/assets/d7/3d4b80-1a5f-4a8b-ac2b-bf6c0810f050/original/Final_XL.png"
                alt=""
            />
            <div className="w-1/2">
                <h4 className="font-medium text-lg">
                    RideMate Go{" "}
                    <span>
                        <i className="ri-user-3-fill"></i>4
                    </span>
                </h4>
                <h5 className="font-medium text-sm">2 mins away</h5>
                <p className="font-normal text-xs text-gray-600">
                    Affordable, Compact rides
                </p>
            </div>
            <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>
        <div
            onClick={() => {
                props.setConfirmRidePanel(true);
            }}
            className="flex w-full border-2 mb-2 active:border-black bg-gray-50 items-center justify-between p-3 rounded-xl"
        >
            <img
                className="h-12"
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
                alt=""
            />
            <div className="w-1/2">
                <h4 className="font-medium text-lg">
                    Moto{" "}
                    <span>
                        <i className="ri-user-3-fill"></i>1
                    </span>
                </h4>
                <h5 className="font-medium text-sm">3 mins away</h5>
                <p className="font-normal text-xs text-gray-600">
                    Affordable motorcycle rides
                </p>
            </div>
            <h2 className="text-lg font-semibold">₹65.20</h2>
        </div>
        <div
            onClick={() => {
                props.setConfirmRidePanel(true);
            }}
            className="flex w-full border-2 mb-2 active:border-black bg-gray-50 items-center justify-between p-3 rounded-xl"
        >
            <img
                className="h-12"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFabRnJZ8deGXJSKA1QjN45920WytRrdFsA&s"
                alt=""
            />
            <div className="w-1/2">
                <h4 className="font-medium text-lg">
                    RideMate Auto{" "}
                    <span>
                        <i className="ri-user-3-fill"></i>3
                    </span>
                </h4>
                <h5 className="font-medium text-sm">2 mins away</h5>
                <p className="font-normal text-xs text-gray-600">
                    Affordable Auto rides
                </p>
            </div>
            <h2 className="text-lg font-semibold">₹113.5</h2>
        </div>
    </div>
);

export default VehiclePanel;