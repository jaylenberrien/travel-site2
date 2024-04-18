import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useSignup } from '../hooks/useSignup'

export default function Register () {

    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()

    const handleChange = (value) => {
      setUser(value)
    }


    const handlePasswordChange = (e) =>{
      setPassword(e.target.value)
    }

    const handleSubmit = async (e) =>{

      e.preventDefault();

      await signup(username, password)
      console.log(error)

      
    }


  return (
    <div className='h-screen w-screen flex bg-white' class='login-container'>
      <div className='bg-green-300 h-3/4 w-3/4 m-auto flex shadow-2xl' >
        <div class='login-background' className='bg-black h-5/6 w-5/6 m-10 flex my-auto '>
          <img src='https://static.toiimg.com/photo/107526341.cms' className='w-full'/>
        </div>
        <div className='p-10 text-left w-60 m-10 h-5/6 my-auto'> 
          <h2 className='text-left text-4xl font-medium '>Register</h2>
          <br /><br />
          <form onSubmit={handleSubmit} className='text-left'>
            Username: <input type='text' placeholder='Create username' className='placeholder-gray-500 placeholder-opacity-50 ' value={username} onChange={(e) => handleChange(e.target.value)} />
            <br /><br />
            Password: <input type='password' placeholder='Create password' className='placeholder-gray-500 placeholder-opacity-50' value={password} onChange={handlePasswordChange} />
            <br /><br />
            <input disabled={isLoading} type='submit' value='Submit' className='text-white bg-gray-500 w-44 mb-3'/>
            <br /><br />
            {error && <div className='error'> {error}</div>}
          </form>
          {/* <br /> */}
          {error && <div className='text-sm text-red-700 my-2'>{error}</div>}
          <p className='text-sm'>Already have an account?</p>
          <a href='/'><button className=' text-white bg-gray-500 w-44'>Login</button></a>
        </div>
  
      </div>
    </div>
  )
}


