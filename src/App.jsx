import { useState, useRef } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'

import Enter from './components/Enter'
import Hello from './components/Hello'
import Inspection from './components/Inspection'
import Cake from './components/Cake'
import Letter from './components/Letter'
import Gallery from './components/Gallery'
import musicHbd from './assets/HBD Zamrud.m4a'

function MusicPlayer({ audioRef, isPlaying, onToggle }) {
  return (
    <div className='fixed bottom-4 right-4 z-50'>
      <audio
        ref={audioRef}
        src={musicHbd}
        loop
        playsInline
      />
      <button
        onClick={onToggle}
        className='rounded-full bg-white px-4 py-2 font-semibold text-teal-700 shadow-lg'
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}

function App() {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const startMusic = async () => {
    if (!audioRef.current) return

    try {
      audioRef.current.muted = false
      await audioRef.current.play()
      setIsPlaying(true)
    } catch (err) {
      console.log('Play blocked')
    }
  }

  const togglePlay = async () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.muted = false
      await audioRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <MusicPlayer
        audioRef={audioRef}
        isPlaying={isPlaying}
        onToggle={togglePlay}
      />

      <Routes>
        <Route path='/' element={<Enter startMusic={startMusic} />} />
        <Route path='/hello' element={<Hello />} />
        <Route path='/inspection' element={<Inspection />} />
        <Route path='/cake' element={<Cake />} />
        <Route path='/letter' element={<Letter />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </>
  )
}

export default App