import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddData1 = () => {

    const navigate = useNavigate();
    const [employeeId, setEmployeeId] = useState("")
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [yearly_salary, setYearlySalary] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            axios
            .post("http://localhost:3001/insert1", {employeeId, name, salary, yearly_salary})
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
        <input placeholder='Enter Employee id' type = 'text' name = 'id' value={employeeId} onChange = {(e) =>setEmployeeId(e.target.value)}  required />
        <input placeholder='Enter Employee Name' type = 'text' name = 'name' value={name} onChange = {(e) =>setName(e.target.value)} required />
        <input placeholder='Employee Salary' type = 'number' name = 'salary' value={salary} onChange = {(e) =>setSalary(e.target.value)} required />
        <input placeholder='Employee yearly Salary' type = 'number' name = 'salary' value={yearly_salary} onChange = {(e) =>setYearlySalary(e.target.value)} required />
        <input type = 'submit' value = "submit"/>
    </form>

    </div>
    <button onClick={()=>navigate('/')}>Go Back</button>
    </>
  )
}

export default AddData1;