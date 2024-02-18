import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';




export default function DestinationPage2 () {

  const { id } = useParams();
  const { nickname } = useParams();
  const [bio, setBio] = useState();
  const [review, setReview] = useState();


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

    const Review = async function(){

      try {
        let post ={
          locationId: id
        }
        const response = await axios.post('http://localhost:5000/search/review', post)
        const reviewResponse = response.data.reviewData.ranking_data.ranking_string
        setReview(reviewResponse)        
      } catch (error) {
        console.log(error)
      }


    }

    Bios()
    Review()
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

//im going to have to find something else to put, i tried to use something else that 
// was supposed to be in the response but it wasnt there. maybe a picture of some sort
//would be good, even if i cant find anything else to add it would be okay, i could just style it better

//if we dont decide to replace the reviews we are going to add icons of some sort to the things that we
//want to have added to trips after we finish the last section of the page and then we can work on either
//adding those things to the database or login and user auth, whichever has to be done first