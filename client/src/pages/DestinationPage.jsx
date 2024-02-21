import React from 'react'
import FixedNav from '../components/FixedNav'
import Footer from '../components/Footer'
import DestinationPage1 from '../components/DestinationPage1'
import DestinationPage2 from '../components/DestinationPage2'
import DestinationPage3 from '../components/DestinationPage3'


export default function DestinationPage() {

  return (
    <>
      <FixedNav />
      <DestinationPage1 />
      <DestinationPage2 />
      <DestinationPage3 />
      <Footer/>
    </>
  )
}

