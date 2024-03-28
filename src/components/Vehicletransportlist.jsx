import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Vehicletransportlist = (props) => {
    const navigate = useNavigate();

    const {id, vname, vnumber, vmodel, ipremium, servicecharge, emmission} = props
    

    const handleDelete = () => {
        const id= props.id;
        try {
            axios.post("http://localhost:3001/deletev", {id})
            .then(response => {console.log(response) })
                .catch((err) => {console.log(err)})
            
        } catch (error) {
          console.log(error)  
        }
    }
  return (
    <div className='employeeData'>
    <div>{id}</div>
    <div>{vname}</div>
    <div>{vnumber}</div>
    <div>{vmodel}</div>
    <div>{ipremium}</div>
    <div>{servicecharge}</div>
    <div>{emmission}</div>
     

    <button onClick={handleDelete}>Delete</button>
    <button onClick={() => {navigate(`/updatev/${id}`)}}>Update</button>
    </div>
  )
}

export default Vehicletransportlist;