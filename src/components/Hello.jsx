import React, { useEffect, useState } from 'react'
import tenget from '../assets/tenget.png'
import eyeKanan from '../assets/Googly Eyes kanan.png'
import eyeKiri from '../assets/Googly Eyes kiri.png'
import bg from '../assets/bg.png'
import { useNavigate } from 'react-router-dom'

function Hello() {
  const navigate = useNavigate()
  const [showCat, setShowCat] = useState(false)
  const [lookRight, setLookRight] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowCat(true), 200)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const eyeMove = setInterval(() => {
      setLookRight(prev => !prev)
    }, 1200)

    return () => clearInterval(eyeMove)
  }, [])

  return (
    <div 
      className='relative min-h-screen overflow-hidden bg-cover'
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className='z-20 pt-8 text-center'>
        <h1 className='text-5xl font-bold text-teal-800'>
          Hello, who's there?
        </h1>
        <h4 className='mt-3 font-semibold text-teal-600'>
          Never see you before 🤔
        </h4>
      </div>

      <div className='absolute left-1/2 bottom-[-80px] -translate-x-1/2'>
        <div
          className={`
            relative w-[800px] transition-all ease-out duration-1000
            ${showCat ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
          `}
        >
          <img
            src={tenget} alt='tenget kyuti'
            className={`
              w-full h-auto
            `}
          /> 

          <img 
            src={lookRight ? eyeKanan : eyeKiri}
            alt='googly eyes'
            className='absolute top-[240px] right-[-45px] w-[1000px] z-30
            transition-all duration-300'
          />
        </div>
      </div>       

      <button
          onClick={() => navigate('/inspection')}
          className='absolute bottom-8 left-1/2 z-20
          -translate-x-1/2 rounded-full bg-teal-600 px-6 py-3
          shadow-2xl text-white font-semibold transition
          hover:scale-105 active:scale-95'
        >
          Click here!
      </button>
    </div>
  )
}

export default Hello