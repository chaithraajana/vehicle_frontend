import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Employeelist from './Employeelist'

const Employee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState([]);

    var mtotalearnings = 0;
    var ytotalearnings = 0;
    var totalEmployees =0;
    var tax = 0;
    var insurance = 0;
    var hra = 0;

    useEffect(() => {  
        axios
        .get("http://localhost:3001/employee1")
        .then(
            (response) => {
                // console.log(response.data);
                setEmployee(response.data);
            }
            )
        .catch(
            (error) => {
                console.log(error)
            }
        )

    }, [employee]);


  return (
    <>

    <center><h1>Employee Report of Xyz Pvt.ltd</h1>
    
    </center>
    <div className='header'>
    
        <div>id</div>
        <div>E.Number</div>
        <div>Name</div>
        <div>M.earnings</div>
        <div>Y.earnings</div>
        <div>Type</div>
        <div>Tax</div>
        <div>Insurance</div>
        <div>Hra</div>
    
    </div>
    
    
    {employee.map(
    (employee) => {
        mtotalearnings = mtotalearnings + employee.mearnings;
        ytotalearnings = ytotalearnings + employee.yearnings * 12;
        totalEmployees++;
        tax = mtotalearnings *0.2;
        insurance = mtotalearnings * 0.05;
        hra = mtotalearnings * 0.3;

    return(
        <Employeelist
    key={employee.id}
    id={employee.id}
    en={employee.en}
    ename={employee.ename}
    mearnings={employee.mearnings}
   yearnings={employee.yearnings * 12}
    type={employee.type}
    tax={tax}
    insurance={insurance}
    hra = {hra}
    />
    )
    }

    )
    }
    <div className='student_output'>
    <div>Total number employee = {totalEmployees}</div>
    <div>Total monthly salary = { mtotalearnings}</div>
    <div>Total yearly salary = {ytotalearnings}</div>
    </div>

    <button onClick={()=>{navigate("/AddData1")}}>Add Data</button>
    <button onClick={()=>{navigate("/Report")}}>Go Back</button>
    </>
  )
}

export default Employee