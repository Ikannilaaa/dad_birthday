import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.png'

function Letter() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false)
    const [showContinue, setShowContinue] = useState(false)
    const [typedText, setTypedText] = useState('')

    const fulltext = `Semoga panjang umur sehat selalu
    Thank you for always being here.
    Hope your day is filled with happiness and love.`

    const openLetter = () => {
        if (isOpen) return
        setIsOpen(true)
    }

    useEffect(() => {
        if (!isOpen) return

        let i = 0
        setTypedText('')
        setShowContinue(false)

        const timer = setInterval(() => {
            i += 1
            setTypedText(fulltext.slice(0, i))

            if (i >= fulltext.length) {
                clearInterval(timer)
                setTimeout(() => setShowContinue(true), 300)
            }
        }, 35)
        
        return () => clearInterval(timer)
    }, [isOpen])

    return (
        <div 
            className='relative flex min-h-screen justify-center overflow-hidden px-6 pt-10'
            style={{
                backgroundImage: `url(${bg})`
            }}
        >
            <div className='flex flex-col items-center'>
                <h3 className='text-center font-bold text-3xl text-teal-800'>
                    Someone sent you a mail 🤓
                </h3>

                <p className='text-center font-semibold text-teal-600 text-lg mt-3'>
                    Click the envelope!
                </p>

                {/* Letter Area */}
                <div 
                    className='relative mt-24 h-[420px] w-[340px]'
                    style={{ perspective: '1200px' }}
                >
                    {/* Surat */}
                    <div 
                        className={`
                            absolute left-1/2 z-10 w-80 bottom-[95px] w-[300px]
                            -translate-x-1/2 rounded-3xl bg-white p-8 shadow-2xl
                            transition-all duration-700 ease-out
                            ${isOpen ? '-translate-y-36 opacity-100' : 'translate-y-24 opacity-0'}
                        `}
                    >
                        <h1 className='text-2xl font-semibold text-center text-pink-500'>
                            Happy Birthday Daddy!
                        </h1>

                        <p className='mt-6 text-center leading-relaxed text-gray-700 whitespace-pre-line'>
                            {typedText}
                            <span className='ml-1 animate-pulse'>|</span>
                        </p>
                    </div>

                    {/* Amplop */}
                    <button
                        onClick={openLetter}
                        className='absolute bottom-0 left-1/2 z-20 -translate-x-1/2'
                    >
                        {/* Body */}
                        <div
                            className='relative bg-pink-300 h-56 w-80 overflow-hidden rounded-2xl shadow-2xl'
                        >
                            {/* Body belakang */}
                            <div className='absolute inset-0 bg-pink-300'>
                                {/* Front face */}
                                <div
                                    className='absolute inset-0 bg-pink-200'
                                    style={{
                                        clipPath: 'polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)',
                                    }}
                                />

                                {/* Flap ke belakang */}
                                <div 
                                    className='absolute left-0 top-0 z-30 h-40 w-full'
                                    style={{
                                        clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                                        transformOrigin: 'top center',
                                        transform: isOpen ? 'rotateX(-170deg) translateY(-6px)' : 'rotate(0deg)',
                                        transition: 'transform 700ms ease-out',
                                        backfaceVisibility: 'hidden',
                                        background: '#e56bb8'
                                    }}
                                />
                            </div>
                        </div>
                    </button>

                    {showContinue && (
                        <button
                            onClick={() => navigate('/gallery')}
                            className='absolute left-1/2 rounded-full bg-teal-600
                            px-8 py-3 font-semibold text-white shadow-xl
                            transition hover:scale-105 active:scale-95 z-30
                            bottom-[20px] -translate-x-1/2'
                        >
                            Continue
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Letter
