import React from 'react'
import { useNavigate } from 'react-router-dom'

const Report = () => {
    const navigate = useNavigate();


  return (
    <>
    <button onClick={()=>{navigate("/Transport")}}>Turnover Report</button>
    <button onClick={()=>{navigate("/Employee")}}>Employee Report</button>
    <button onClick={()=>{navigate("/Vehicletransport")}}>Vehicle Report</button>
    <button onClick={()=>{navigate("/")}}>Go Back</button>

    </>
  )
}

export default Report;