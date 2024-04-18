import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

export default function Login () {

  const navigate = useNavigate()
  const [username, setUser] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  
  const handleChange = (value) => {
    setUser(value)
  }


  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) =>{



    e.preventDefault();
    await login(username,password)
    console.log(error)
    // navigate('/account')
  }

  return (
    <div className='h-screen w-screen flex bg-white' class='login-container'>
      <div className='bg-green-300 h-3/4 w-3/4 m-auto flex shadow-2xl' >
        <div class='login-background' className='bg-black h-5/6 w-5/6 m-10 flex my-auto '>
          {/* <h1 className='text-white text-8xl m-auto text-right'>Ready for the trip of a lifetime?</h1> */}
          <img src='https://static.toiimg.com/photo/107526341.cms' className='w-full'/>
        </div>
        <div className='p-10 text-left w-60 m-10 h-5/6 my-auto'> 
          <h2 className='text-left text-4xl font-medium '>Login</h2>
          <br /><br />
          <form onSubmit={handleSubmit} className='text-left'>
            Username: <input type='text' placeholder='Enter username' className='placeholder-gray-500 placeholder-opacity-50 ' value={username} onChange={(e) => handleChange(e.target.value)} />
            <br /><br />
            Password: <input type='password' placeholder='Enter password' className='placeholder-gray-500 placeholder-opacity-50' value={password} onChange={handlePasswordChange} />
            <br /><br />
            <input disabled={isLoading} type='submit' value='Submit' className='text-white bg-gray-500 w-44 mb-3'/>
          </form>
          {/* <br /> */}
          {error && <div className='text-sm text-red-700 my-2'>{error}</div>}
          <p className='text-sm'>Dont have an account?</p>
          <a  href='/register'><button className=' text-white bg-gray-500 w-44'>Create Account</button></a>
        </div>
  
      </div>
    </div>
  )
}

