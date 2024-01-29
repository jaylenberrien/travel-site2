import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState } from "react"
import axios from 'axios';

export default function SearchPage () {

    // const tripAdvisor = import.meta.env.VITE_TRIPADVISOR;

    const [input, setInput] = useState("");
    // const [results, setResult] = useState(null);

    const Search = async (value) =>{
        try{

        }
        catch(error){
            console.log(error)
        }

    }
    
    const Typing = async function(value) {
        try {
            console.log(value)
            let post={
                query: value
            }
            const response = await axios.post('http://localhost:5000/search', post)
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // try {
    //     console.log(value)
    //     let post={
    //         query: value
    //     }
    //     const response = await fetch('/api/search', {
    //         method: 'POST',
    //         headers:{
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(post)
    //     })
    //     const resultInJson = await response.json();
    //     console.log(resultInJson)

    const handleChange = (value) =>{
        setInput(value)
        Typing(value)
        Search(value)
    }

  return (
    <>
        <Nav />
        <div className='h-screen flex '>
            <div className='m-auto flex-block h-4/5 w-4/5 text-center'>
                <h1 className='text-4xl mb-20'>So, where do you want to go?</h1>
                <form className='mt-35' onSubmit={(e) => { e.preventDefault(); Search(input); }}>
                    <div className='bg-gray-300 text-black rounded-xl h-12 w-4/5 mx-auto shadow-2xl' >       
                        <input type="text" value={input} onChange={ (e) => handleChange(e.target.value)} className='w-4/5 h-full text-2xl '/>
                        <input type="Submit" onClick={Search(input)} className='' />
                    </div>
                </form>
                <img src='https://cdn.i-scmp.com/sites/default/files/images/methode/2018/03/28/7167c942-322c-11e8-9019-a420e6317de0_image_hires_164927.jpg' className='h-3/5 w-full pt-10 mt-20'/>
            </div>
            


        </div>
        <Footer />
    </>

  )
}

