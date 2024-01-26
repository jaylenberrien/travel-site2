import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useState } from "react"

export default function SearchPage () {

    const tripAdvisor = import.meta.env.VITE_TRIPADVISOR;

    const [input, setInput] = useState("");
    const [results, setResult] = useState(null);

    const Search = async (value) =>{
        try{
            let searchResult = await fetch(`https://api.content.tripadvisor.com/api/v1/location/search?searchQuery=${input}&language=en&key=${tripAdvisor}`)
            searchResult = await searchResult.json()
            setResult(searchResult.data)
            console.log(searchResult.data)
            console.log(input)
        }
        catch(error){
            console.log(error)
        }

    }

    const handleChange = (value) =>{
        setInput(value)
        Search(value)
    }


  return (
    <>
        <Nav />
        <div className='h-screen flex '>
            <div className='m-auto flex-block h-4/5 w-4/5 text-center'>
                <h1 className='text-4xl mb-20'>So, where do you want to go?</h1>
                <form className='mt-35'>
                    <div className='bg-gray-300 text-black rounded-xl h-12 w-4/5 mx-auto shadow-2xl' >       
                        <input type="text" onChange={handleChange} value={input} className='w-4/5 h-full text-2xl '/>
                        <input type="Submit" onClick={Search} className='' />
                    </div>
                </form>
                <img src='https://cdn.i-scmp.com/sites/default/files/images/methode/2018/03/28/7167c942-322c-11e8-9019-a420e6317de0_image_hires_164927.jpg' className='h-3/5 w-full pt-10 mt-20'/>
            </div>
            


        </div>
        <Footer />
    </>

  )
}

