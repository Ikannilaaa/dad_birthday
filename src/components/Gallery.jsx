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
  const base = import.meta.env.BASE_URL

  const photos = [
    `${base}photos/berdua di pantai.jpg`,
    `${base}photos/bocil puncak.jpg`,
    `${base}photos/daddy kacamata keren.jpg`,
    `${base}photos/tsn.jpg`,
    `${base}photos/daddy_motor.webp`,
    `${base}photos/berdua haji.jpg`,
    `${base}photos/daddy adek.jpg`,
    `${base}photos/daddy mbak alin.jpg`,
    `${base}photos/daddy alin.jpg`,
    `${base}photos/daddy mbak nina.jpg`,
    `${base}photos/daddy selfie.jpg`,
    `${base}photos/idul fitri.jpg`,
    `${base}photos/jogja.jpg`,
    `${base}photos/kolase kawah.webp`,
    `${base}photos/majalah daddy.jpg`,
    `${base}photos/tanjung lesung.jpg`,
    `${base}photos/kolase.jpg`,
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