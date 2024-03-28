import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Update1 = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [en, setEn] = useState("")
    const [ename, setEname] = useState("")
    const [mearnings, setMearnings] = useState("")
    const [yearnings, setYearnings] = useState("")
    const [type, setType] = useState("")
    

    useEffect(() => { 
        axios.post("http://localhost:3001/getUpdateData1", {id}) 
            .then(
                (response) => {
                    setEn(response.data.en);
                    setEname(response.data.ename);
                    setMearnings(response.data.mearnings);
                    setYearnings(response.data.yearnings);
                    setType(response.data.type);
                      
                })
            .catch(
                err =>{console.log(err)},
            )
    },[id])
            const handleSubmit = (e) =>{
                e.preventDefault();
                try {
                    axios.post("http://localhost:3001/update1", {id, en, ename, mearnings, yearnings, type})
                    .then ((response)=>{
                        console.log(response);
                        navigate('/Employee');
                    })
                    .catch((err) => {console.log(err) })
                }catch(err) {
                }
            };
                

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='Enter Employee number' type = 'text' name = 'en' value={en} onChange = {(e) =>setEn(e.target.value)}  required />
        <input placeholder='Enter Employee Name' type = 'text' name = 'name' value={ename} onChange = {(e) =>setEname(e.target.value)} required />
        <input placeholder='Employee Earnings' type = 'number' name = 'salary' value={mearnings} onChange = {(e) =>setMearnings(e.target.value)} required />
        <input placeholder='Employee yearly earnings' type = 'number' name = 'salary' value={yearnings} onChange = {(e) =>setYearnings(e.target.value)} required />
        <input placeholder='Employee type' type = 'text' name = 'type' value={type} onChange = {(e) =>setType(e.target.value)} required />
        <input type = 'submit' value = "submit"/>
    </form>
    </div>
  )
}

export default Update1;