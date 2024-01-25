import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export default function SearchPage () {
// when you are back finish up making the search page and then move to the next page, we were working on the search bar styling
  return (
    <>
        <Nav />
        <div className='h-screen flex '>
            <div className='m-auto flex-block bg-gray-600 text-white h-4/5 w-4/5 text-center'>
                <h1 className='text-4xl'>So, where do you want to go?</h1>
                <div className='bg-gray-300 text-black h-12 rounded-xl '>
                    <form className=''>
                        <input type="text" className='w-4/5 h-full'/>
                        <input type="Submit" />
                    </form>

                </div>
                {/* <img src='https://cdn.i-scmp.com/sites/default/files/images/methode/2018/03/28/7167c942-322c-11e8-9019-a420e6317de0_image_hires_164927.jpg' className='h-4/5 w-full'/> */}
            </div>
            


        </div>
        <Footer />
    </>

  )
}

