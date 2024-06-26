import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import List from './List'


const Shop = () => {
  const navigate=useNavigate();

  function updateAllData(){
    axios
    .get("http://localhost:3001/updateAllData")
    .then((response) => {
      console.log(response);
      alert(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    }
  


  return (
    <>
    <center><h1 className='heading'>XYZ Pvt. ltd.</h1>
   
    <button onClick={()=>{navigate("/Aboutus")}}>Aboutus</button>
    <button onClick={()=>{navigate("/Product")}}>Product</button>
    <button onClick={()=>{navigate("/Contact")}}>Contact</button>
    <button onClick={()=>{navigate("/Report")}}>Report</button>
    {/* <button onClick={updateAllData}>Update Records</button> */}

  <img className='imgE' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPSmvbBhLMFNSIGxOVguxfNL0PeHj5PzM_aNA-NYf31jaXXTHi3wCaPO5jlOV-UYczSSU&usqp=CAU" width="1200" height="500" alt="" />

    </center>
    
    </>
  )
}

export default Shop;





















// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import List from './List'

// const Employee = () => {
//     const navigate = useNavigate();
//     const [employee, setEmployee] = useState([]);

//     var mtotalsalary = 0;
//     var ytotalsalary = 0;
//     var totalEmployees =0;

//     useEffect(() => {  
//         axios
//         .get("http://localhost:3001/employee")
//         .then(
//             (response) => {
//                 // console.log(response.data);
//                 setEmployee(response.data);
//             }
//             )
//         .catch(
//             (error) => {
//                 console.log(error)
//             }
//         )

//     }, [employee]);


//   return (
//     <>

//     <center><h1>Turn over Report</h1>
    
//     </center>
//     <div className='header'>
    

//         <div>id</div>
//         <div>Employee Id</div>
//         <div>name</div>
//         <div>salary</div>
//         <div>yearly-salary</div>
        
         
//     </div>
    
    
//     {employee.map(
//     (employee) => {
//         mtotalsalary = mtotalsalary + employee.employee_salary;
//         ytotalsalary = ytotalsalary + employee.employee_salary * 12;
//         totalEmployees++;

//     return(
//         <List
//     key={employee.id}
//     id={employee.id}
//     employee_id={employee.employee_id}
//     name={employee.employee_name}
//     employee_salary={employee.employee_salary}
//     yearly_salary={employee.employee_salary * 12}
//     />
//     )
//     }

//     )
//     }
//     <div className='student_output'>
//     <div>Total number employee{totalEmployees}</div>
//     <div>Total monthly salary{ mtotalsalary}</div>
//     <div>Total yearly salary{ytotalsalary}</div>
//     </div>

//     <button onClick={()=>{navigate("/AddData")}}>AddData</button>
//     </>
//   )
// }

// export default Employee