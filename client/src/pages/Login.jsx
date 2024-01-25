import React from 'react'

export default function Login () {
  return (
    <div className='flex'>
      <div className='bg-black h-screen w-1/2 flex'>
        <h1 className='text-white text-8xl m-auto text-right'>Ready for the trip of a lifetime?</h1>
      </div>
      <div className='flex h-screen w-1/2'>
          <div className='m-auto bg-slate-300 p-10 flex'> 
              <h2></h2>
              <br /><br />
              <form action=''>
                  Username: <input type='text' className=''/>
                  <br /><br />
                  Password: <input type='password' className=''/>
                  <br /><br />
                  <input type='submit' value='Submit' className='text-white bg-gray-500 ml-auto mr-auto'/>
              </form>
          </div>
      </div>
    </div>
  )
}

