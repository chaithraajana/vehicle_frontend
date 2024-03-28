import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddData2 = () => {

    const navigate = useNavigate();
    const [vnr_no, setVnr_no] = useState("")
    const [kmwith_dr, setKmwith_dr] = useState("")
    const [with_dr_rent, setWith_dr_rent] = useState("")
    const [kmwithout_dr, setKmwithout_dr] = useState("")
    const [withoutdr_rent, setWithoutdr_rent] = useState("")
    const [v_total, setV_total] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            axios
            .post("http://localhost:3001/insert2", {vnr_no, kmwith_dr, with_dr_rent, kmwithout_dr, withoutdr_rent, v_total})
            .then(
                (response) =>{
                    console.log(response)
                navigate('/Transport')
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
        <input placeholder='Enter vnr no.' type = 'text' name = 'vnr_no' value={vnr_no} onChange = {(e) =>setVnr_no(e.target.value)}  required />
        <input placeholder='kmwith_dr' type = 'number' name = 'kmwith_dr' value={kmwith_dr} onChange = {(e) =>setKmwith_dr(e.target.value)} required />
        <input placeholder='with_dr_rent' type = 'number' name = 'with_dr_rent' value={with_dr_rent} onChange = {(e) =>setWith_dr_rent(e.target.value)} required />
        <input placeholder='kmwithout_dr' type = 'number' name = 'kmwithout_dr' value={kmwithout_dr} onChange = {(e) =>setKmwithout_dr(e.target.value)} required />
        <input placeholder='withoutdr_rent' type = 'number' name = 'withoutdr_rent' value={withoutdr_rent} onChange = {(e) =>setWithoutdr_rent(e.target.value)} required />
        {/* <input placeholder='v_total' type = 'number' name = 'salary' value={v_total} onChange = {(e) =>setV_total(e.target.value)} required /> */}
        <input type = 'submit' value = "submit"/>
    </form>

    </div>
    <button onClick={()=>navigate('/')}>Go Back</button>
    </>
  )
}

export default AddData2;