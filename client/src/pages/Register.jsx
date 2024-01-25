import React from 'react'
import { useState } from 'react'

export default function Register () {

    const [userDisplay, setUserDisplay] = useState('')
    
    const handleChange = (value) => {
        setUserDisplay(value)
    }


  return (
    <div className='flex'>
      <div className='bg-black h-screen w-1/2 flex'>
        <h1 className='text-white text-8xl m-auto text-right'>Welcome {userDisplay}, stay a while</h1>
      </div>
      <div className='flex h-screen w-1/2'>
          <div className='m-auto bg-slate-300 p-10 flex-block text-right'> 
              <h2 className='text-center'>Register</h2>
              <br /><br />
              <form action='' className='text-center'>
                  Username: <input type='text' value={userDisplay} onChange={(e) => handleChange(e.target.value)} className=''/>
                  <br /><br />
                  Password: <input type='password' className=''/>
                  <br /><br />
                  <input type='submit' value='Submit' className='text-white bg-gray-500'/>
              </form>
              <br />
          </div>
      </div>
    </div>
  )
}
