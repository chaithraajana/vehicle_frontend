import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Employeelist = (props) => {
    const navigate = useNavigate();

    const {id, en, ename, mearnings, type, tax, insurance, hra} = props
    var yearnings = mearnings * 12;


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
    <div>{en}</div>
    <div>{ename}</div>
    <div>{mearnings}</div>
    <div>{yearnings}</div>
    <div>{type}</div>
    <div>{tax}</div>
    <div>{insurance}</div>
    <div>{hra}</div>

    <button onClick={handleDelete}>Delete</button>
    <button onClick={() => {navigate(`/update1/${id}`)}}>Update</button>
    </div>
  )
}

export default Employeelist;