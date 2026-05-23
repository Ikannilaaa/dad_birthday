import React from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.png'

function Enter({ startMusic }) {
  const navigate = useNavigate()

  const enterWebsite = async () => {
    await startMusic()
    navigate('/hello')
  }

  return (
    <div
      onClick={enterWebsite}
      className='flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center'
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className='text-center'>
        <h1 className='mt-6 animate-pulse text-5xl font-semibold text-teal-600'>
          Click anywhere to enter ✨
        </h1>
      </div>
    </div>
  )
}

export default Enter