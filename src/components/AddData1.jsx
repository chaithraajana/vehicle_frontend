import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddData1 = () => {

    const navigate = useNavigate();
    const [en, setEn] = useState("")
    const [ename, setEname] = useState("")
    const [mearnings, setMearnings] = useState("")
    const [yearnings, setYearnings] = useState("")
    const [type, setType] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            axios
            .post("http://localhost:3001/insert1", {en, ename, mearnings, yearnings, type})
            .then(
                (response) =>{
                    console.log(response)
                navigate('/Employee')
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
        <input placeholder='Enter Employee number' type = 'text' name = 'en' value={en} onChange = {(e) =>setEn(e.target.value)}  required />
        <input placeholder='Enter Employee Name' type = 'text' name = 'ename' value={ename} onChange = {(e) =>setEname(e.target.value)} required />
        <input placeholder='Employee Earnings' type = 'number' name = 'mearnings' value={mearnings} onChange = {(e) =>setMearnings(e.target.value)} required />
        <input placeholder='Employee yearly earnings' type = 'number' name = 'yearnings' value={yearnings} onChange = {(e) =>setYearnings(e.target.value)} required />
        <input placeholder='Employee type' type = 'text' name = 'type' value={type} onChange = {(e) =>setType(e.target.value)} required />
        <input type = 'submit' value = "submit"/>
    </form>

    </div>
    <button onClick={()=>navigate('/')}>Go Back</button>
    </>
  )
}

export default AddData1;