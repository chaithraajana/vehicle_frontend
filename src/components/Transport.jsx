import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Vehiclelist from './Vehiclelist'

const Transport = () => {
    const navigate = useNavigate();
    const [transport, setTransport] = useState([]);

    var v_total = 0;
    var kmwithdrtotal = 0;
    var kmwithoutdrtotal = 0;
    var kmwith_dr = 0;
    var with_dr_rent = 0;
    var kmwithout_dr = 0;
    var withoutdr_rent = 0;

     

    useEffect(() => {  
        axios
        .get("http://localhost:3001/Transport")
        .then(
            (response) => {
                // console.log(response.data);
                setTransport(response.data);
            }
            )
        .catch(
            (error) => {
                console.log(error)
            }
        )

    }, [transport]);


  return (
    <>

    <center><h1>XYZ Pvt.ltd. Turnover report</h1>
    
    </center>
    <div className='header'>
    
        <div>id</div>
        <div>vnr_no</div>
        <div>kmwith_dr</div>
        <div>with.dr.rent</div>
        <div>Total</div>
        <div>kmwithout.dr</div>
        <div>withoutdr.rent</div>
        <div>Total.</div>
        <div id='table'>v_total</div>
         

        
         
    </div>
    
    
    {transport.map(
    (transportation) => {
        kmwithdrtotal = transportation.kmwith_dr * transportation.with_dr_rent;
        kmwithoutdrtotal = transportation.kmwithout_dr * transportation.withoutdr_rent;
        v_total = kmwithdrtotal + kmwithoutdrtotal;
        
         

    return(
        <Vehiclelist
    key={transportation.id}
    id={transportation.id}
    vnr_no={transportation.vnr_no}
    kmwith_dr={transportation.kmwith_dr}
    with_dr_rent={transportation.with_dr_rent}
    kmwithdrtotal={kmwithdrtotal}
    kmwithout_dr={transportation.kmwithout_dr}
    withoutdr_rent={transportation.withoutdr_rent}
    kmwithoutdrtotal={kmwithoutdrtotal}
    v_total={v_total}

    
    />
    )
    }
     

    )
    }
     

    <button onClick={()=>{navigate("/AddData2")}}>Add Data</button>
    <button onClick={()=>{navigate("/Report")}}>Go Back</button>
    </>
  )
}

export default Transport;