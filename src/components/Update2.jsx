import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Update2 = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [vnr_no, setVnr_no] = useState("")
    const [kmwith_dr, setKmwith_dr] = useState("")
    const [with_dr_rent, setWith_dr_rent] = useState("")
    const [kmwithout_dr, setKmwithout_dr] = useState("")
    const [withoutdr_rent, setWithoutdr_rent] = useState("")
    const [v_total, setV_total] = useState("")
    

    useEffect(() => { 
        axios.post("http://localhost:3001/getUpdateData2", {id}) 
            .then(
                (response) => {
                    setVnr_no(response.data.vnr_no);
                    setKmwith_dr(response.data.kmwith_dr);
                    setWith_dr_rent(response.data.with_dr_rent);
                    setKmwithout_dr(response.data.kmwithout_dr);
                    setWithoutdr_rent(response.data.withoutdr_rent);
                    setV_total(response.data.v_total); 
                     
                })
            .catch(
                err =>{console.log(err)},
            )
    },[id])
            const handleSubmit = (e) =>{
                e.preventDefault();
                try {
                    axios.post("http://localhost:3001/update2", {id, vnr_no, kmwith_dr, with_dr_rent, kmwithout_dr, withoutdr_rent, v_total})
                    .then ((response)=>{
                        console.log(response);
                        navigate('/Transport');
                    })
                    .catch((err) => {console.log(err) })
                }catch(err) {
                }
            };
                

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='Enter vnr no.' type = 'text' name = 'vnr_no' value={vnr_no} onChange = {(e) =>setVnr_no(e.target.value)}  required />
        <input placeholder='kmwith_dr' type = 'text' name = 'name' value={kmwith_dr} onChange = {(e) =>setKmwith_dr(e.target.value)} required />
        <input placeholder='with_dr_rent' type = 'number' name = 'salary' value={with_dr_rent} onChange = {(e) =>setWith_dr_rent(e.target.value)} required />
        <input placeholder='kmwithout_dr' type = 'number' name = 'salary' value={kmwithout_dr} onChange = {(e) =>setKmwithout_dr(e.target.value)} required />
        <input placeholder='withoutdr_rent' type = 'number' name = 'salary' value={withoutdr_rent} onChange = {(e) =>setWithoutdr_rent(e.target.value)} required />
        {/* <input placeholder='v_total' type = 'number' name = 'salary' value={v_total} onChange = {(e) =>setV_total(e.target.value)} required /> */}
        <input type = 'submit' value = "submit"/>
    </form>
    </div>
  )
}

export default Update2;