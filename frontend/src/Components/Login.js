import React, { useState } from 'react'
import logo from '../Components/logo.png'
import { Link } from 'react-router-dom'
import img from '../Components/design.jpg'
function Login() {

    // const [scroll, setScroll] = useState(false);
    // const setScroll = () => {
    //     console.log(window.scrollY)
    // }
    // window.addEventListener(scroll, setScroll)

    return (
        <form action="subimt">
        <div className="flex justify-center items-center logH ">
            <div className=" bg-white h-5/6 w-80 mx-2 p-8 rounded-2xl flex flex-col justify-center hover:shadow-2xl trans">
                <div className="flex items-center">
                    <img src={logo} alt="" className="w-12" />
                    <h2 className="text-blue-900 text-4xl mx-3">Login</h2>
                </div>
                <div className="flex flex-col my-6">
                    <div className="my-3 flex flex-col">
                        <label htmlFor="input">Username</label>
                        <input type="text" placeholder="User123" className="outline-none text-blue-900 border h-8  rounded-lg px-2" />
                    </div>
                    <div className="my-3 flex flex-col">
                        <label htmlFor="input">Password</label>
                        <input type="password" placeholder="Min 8 characters" className="outline-none text-blue-900 border h-10 rounded-lg px-2" />
                    </div>
                    <button className="border py-1 mx-12 my-3 font-bold text-lg rounded-xl text-blue-900 bg-red-400">Login</button>
                    <div className="flex my-3">
                    <h3>Not registerd yet?</h3>
                    <Link to="/register" className="text-blue-900" >Create an account</Link>
                    </div>
                </div>
            </div>
            <div className="trans bg-white h-5/6 w-80 mx-2  rounded-2xl flex flex-col justify-center items-center hover:shadow-2xl">
                <h2 className="text-3xl font-semibold text-blue-900">Task Maneger</h2>
                <img src={img} alt="" className="w-96 " />
            </div>
        </div>
        </form>
    )
}

export default Login
