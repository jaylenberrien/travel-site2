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
    <div className='flex'>
      <div className='bg-black h-screen w-1/2 flex'>
        <h1 className='text-white text-8xl m-auto text-right'>Welcome {username}, stay a while</h1>
      </div>
      <div className='flex h-screen w-1/2'>
          <div className='m-auto bg-slate-300 p-10 flex-block text-right'> 
              <h2 className='text-center'>Register</h2>
              <br /><br />
              <form onSubmit={handleSubmit} className='text-center'>
                  Username: <input type='text' value={username} onChange={(e) => handleChange(e.target.value)} className=''/>
                  <br /><br />
                  Password: <input type='password' value={password} onChange={handlePasswordChange} className=''/>
                  <br /><br />
                  <input disabled={isLoading} type='submit' value='Submit' className='text-white bg-gray-500'/>
                  <br /><br />
                  {error && <div className='error'> {error}</div>}
              </form>
              <br />
          </div>
      </div>
    </div>
  )
}


//the error isnt displaying figure out why, look at the error in the hook that we made and then see if it is 
//being rendered right in the register component 