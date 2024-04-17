import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import VideoDetailsPage from './pages/HomePage/VideoDetailsPage'
import Navbar from './components/Navbar'
import Price from './pages/Price'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/price" element={<Price/>}/>
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/video/:id" element={<VideoDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
