import React, {useState, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const {id} = useParams();
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
    

    useEffect(() => { 
        axios.post("http://localhost:3001/getUpdateData", {id}) 
            .then(
                (response) => {
                    setPnumber(response.data.pnumber);
                    setPname(response.data.pname);
                    setBuyingPrice(response.data.buyingprice);
                    setBought(response.data.bought);
                    setAmountOut(response.data.amountout);
                    setSellingPrice(response.data.sellingprice); 
                    setSold(response.data.sold);  
                    setStock(response.data.setstock);
                    setUnitProfit(response.data.unitprofit);
                    setProfit(response.data.profit);
                })
            .catch(
                err =>{console.log(err)},
            )
    },[id])
            const handleSubmit = (e) =>{
                e.preventDefault();
                try {
                    axios.post("http://localhost:3001/update", {id, pnumber, pname, buyingprice, bought, amountout, sellingprice, sold, stock, unitprofit, profit})
                    .then ((response)=>{
                        console.log(response);
                        navigate('/');
                    })
                    .catch((err) => {console.log(err) })
                }catch(err) {
                }
            };
                

  return (
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
  )
}

export default Update