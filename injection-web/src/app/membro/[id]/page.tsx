import React from 'react'
import CarouselGallery from '@/components/carousel-gallery/carousel-gallery'
import { MemberService } from '@/services/member-service'
import { redirect } from 'next/navigation'
import { ImageService } from '@/services/image-service'

export default async function Member({ params }: { params: { id: number } }) {
  const memberService = new MemberService()
  const imageService = new ImageService()
  const member = await memberService.getById(params.id)
  const imageList = await imageService.getAllByUserId(params.id)

  if (!member) {
    redirect('/login')
  }

  return (
    <main className="main main-container pt-24 lg:grid lg:grid-cols-2 lg:items-center lg:pt-40">
      <section className="place-self-center grid grid-cols-1 gap-2 p-4 sm:px-8 lg:p-16">
        <h1 className="break-words text-shadow-custom text-primary uppercase font-bold text-4xl sm:text-5xl lg:text-6xl 2xl:text-8xl">
          {member.name}
        </h1>
        <p className="text-shadow-custom font-medium text-sm leading-normal lg:text-base 2xl:text-lg">
          {member.description}
        </p>
      </section>
      {imageList && <CarouselGallery allImageList={imageList} member={member} />}
    </main>
  )
}
