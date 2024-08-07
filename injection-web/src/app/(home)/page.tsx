import React from 'react'
import CarouselGallery from '@/components/carousel-gallery/carousel-gallery'
import { LoginService } from '@/services/login-service'
import { ImageService } from '@/services/image-service'
import { redirect } from 'next/navigation'

export default async function Home() {
  const loginService = new LoginService()
  const imageService = new ImageService()
  const member = await loginService.getLoggedUserMock()

  if (!member) {
    redirect('/login')
  }

  const imageList = await imageService.getAllByUserId(member.id)

  return (
    <main className="main main-container pt-24 lg:grid lg:grid-cols-2 lg:items-center lg:pt-40">
      <section className="place-self-center grid grid-cols-1 gap-2 p-4 sm:px-8 lg:p-16">
        <h1 className="break-words text-shadow-custom text-primary uppercase font-bold text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl">
          Gabriel Valentim
        </h1>
        <p className="text-shadow-custom font-medium text-sm leading-normal lg:text-base 2xl:text-lg">
          Sou profundamente apaixonado pela natureza, encontrando paz em
          caminhadas e admiração na diversidade do mundo natural. Essa conexão
          me inspira a adotar práticas sustentáveis e a valorizar a preservação
          ambiental como um compromisso vitalício.
        </p>
      </section>
      {imageList && <CarouselGallery allImageList={imageList} member={member} />}
    </main>
  )
}
