import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import List from './List'


const Turnover = () => {
    const navigate = useNavigate();
    const [turnoverData, setData] = useState([]);

    var totalPurchaseAmount = 0;
    var totalSellingAmount = 0;
    var annualTurnoverAmount = 0;
    var annualProfitAmount = 0;
    var amountIn = 0;
    var totalAmountIn = 0;

    // var amountout = 0;
    // var unitprofit = 0;
    // var profit = 0;
    // var amountIn = 0;

    useEffect(() => {  
        axios
        .get("http://localhost:3001/turnoverData")
        .then(
            (response) => {
                // console.log(response.data);
                setData(response.data);
            }
            )
        .catch(
            (error) => {
                console.log(error)
            }
        )

    }, [turnoverData]);


  return (
    <>

    <center><h1>Turn over Report</h1></center>
    <div className='employeeList'>
     <div className='employeeData'>
        <div id='id1'>id</div>
        <div id='pn'>pnumber Id</div>
        <div>pname</div>
        <div>buyingprice</div>
        <div>bought</div>
        <div>Amount Out</div>
        <div>sellingprice</div>
        <div>sold</div>
        <div>Amount In </div>
        <div>Stock</div>
        <div>Unit Profit</div>
        <div>Profit</div>
        </div>
         
    {turnoverData.map(
    (turnover) => {
      {totalPurchaseAmount = totalPurchaseAmount + turnover.amountout}
      {totalSellingAmount = totalSellingAmount + amountIn}
      {annualTurnoverAmount = totalPurchaseAmount - totalSellingAmount}
      {totalAmountIn = totalAmountIn + amountIn}
      {amountIn = turnover.sellingprice * turnover.sold}
      {annualProfitAmount = annualProfitAmount + turnover.profit}  
        

    return(
    <List
    key={turnover.id}
    id={turnover.id}
    pnumber={turnover.pnumber}
    pname={turnover.pname}
    buyingprice={turnover.buyingprice}
    bought={turnover.bought}
    amountout={turnover.amountout}
    sellingprice={turnover.sellingprice}
    sold={turnover.sold}
    amountIn={amountIn}
    stock={turnover.stock}
    unitprofit={turnover.unitprofit}
    profit={turnover.profit}

    />
    )
    }

    )
    }
    <div className='student_output'>
    <div>Total purchase amount ={totalPurchaseAmount}</div>
    <div>Total selling amount={totalSellingAmount}</div>
    <div>Annual Turnover Amount={annualTurnoverAmount}</div>
    <div>Total Amountin ={totalAmountIn}</div>
    <div>Annual Profit Amount={annualProfitAmount}</div>
    </div>
    </div>
    <button
   onClick={() => {
    navigate("/");
   }}
 >
  GoBack
 </button>

 <button onClick={()=>{navigate("/AddData")}}>AddData</button>
    </>
  )
}

export default Turnover;
