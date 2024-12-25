const LocationSearchPanel = (props) => {

        console.log(props)
     // sample of array location 
    const locations  = [
         'Nalanda house boy hostel, knowledge park 3, Greater Noida',
         'Nalanda0 house boy&apos;s hostel, knowledge park 2, Greater Noida',
         'Nalanda1 house boy&apos;s hostel, knowledge park 4, Greater Noida',
         'Nalanda2  house boy&apos;s hostel, knowledge park 5, Greater Noida',
         'Nalanda3  house boy&apos;s hostel, knowledge park 6, Greater Noida', 
    ] 

  return (
    <div>
     {
          locations.map(function(location,index){
               return  <div onClick={()=>{
                    // eslint-disable-next-line react/prop-types
                    props.setVehiclePanel(true)
                    // eslint-disable-next-line react/prop-types
                    props.setPanelOpen(false)
               }} key={index} className="flex items-center justify-start border-2  border-gray-50 active:border-black gap-4 my-2 p-3 rounded-xl ">
               <h2 className="bg-[#eee] h-10 w-16 flex items-center justify-center rounded-full"><i className="ri-map-pin-fill"></i></h2>
               <h4 className="font-medium">{location}</h4>
          </div> 
          })
     }
         
    </div>
  ) 
}

export default LocationSearchPanel
