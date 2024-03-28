import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Vehicletransportlist from './Vehicletransportlist'

const Vehicletransport = () => {
    const navigate = useNavigate();
    const [vehicletransport, setVehicletransport] = useState([]);

    useEffect(() => {  
        axios
        .get("http://localhost:3001/vehicletransport")
        .then(
            (response) => {
                // console.log(response.data);
                setVehicletransport(response.data);
            }
            )
        .catch(
            (error) => {
                console.log(error)
            }
        )

    }, [vehicletransport]);


  return (
    <>

    <center><h1>Vehicle Report of Xyz Pvt.ltd</h1>
    
    </center>
    <div className='header'>
    
        <div>id</div>
        <div>V.Name</div>
        <div>V.Number</div>
        <div>V.Model</div>
        <div>I.premium</div>
        <div>Servicecharge</div>
        <div>Emmission</div>
         
    
    </div>
    
    
    {vehicletransport.map(
    (vehicle) => {
         

    return(
        <Vehicletransportlist
    key={vehicle.id}
    id={vehicle.id}
    vname={vehicle.vname}
    vnumber={vehicle.vnumber}
    vmodel={vehicle.vmodel}
    ipremium={vehicle.ipremium}
    servicecharge={vehicle.servicecharge}
    emmission={vehicle.emmission}
     
    />
    )
    }

    )
    }
     

    <button onClick={()=>{navigate("/AddDatav")}}>Add Datav</button>
    <button onClick={()=>{navigate("/Report")}}>Go Back</button>
    </>
  )
}

export default Vehicletransport