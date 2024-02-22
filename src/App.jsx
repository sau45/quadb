import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Summary from './pages/Summary'



function App() {
  

  return (
    <>
   <Header/>
   <BrowserRouter>
   <Routes>
    <Route path="/" Component={Home}/>
    <Route path='/summary' Component={Summary}/>
   </Routes>
   </BrowserRouter>
   <Footer/>
     

    </>
  )
}

export default App
