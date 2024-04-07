import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';


export default function DestinationPage1 () {

  const { id } = useParams();
  const { nickname } = useParams();
  const [pic1, setPic1] = useState()
  const [pic2, setPic2] = useState()
  const [pic3, setPic3] = useState()

  useEffect(()=>{
    const Pics = async function (){

      try {
        let post={
          locationId: id
        }  
        const response1 = await axios.post('http://localhost:5000/search/photos', post)
        const pic1Url = response1.data.picData.data[0].images.medium.url
        setPic1(pic1Url)

        const response2 = await axios.post('http://localhost:5000/search/photos', post)
        const pic2Url = response2.data.picData.data[1].images.medium.url
        setPic2(pic2Url)

        const response3 = await axios.post('http://localhost:5000/search/photos', post)
        const pic3Url = response3.data.picData.data[2].images.large.url
        setPic3(pic3Url)
      } catch (error) {
        console.log(error)
      }
    }
    Pics()
  }, [id])


  return (
    <div className='h-screen pt-20 flex flex-col'>
      <div><h1>Welcome to {nickname}</h1> </div>
      <div className='bg-blue-300 h-4/5 my-auto grid text-center grid-cols-2'>
        <div className='row-span-2'>
          <img src = {pic3} />
        </div>
        <div>
          <img src = {pic1} />
        </div>
        <div>
          <img src = {pic2} />
        </div>
      </div>
        
    </div>
  )
}

// i need to order the pictures in the right way with the grid and the 
// order of pictures, for now we can move on the the next component
// i will also need to shape the pictures that are in the colored part of the div