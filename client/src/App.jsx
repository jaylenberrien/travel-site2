import Login from './pages/Login'
import Register from './pages/Register'
import DestinationPage from './pages/DestinationPage'
import SearchPage from './pages/SearchPage'
import AccountPage from './pages/AccountPage'
import About from './pages/About'
import './App.css'
import { Route, Routes} from 'react-router-dom'
// import { useEffect } from 'react'

function App() {


  return (
    <>
      {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Login/> */}
      {/* <Register/> */}
      <Routes>

        <Route path='/search' element={<SearchPage />}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/:nickname/:id' element={<DestinationPage />}/>
        <Route path='/account' element={<AccountPage/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      {/* <DestinationPage /> */}
      
    
      
      
    </>
  )
}

export default App

// we can go to the netninja vid to redirect people based on their status, so when the logout
// the page closes