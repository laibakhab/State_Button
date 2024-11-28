"use client"
import { useState } from "react"
const State =() =>{
    const [count,setCount] =useState(0)
    const handleIncrement =()=>{
        setCount(count+1)
    }
    const handleDecrement =()=>{
        setCount(count-1)
    }

    
    return(
        <div className="m-48  ">
            <div className="text-center  font-bold text-5xl">
            <h1 className="mb-3">Assignment 11</h1>
            <h1>State</h1>
            </div>
            <h1 className="text-center text-3xl mt-2 mb-2">Plates : "{count}"</h1>
            <div className="text-center">
        <button className="text-2xl font-bold   p-5 bg-red-700 mb-4 rounded-lg shadow-2xl hover:bg-red-400 text-white " onClick={handleIncrement} >Add Biryani Plate </button>
        <br />
        <button className="text-2xl font-bold   p-5 bg-red-700 mb-4 rounded-lg shadow-2xl hover:bg-red-400 text-white" onClick={handleDecrement} >Less Biryani Plate </button>
        </div>
        </div>
    )
}
export default State