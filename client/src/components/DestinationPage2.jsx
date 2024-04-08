import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';




export default function DestinationPage2 () {

  const { id } = useParams();
  const { nickname } = useParams();
  const [bio, setBio] = useState();



  useEffect(()=>{
    const Bios = async function(){
      try {
        let post ={
          locationId: id
        }
        const response = await axios.post('http://localhost:5000/search/bio', post)
        const bioResponse = response.data.bioData.description
        setBio(bioResponse)
      } catch (error) {
        console.log(error)
      }
    }


    Bios()
    
  }, [id])
  

  return (



    <div className='h-96 pt-20 flex flex-col'>
      <div><p className='text-3xl font-medium ml-5'>More about <div className='text-purple-700 inline'>{nickname}</div> </p> </div>
      <div className='bg-blue-300 h-4/5 my-auto grid text-center grid-cols-2'>
        <div className='row-span-2'>
          <p>{bio}</p>
        </div>
      </div>
    </div>
  )
}



