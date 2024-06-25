import React from 'react'
import './home.scss'
import CarouselGallery from '@/components/carousel-gallery/carousel-gallery'

export default function Home() {
  return (
    <main className="main min-h-screen py-8 sm:py-16 lg:grid lg:grid-cols-2 lg:items-center">
      <section className="place-self-center grid grid-cols-1 gap-2 px-4 sm:px-8 lg:p-16">
        <h1 className="text-shadow-custom text-primary uppercase font-bold text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl">
          Gabriel Valentim
        </h1>
        <p className="text-shadow-custom font-medium text-sm leading-normal lg:text-base 2xl:text-lg">
          Sou profundamente apaixonado pela natureza, encontrando paz em
          caminhadas e admiração na diversidade do mundo natural. Essa conexão
          me inspira a adotar práticas sustentáveis e a valorizar a preservação
          ambiental como um compromisso vitalício.
        </p>
      </section>
      <CarouselGallery />
    </main>
  )
}
