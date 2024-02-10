import React from 'react'

export default function DestinationPage2 () {
  return (
    // <div className='h-screen'>
    //     DestinationPage2
    // </div>
    <div className='h-screen pt-20 flex flex-col'>
      <div>More about (city name) </div>
      <div className='bg-blue-300 h-4/5 my-auto grid text-center grid-cols-2'>
        <div className='row-span-2'>
          <p>This where the city bio will go</p>
        </div>
        <div>
          <p>This is where the first review will go</p>
        </div>
        <div>
          <p>This is where the second review will go </p>
        </div>
      </div>
    </div>
  )
}

