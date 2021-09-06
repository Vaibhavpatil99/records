import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Records() {

    const [Data, setData] = useState([])

    useEffect(
        () =>
    axios.get("http://localhost:3003/posts/")
    .then((res) =>{
        console.log(Data);
        setData(res.data);          
  })
    .catch((err) =>{
  console.log(err);
   }),[]
    );
   const [search, setSearch] = useState({
       search:""
   })
   const event = (e) => {
    setSearch({...search,[e.target.name]:e.target.value})
    console.log(search)
   }


   
   const deleteRecord = id =>{
    axios.delete(`http://localhost:3003/posts/deletePost/${id}`)
    .then((res) =>{
        console.log(res);
  })
   }
   
    return (
        <div>
            <div className="flex justify-center items-center logH shadow-2xl">
                <div className="bg-white  w-4/6 flex-col items-center rounded-2xl">
                    <div className=" bg-blue-900 rounded-2xl w-full h-32  flex justify-center items-center overflow-hidden">
                        <h2 className="text-white text-4xl mx-3">Records</h2>
                        <input type="text" placeholder="Last Name" className="outline-none text-blue-900 border-2 h-8  rounded-lg px-2" name="search"id="search" value={search} onChange={event} />
                    </div>
                    <div className=" m-12 ">
                        <div className="flex justify-around my-3">
                            <h2 className="text-xl font-semibold text-blue-900 w-2/6" >Name</h2>
                            <h2 className="text-xl font-semibold text-blue-900 w-2/6" >Email</h2>
                            <h2 className="text-xl font-semibold text-blue-900 w-1/6" >City</h2>
                            <h2 className="text-xl font-semibold text-blue-900 w-1/6" >Controls</h2>
                        </div>
                        {Data.map((e)=>(
                        <div className="flex justify-around w-full my-3">
                            
                            <h2 className="text-xl font-semibold w-2/6" >{e.firstName}&nbsp;{e.lastName}</h2>
                            <h2 className="text-xl font-semibold w-2/6" >{e.email}</h2>
                            <h2 className="text-xl font-semibold w-1/6" >{e.city}</h2>
                            <div className="flex">
                            <button className="px-3 py-1 rounded-lg mx-2 text-blue-900 font-bold shadow-lg bg-white">Edit</button>
                            <button className="px-3 py-1 rounded-lg mx-2 text-blue-900 font-bold shadow-lg bg-white" onClick={()=>deleteRecord(e._id)}>Delete</button>
                            </div>
                        </div>
                        ))}
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Records
