import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDatav = () => {

    const navigate = useNavigate();
    const [vname, setVname] = useState("")
    const [vnumber, setVnumber] = useState("")
    const [vmodel, setVmodel] = useState("")
    const [ipremium, setIpremium] = useState("")
    const [servicecharge, setServicecharge] = useState("")
    const [emmission, setEmmission] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            axios
            .post("http://localhost:3001/insertv", {vname, vnumber, vmodel, ipremium, servicecharge, emmission})
            .then(
                (response) =>{
                    console.log(response)
                navigate('/Vehicletransport')
                })
            .catch(
                err =>console.log(err)
            )
        } catch (error) {
            
        }

    }

  return (
    <>
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
    <button onClick={()=>navigate('/')}>Go Back</button>
    </>
  )
}

export default AddDatav;