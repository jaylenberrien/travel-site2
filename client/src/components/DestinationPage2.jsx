import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';




export default function DestinationPage2 () {

  const { id } = useParams();
  const { nickname } = useParams();
  const [bio, setBio] = useState()


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



    <div className='h-screen pt-20 flex flex-col'>
      <div>More about {nickname} </div>
      <div className='bg-blue-300 h-4/5 my-auto grid text-center grid-cols-2'>
        <div className='row-span-2'>
          <p>{bio}</p>
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

// im having an issue with finding reviews for the city
// that im making the page for, im not finding out how to do it anymore
// it isnt there so im guessing that im going to have to change what my plans
// are for making the destination page, im prolly not going to add the reviews
// i dont know if im going to add something else or just move over the review and
// the name of the page