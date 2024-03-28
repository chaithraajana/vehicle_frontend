import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Updatev = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    
    const [vname, setVname] = useState("")
    const [vnumber, setVnumber] = useState("")
    const [vmodel, setVmodel] = useState("")
    const [ipremium, setIpremium] = useState("")
    const [servicecharge, setServicecharge] = useState("")
    const [emmission, setEmmission] = useState("")
    

    useEffect(() => { 
        axios.post("http://localhost:3001/getUpdateDatav", {id}) 
            .then(
                (response) => {
                    setVname(response.data.vname);
                    setVnumber(response.data.vnumber);
                    setVmodel(response.data.vmodel);
                    setIpremium(response.data.ipremium);
                    setServicecharge(response.data.servicecharge);
                    setEmmission(response.data.emmission); 
                     
                })
            .catch(
                err =>{console.log(err)},
            )
    },[id])
            const handleSubmit = (e) =>{
                e.preventDefault();
                try {
                    axios.post("http://localhost:3001/updatev", {id, vname, vnumber, vmodel, ipremium, servicecharge, emmission})
                    .then ((response)=>{
                        console.log(response);
                        navigate('/Vehicletransport');
                    })
                    .catch((err) => {console.log(err) })
                }catch(err) {
                }
            };
                

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='Enter V.Name' type = 'text' name = 'vname' value={vname} onChange = {(e) =>setVname(e.target.value)}  required />
        <input placeholder='V.Number' type = 'text' name = 'vnumber' value={vnumber} onChange = {(e) =>setVnumber(e.target.value)} required />
        <input placeholder='V.Model' type = 'number' name = 'vmodel' value={vmodel} onChange = {(e) =>setVmodel(e.target.value)} required />
        <input placeholder='Premium' type = 'number' name = 'ipremium' value={ipremium} onChange = {(e) =>setIpremium(e.target.value)} required />
        <input placeholder='Servicecharge' type = 'number' name = 'servicecharge' value={servicecharge} onChange = {(e) =>setServicecharge(e.target.value)} required />
        <input placeholder='Emmission' type = 'number' name = 'emmission' value={emmission} onChange = {(e) =>setEmmission(e.target.value)} required />
        <input type = 'submit' value = "submit"/>
    </form>
    </div>
  )
}

export default Updatev;