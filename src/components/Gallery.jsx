import React from 'react'
import { useNavigate } from 'react-router-dom'
import bg from '../assets/bg.png'

function MarqueeRow({ photos, reverse = false }) {
  const track = [...photos, ...photos]

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-6 py-6 ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
      >
        {track.map((photo, index) => (
          <div
            key={`${photo}-${index}`}
            className="shrink-0 rounded-2xl bg-white p-4 shadow-xl transition duration-300 hover:-translate-y-2"
          >
            <img
              src={photo}
              alt=""
              className="h-56 w-44 rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

function Gallery() {
  const navigate = useNavigate()

  const photos = [
    '/photos/berdua di pantai.jpg',
    '/photos/bocil puncak.jpg',
    '/photos/daddy kacamata keren.jpg',
    '/photos/tsn.jpg',
    '/photos/daddy_motor.webp',
    '/photos/berdua haji.jpg',
    '/photos/daddy adek.jpg',
    '/photos/daddy mbak alin.jpg',
    '/photos/daddy alin.jpg',
    '/photos/daddy mbak nina.jpg',
    '/photos/daddy selfie.jpg',
    '/photos/idul fitri.jpg',
    '/photos/jogja.jpg',
    '/photos/kolase kawah.webp',
    '/photos/majalah daddy.jpg',
    '/photos/tanjung lesung.jpg',
    '/photos/kolase.jpg',
  ]

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-sky-100 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-10">
        <div className="space-y-4">
          <MarqueeRow photos={photos} />
          <MarqueeRow photos={photos} reverse />
        </div>

        <div className="pb-6 text-center">
          <h3 className="text-4xl font-semibold text-pink-500">
            Happiest Birthday to you
          </h3>

          <p className="mt-6 text-gray-700">
            Let&apos;s create more memories!
          </p>
        </div>

        <div className="flex justify-center pb-4">
          <button
            onClick={() => navigate('/')}
            className="rounded-full bg-teal-600 px-8 py-3 font-semibold text-white shadow-xl transition hover:scale-105 active:scale-95"
          >
            Start Again?
          </button>
        </div>
      </div>
    </div>
  )
}

export default Gallery