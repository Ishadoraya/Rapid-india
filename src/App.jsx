import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { QuoteProvider } from './components/Quote/QuoteContext'
import { WeatherProvider } from './components/weather/WeatherContext'
const App = () => {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<QuoteProvider>
        <WeatherProvider>
        <Home/>
        </WeatherProvider>
      </QuoteProvider>}/>
     <Route path="/About" element={<About/>}/>
     <Route path="/Contact" element={<Contact/>}/>

    </Routes>
    </Router>
  )
}

export default App
