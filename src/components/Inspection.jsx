import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.png'

function Inspection() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [birthday, setBirthday] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const validNames = [
      'daddy',
      'aria',
      'aria verdin',
      'verdin'
    ]

    const validBirthday = '1973-05-25'

    const normalizedName = name.toLowerCase().trim()

    if (
      validNames.includes(normalizedName) &&
      birthday === validBirthday
    ) {
      navigate('/cake')
    } else {
      setError('🚨 Suspicious identity detected 🚨')
    }
  }

  return (
    <div 
      className='flex min-h-screen items-center justify-center bg-sky-100 px-6'
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <div className='w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl'>
        <h1 className='text-center text-4xl font-bold text-teal-800'>
            Inspection Time 🕵️‍♂️
        </h1>

        <p className='mt-3 text-center text-teal-600'>
          Identify your identity!
        </p>

        <form
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-5'
        >
          {/*Nama*/}
          <div>
            <label className='mb-2 block font-semibold text-teal-700'>
              Your Name
            </label>

            <input 
              type='text'
              placeholder='Enter your name...'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full rounded-2xl border border-teal-300 px-4 py-3
              outline-none transition focus:border-teal-500'
              required
            />
          </div>

          {/*Birthday*/}
          <div>
            <label className='mb-2 block font-semibold text-teal-700'>
              Date of Birth
            </label>

            <input 
              type='date'
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className='w-full rounded-2xl border border-teal-300 px-4 py-3
              outline-none transition focus:border-teal-500'
              required
            />
          </div>

          {/* Error */}
          {error && (
            <p className='text-center font-semibold text-red-500'>
              {error}
            </p>
          )}

          <button
            type='submit'
            className='mt-4 rounded-2xl bg-teal-600 px-6 py-3
            font-semibold text-white shadow-lg transition hover:scale-105
            hover:bg-teal-700 active:scale-95'
          >
            Dare to continue?
          </button>
        </form>
      </div>
    </div>
  )
}

export default Inspection
