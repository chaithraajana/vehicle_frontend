import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Employeelist = (props) => {
    const navigate = useNavigate();

    const {id, employee_id, name, employee_salary, tax, insurance, hra} = props
    var yearly_salary = employee_salary * 12;


    const handleDelete = () => {
        const id= props.id;
        try {
            axios.post("http://localhost:3001/delete1", {id})
            .then(response => {console.log(response) })
                .catch((err) => {console.log(err)})
            
        } catch (error) {
          console.log(error)  
        }
    }
  return (
    <div className='employeeData'>
    <div>{id}</div>
    <div>{employee_id}</div>
    <div>{name}</div>
    <div>{employee_salary}</div>
    <div>{yearly_salary}</div>
    <div>{tax}</div>
    <div>{insurance}</div>
    <div>{hra}</div>

    <button onClick={handleDelete}>Delete</button>
    <button onClick={() => {navigate(`/update1/${id}`)}}>Update</button>
    </div>
  )
}

export default Employeelist;