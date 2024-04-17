import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import HomePage from './pages/HomePage/HomePage'
import VideoDetailsPage from './pages/HomePage/VideoDetailsPage'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<div>Not Found</div>} />
        <Route path="/video/:id" element={<VideoDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
