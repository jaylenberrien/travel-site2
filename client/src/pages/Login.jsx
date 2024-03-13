import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../hooks/useLogin'

export default function Login () {

  const navigate = useNavigate()
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()
  
  const handleChange = (value) => {
    setUser(value)
  }


  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) =>{
    // const userName = userDisplay
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:5000/auth/login',{
        username: user,
        password: password
      })
    } 
    catch(error){
      // console.log(error)
    }
    navigate('/')
  }

  return (
    <div className='flex'>
      <div className='bg-black h-screen w-1/2 flex'>
        <h1 className='text-white text-8xl m-auto text-right'>Ready for the trip of a lifetime?</h1>
      </div>
      <div className='flex h-screen w-1/2'>
          <div className='m-auto bg-slate-300 p-10 flex-block text-right'> 
              <h2 className='text-center'>Login</h2>
              <br /><br />
              <form onSubmit={handleSubmit} className='text-center'>
                  Username: <input type='text' value={user} onChange={(e) => handleChange(e.target.value)} className=''/>
                  <br /><br />
                  Password: <input type='password' value={password} onChange={handlePasswordChange} className=''/>
                  <br /><br />
                  <input type='submit' value='Submit' className='text-white bg-gray-500'/>
              </form>
              <br />
              <a href='' className='underline decoration-solid text-sm'>Click here to register</a>
          </div>
      </div>
    </div>
  )
}

