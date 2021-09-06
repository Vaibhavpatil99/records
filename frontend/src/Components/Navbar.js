import React from 'react'
import logo from "../Components/logo.png"
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
        <nav className="flex justify-between items-center bg-blue-900 p-3  ">
            <img src={logo} alt="" className="w-12 mx-12   " />
            <ul className="flex  justify-between w-40  mx-32">
                <Link to="/" className="px-3 py-1 rounded-lg mx-2 text-blue-900 font-bold shadow-lg bg-white">Login</Link>
                <Link to="/register" className="px-3 py-1 rounded-lg mx-2 text-blue-900 font-bold shadow-lg bg-white">Register</Link>
                <Link to="/records" className="px-3 py-1 rounded-lg mx-2 text-blue-900 font-bold shadow-lg bg-white">Records</Link>
                
            </ul>
        </nav>
        </>
            
        
    )
}

export default Navbar
