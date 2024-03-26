import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Update1 = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const [employeeId, setEmployeeId] = useState("")
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")
    const [yearly_salary, setYearlySalary] = useState("")
    

    useEffect(() => { 
        axios.post("http://localhost:3001/getUpdateData1", {id}) 
            .then(
                (response) => {
                    setEmployeeId(response.data.employee_id);
                    setName(response.data.employee_name);
                    setSalary(response.data.employee_salary);
                    setYearlySalary(response.data.yearly_salary);
                      
                })
            .catch(
                err =>{console.log(err)},
            )
    },[id])
            const handleSubmit = (e) =>{
                e.preventDefault();
                try {
                    axios.post("http://localhost:3001/update1", {id, employeeId, name, salary,yearly_salary})
                    .then ((response)=>{
                        console.log(response);
                        navigate('/');
                    })
                    .catch((err) => {console.log(err) })
                }catch(err) {
                }
            };
                

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <input placeholder='Enter Employee id' type = 'text' name = 'id' value={id} onChange = {(e) =>setEmployeeId(e.target.value)}  required />
        <input placeholder='Enter Employee Name' type = 'text' name = 'name' value={name} onChange = {(e) =>setName(e.target.value)} required />
        <input placeholder='Employee Salary' type = 'number' name = 'salary' value={salary} onChange = {(e) =>setSalary(e.target.value)} required />
        <input placeholder='Employee Salary' type = 'number' name = 'salary' value={yearly_salary} onChange = {(e) =>setYearlySalary(e.target.value)} required />
         
        <input type = 'submit' value = "submit"/>
    </form>
    </div>
  )
}

export default Update1;