import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Vehiclelist = (props) => {
    const navigate = useNavigate();

    const {id, vnr_no, kmwith_dr, with_dr_rent, kmwithdrtotal, kmwithoutdrtotal, kmwithout_dr, withoutdr_rent, v_total} = props
    // var v_total = kmwithdrtotal + kmwithoutdrtotal;


    const handleDelete = () => {
        const id= props.id;
        try {
            axios.post("http://localhost:3001/delete2", {id})
            .then(response => {console.log(response) })
                .catch((err) => {console.log(err)})
            
        } catch (error) {
          console.log(error)  
        }
    }
  return (
    <div className='employeeData'>
    <div>{id}</div>
    <div>{vnr_no}</div>
    <div>{kmwith_dr}</div>
    <div>{with_dr_rent}</div>
    <div>{kmwithdrtotal}</div>
    <div>{kmwithout_dr}</div>
    <div>{withoutdr_rent}</div>
    <div>{kmwithoutdrtotal}</div>
    <div>{v_total}</div>
     

    <button onClick={handleDelete}>Delete</button>
    <button onClick={() => {navigate(`/update2/${id}`)}}>Update</button>
    </div>
  )
}

export default Vehiclelist;