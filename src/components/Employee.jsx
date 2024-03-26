import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Employeelist from './Employeelist'

const Employee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState([]);

    var mtotalsalary = 0;
    var ytotalsalary = 0;
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

    <center><h1>Report of Anual Employee Expenses of ABCD Pvt.ltd</h1>
    
    </center>
    <div className='header'>
    
        <div>id</div>
        <div>Employee Id</div>
        <div>name</div>
        <div>salary</div>
        <div>yearly-salary</div>
        <div>tax</div>
        <div>insurance</div>
        <div>hra</div>

        
         
    </div>
    
    
    {employee.map(
    (employee) => {
        mtotalsalary = mtotalsalary + employee.employee_salary;
        ytotalsalary = ytotalsalary + employee.employee_salary * 12;
        totalEmployees++;
        tax = ytotalsalary *0.2;
        insurance = ytotalsalary * 0.05;
        hra = ytotalsalary * 0.3;

    return(
        <Employeelist
    key={employee.id}
    id={employee.id}
    employee_id={employee.employee_id}
    name={employee.employee_name}
    employee_salary={employee.employee_salary}
    yearly_salary={employee.employee_salary * 12}
    tax={tax}
    insurance={insurance}
    hra = {hra}
    />
    )
    }

    )
    }
    <div className='student_output'>
    <div>Total number employee{totalEmployees}</div>
    <div>Total monthly salary{ mtotalsalary}</div>
    <div>Total yearly salary{ytotalsalary}</div>
    </div>

    <button onClick={()=>{navigate("/AddData1")}}>Add Data1</button>
    <button onClick={()=>{navigate("/")}}>Go Back</button>
    </>
  )
}

export default Employee