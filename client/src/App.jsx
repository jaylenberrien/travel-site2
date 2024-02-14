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
      {/* <Login /> */}
      {/* <Register /> */}
      <Routes>
        <Route path='/' element={<SearchPage />}/>
        <Route path='/:nickname/:id' element={<DestinationPage />}/>
        <Route path='/account' element={<AccountPage/>}/>
        <Route path='/about' element={<About/>}/>

      </Routes>
      {/* <DestinationPage /> */}
      
    
      
      
    </>
  )
}

export default App
