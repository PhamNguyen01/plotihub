import Dashboard from '@mui/icons-material/Dashboard'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import Invoices from './Components/Invoices'
import Payment from './Components/Payment'
import Expenses from './Components/Expenses'
import BasicButtons from './Components/Dasboard'
// import PermanentDrawerLeft from './Components/Drawer'

function Handler() {
    return (
        <div>
            <Routes>
                <Route path="/dashboard" element={<App />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/expenses" element={<Expenses />} />
                {/* <Route path="/contact-us" element={<Contact />} /> */}

            </Routes>
        </div>
    )
}
export default Handler