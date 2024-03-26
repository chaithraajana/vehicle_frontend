import React from 'react'
import Shop from './components/Shop'
import AddData from './components/AddData'
import Update from './components/Update'
import Aboutus from './components/Aboutus'
import Contact from './components/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/Product'
import Turnover from './components/Turnover'
import Employee from './components/Employee'
import AddData1 from './components/AddData1'
import Update1 from './Update1'
import Report from './components/Report'
 

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/AddData" element={<AddData />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path='/Aboutus' element={<Aboutus />}></Route>
          <Route path='/Product' element={<Product />}></Route>
          <Route path='/Contact' element={<Contact />}></Route>
          <Route path='/Turnover' element={<Turnover />}></Route>
          <Route path='/Employee' element={<Employee />}></Route>
          <Route path='/AddData1' element={<AddData1 />}></Route>
          <Route path="/update1/:id" element={<Update1 />} />
          <Route path="/report" element={<Report />} />

          

           
           

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App















// import React from 'react'
// import Employee from './components/Shop'
// import AddData from './components/AddData'
// import Update from './components/Update'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'

// const App = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Employee />} />
//           <Route path="/AddData" element={<AddData />} />
//           <Route path="/update/:id" element={<Update />} />


//         </Routes>
//       </BrowserRouter>

//     </>
//   )
// }

// export default App
