import React from 'react'
import { useNavigate } from 'react-router-dom'

const Report = () => {
    const navigate = useNavigate();


  return (
    <>
    <button onClick={()=>{navigate("/Turnover")}}>Turnover Report</button>
    <button onClick={()=>{navigate("/Employee")}}>Employee Report</button>
    </>
  )
}

export default Report;