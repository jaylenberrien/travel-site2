import Login from './pages/Login'
import './App.css'
import { useEffect } from 'react'

function App() {

  useEffect(() => {

    const getData = async function(){
      const response = await fetch("https://localhost:5000")
      console.log(response)
    }

    getData()


  }, [])


  return (
    <>
      <Login />

    </>
  )
}

export default App
