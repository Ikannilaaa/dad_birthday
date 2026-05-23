import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.png'

function Cake() {
  const navigate = useNavigate()
  const [isLit, setIsLit] = useState(true)

  const blowCandle = () => {
    setIsLit(false)
  }

  return (
    <div 
      className='relative min-h-screen overflow-hidden px-6 py-10'
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className='mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-start'>
        <h1 className='text-center text-5xl font-bold text-teal-800'>
          Make a wish 🎂
        </h1>
        <p className='mt-3 text-center text-lg text-teal-600'>
          {isLit ? 'Click the candle to blow it out ✨' : 'Yay! Congratulations 🎊'}
        </p>

        <div className='relative mt-35'>
          {/* Candle */}
          <div className='absolute left-1/2 top-[-110px] -translate-x-1/2'>
            {/* Fire */}
            {isLit && (
              <button
                onClick={blowCandle}
                className='absolute left-1/2 top-[-22px] -translate-x-1/2
                  transition hover:scale-110 active:scale-90'
              >
                <div className='relative'>
                  <div className='bg-yellow-300 h-10 w-6 rounded-full blur-[1px]'/>
                  <div className='bg-orange-400 h-6 w-4 absolute left-1/2 top-2
                    -translate-x-1/2 rounded-full blur-[1px]'/>
                </div>
              </button>
            )}

            {/* Candle Body */}
            <div className='bg-pink-300 mx-auto h-24 w-5 rounded-full'/>
          </div>

          {/* Cake */}
          <div className='relative'>
            <div className='bg-pink-200 h-52 w-80 rounded-b-[28px] rounded-t-[40px] shadow-2xl'/>
            <div className='absolute bg-white/60 left-0 top-16 h-8 w-full'/>
            <div className='absolute bg-pink-300/60 left-0 top-24 h-8 w-full'/>
            <div className='absolute bg-pink-300 h-10 w-full bottom-0 left-0 rounded-b-[28px]'/>
          </div>
        </div>

        {!isLit && (
          <button
            onClick={() => navigate('/letter')}
            className='mt-12 rounded-full bg-teal-600
            px-8 py-3 font-semibold text-white shadow-xl
            transition hover:scale-105 active:scale-95'
          >
            Continue
          </button>
        )}
      </div>
    </div>
  )
}

export default Cake
