import Login from './pages/Login'
import Register from './pages/Register'
import DestinationPage from './pages/DestinationPage'
import SearchPage from './pages/SearchPage'
import AccountPage from './pages/AccountPage'
import './App.css'
import { Route, Routes} from 'react-router-dom'
// import { useEffect } from 'react'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<SearchPage />}/>
        <Route path='/account' element={<AccountPage/>}/>
        <Route/>
      </Routes>
      <DestinationPage />
      {/* <Login />
      <Register /> */}
    
      
      
    </>
  )
}

export default App
