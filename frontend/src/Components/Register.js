import React,{ useState } from 'react'
import logo from '../Components/logo.png'
// import { Link } from 'react-router-dom'
// import axios from "Axios"
import axios from 'axios'

function Register() {
    const [fullname,setFName]= useState({
        firstName:"",
        lastName:"",
        email:"",
        city:""
      })
     const event = (e) => {
   
  
    setFName({...fullname,[e.target.name]:e.target.value})
    console.log(fullname)
   }
   const onSubmit = (e) => {
      e.preventDefault();
  
  
    
    //  console.log(Register);
     axios.post("http://localhost:3003/posts/",fullname)
      .then((res) =>{
         console.log(res)
    })
      .catch((err) =>{
    console.log(err);
     })


     
      }
    
  
       
    return (
        <form onSubmit={onSubmit}>
            <div className="flex justify-center items-center logH shadow-2xl">

                <div className="bg-white h-5/6 w-3/6  flex justify-center rounded-2xl">
                    <div className=" h-full w-4/6 m-12 ">
                        <h2 className="text-blue-900 text-4xl mx-3 ">Registration</h2>
                        
                        <div className="my-5 flex flex-col">
                            <label htmlFor="input">First Name</label>
                            <input type="text" placeholder="First Name" className="outline-none text-blue-900 border-2 h-8  rounded-lg px-2" name="firstName"id="name" value={fullname.firstName} onChange={event} />
                        </div>
                        <div className="my-5 flex flex-col">
                            <label htmlFor="input">Last Name</label>
                            <input type="text" placeholder="Last Name" className="outline-none text-blue-900 border-2 h-8  rounded-lg px-2" name="lastName"id="user" value={fullname.lastName} onChange={event} />
                        </div>
                        
                        <div className="my-5 flex flex-col">
                            <label htmlFor="input">Email</label>
                            <input type="email" placeholder="example@gmail.com" className="outline-none text-blue-900 border-2 h-8  rounded-lg px-2" name="email"id="email" value={fullname.email} onChange={event} />
                        </div>
                        <div className="my-5 flex flex-col">
                            <label htmlFor="input">City</label>
                            <input type="text" placeholder="City" className="outline-none text-blue-900 border-2 h-8  rounded-lg px-2" name="city"id="city" value={fullname.city} onChange={event} />
                        </div>

                        {/* <div className="my-5 flex flex-col">
                            <label htmlFor="input">Password</label>
                            <input type="password" placeholder="password" className="outline-none text-blue-900 border-2 h-8  rounded-lg px-2" />
                        </div> */}
                        
                        <button className="border my-6 py-1 px-3 font-bold text-lg rounded-xl text-blue-900 bg-red-400">SignUp</button>
                       
                        

                    </div>
                    <div className=" bg-blue-900 rounded-2xl h-full w-2/6 flex justify-center items-center overflow-hidden">
                    <img src={logo} alt="" className=" ml-56 " />
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Register
