import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const List = (props) => {
    const navigate = useNavigate();

    const {id, pnumber, pname, buyingprice, bought, amountout, sellingprice, sold, amountIn, stock, unitprofit, profit} = props
    // var yearly_salary = employee_salary * 12;


    const handleDelete = () => {
        // const id= props.id;
        try {
            axios.post("http://localhost:3001/delete", {id})
            .then(response => {console.log(response) })
                .catch((err) => {console.log(err)})
            
        } catch (error) {
          console.log(error)  
        }
    }
  return (
    <div className='employeeData'>
    
    <div id='id1'>{id}</div>
    <div id='pn'>{pnumber}</div>
    <div>{pname}</div>
    <div>{buyingprice}</div>
    <div>{bought}</div>
    <div>{amountout}</div>
    <div>{sellingprice}</div>
    <div>{sold}</div>
    <div>{amountIn}</div>
    <div>{stock}</div>
    <div>{unitprofit}</div>
    <div>{profit}</div>

    <button onClick={handleDelete}>Delete</button>
    <button onClick={() => {navigate(`/update/${id}`)}}>Update</button>
    </div>
  )
}

export default List






















// import React from 'react'
// import axios from 'axios'
// import { useNavigate } from 'react-router-dom'

// const List = (props) => {
//     const navigate = useNavigate();

//     const {id, employee_id, name, employee_salary} = props
//     var yearly_salary = employee_salary * 12;


//     const handleDelete = () => {
//         const id= props.id;
//         try {
//             axios.post("http://localhost:3001/delete", {id})
//             .then(response => {console.log(response) })
//                 .catch((err) => {console.log(err)})
            
//         } catch (error) {
//           console.log(error)  
//         }
//     }
//   return (
//     <div className='employeeData'>
//     <div>{id}</div>
//     <div>{employee_id}</div>
//     <div>{name}</div>
//     <div>{employee_salary}</div>
//     <div>{yearly_salary}</div>

//     <button onClick={handleDelete}>Delete</button>
//     <button onClick={() => {navigate(`/update/${id}`)}}>Update</button>
//     </div>
//   )
// }

// export default List