import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddData = () => {

    const navigate = useNavigate();
    const [pnumber, setPnumber] = useState("")
    const [pname, setPname] = useState("")
    const [buyingprice, setBuyingPrice] = useState("")
    const [bought, setBought] = useState("")
    const [amountout, setAmountOut] = useState("")
    const [sellingprice, setSellingPrice] = useState("")
    const [sold, setSold] = useState("")
    const [stock, setStock] = useState("")
    const [unitprofit, setUnitProfit] = useState("")
    const [profit, setProfit] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        try {
            axios
            .post("http://localhost:3001/insert", {pnumber, pname, buyingprice, bought, amountout, sellingprice, sold, stock, unitprofit, profit})
            .then(
                (response) =>{
                    console.log(response)
                navigate('/Turnover')
                })
            .catch(
                err =>console.log(err)
            )
        } catch (error) {
            
        }

    }

  return (
    <>
    <div>
    <form onSubmit={handleSubmit}>
    <input placeholder='Enter Number' type = 'text' name = 'pnumber' value={pnumber} onChange = {(e) =>setPnumber(e.target.value)}  required />
        <input placeholder='Enter Item' type = 'text' name = 'pname' value={pname} onChange = {(e) =>setPname(e.target.value)} required />
        <input placeholder='Buying Price' type = 'number' name = 'buyingprice' value={buyingprice} onChange = {(e) =>setBuyingPrice(e.target.value)} required />
        <input placeholder='Bought' type = 'number' name = 'bought' value={bought} onChange = {(e) =>setBought(e.target.value)} required />
        {/* <input placeholder='Amount Out' type = 'number' name = 'amountout' value={amountout} onChange = {(e) =>setAmountOut(e.target.value)} required /> */}
        <input placeholder='Selling Price' type = 'number' name = 'sellingprice' value={sellingprice} onChange = {(e) =>setSellingPrice(e.target.value)} required />
        <input placeholder='Sold' type = 'number' name = 'sold' value={sold} onChange = {(e) =>setSold(e.target.value)} required />
        <input type = 'submit' value = "submit"/>
    </form>

    </div>
    <button onClick={()=>navigate('/')}>Go Back</button>
    </>
  )
}

export default AddData






























// import React, {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddData = () => {

//     const navigate = useNavigate();
//     const [employeeId, setEmployeeId] = useState("")
//     const [name, setName] = useState("")
//     const [salary, setSalary] = useState("")
//     const [yearly_salary, setYearlySalary] = useState("")
    

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         try {
//             axios
//             .post("http://localhost:3001/insert", {employeeId, name, salary, yearly_salary})
//             .then(
//                 (response) =>{
//                     console.log(response)
//                 navigate('/')
//                 })
//             .catch(
//                 err =>console.log(err)
//             )
//         } catch (error) {
            
//         }

//     }

//   return (
//     <>
//     <div>
//     <form onSubmit={handleSubmit}>
//         <input placeholder='Enter Employee id' type = 'text' name = 'id' value={employeeId} onChange = {(e) =>setEmployeeId(e.target.value)}  required />
//         <input placeholder='Enter Employee Name' type = 'text' name = 'name' value={name} onChange = {(e) =>setName(e.target.value)} required />
//         <input placeholder='Employee Salary' type = 'number' name = 'salary' value={salary} onChange = {(e) =>setSalary(e.target.value)} required />
//         <input placeholder='Employee yearly Salary' type = 'number' name = 'salary' value={yearly_salary} onChange = {(e) =>setYearlySalary(e.target.value)} required />
//         <input type = 'submit' value = "submit"/>
//     </form>

//     </div>
//     <button onClick={()=>navigate('/')}>Go Back</button>
//     </>
//   )
// }

// export default AddData