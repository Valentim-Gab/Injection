'use client'

import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { EmblaOptionsType } from 'embla-carousel'
import CarouselMain from '../ui/carousel-main/carousel-main'
import useEmblaCarousel from 'embla-carousel-react'
import {
  SelectedSnapDisplay,
  useSelectedSnapDisplay,
} from '../ui/carousel-main/carousel-main-selected-snap-display'
import { ImageEntity } from '@/interfaces/image-entity'
import { ImageService } from '@/services/image-service'
import { Member } from '@/interfaces/member'

export default function CarouselGallery({
  allImageList,
  member
}: {
  allImageList: ImageEntity[]
  member: Member
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [imageList, setImageList] = useState(allImageList)
  const options: EmblaOptionsType | any = { dragFree: true }
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi as any)
  const imageService = new ImageService()

  const buttons = [
    {
      icon: 'icon-[majesticons--arrow-right-circle]',
      action: () => emblaApi?.scrollPrev(),
    },
    {
      icon: 'icon-[majesticons--arrow-up-circle]',
      action: () => emblaApi?.scrollNext(),
    },
  ]

  const handleSearch = () => {
    if (!searchValue) setSearchOpen(!searchOpen)
    else console.log('searching...')
  }

  const handleSearchImage = (value: string) => {
    setSearchValue(value)

    if (!imageList) {
      return
    }

    if (!value) {
      setImageList(allImageList)

      return
    }

    imageService.search(value, member.id).then((data) => {
      setImageList(data ?? [])
    })
  }

  return (
    <>
      <section className="p-4 pt-8 overflow-hidden sm:pl-6 lg:pt-0">
        <CarouselMain
          items={imageList}
          emblaRef={emblaRef}
          selectedSnap={selectedSnap}
        />
      </section>
      <section className="p-4 grid grid-flow-col justify-between items-center sm:px-8 lg:col-start-2 lg:self-start">
        <div className="flex sm:gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="flex items-center justify-center"
              onClick={button.action}
            >
              <i
                className={twMerge(
                  'text-white/50 w-10 h-10 lg:w-12 lg:h-12',
                  button.icon
                )}
              ></i>
            </button>
          ))}
        </div>
        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
        <div className="flex justify-center items-center bg-white/50 rounded-full">
          <button
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full"
            onClick={handleSearch}
          >
            <i className="icon-[majesticons--search] w-8 h-8 lg:w-10 lg:h-10 text-black/50"></i>
          </button>
          <span
            data-searchopen={searchOpen}
            className="flex justify-center w-28 h-full pl-2 pr-4 rounded-r-full duration-200 ease-in-out transition-all data-[searchopen=false]:w-0 data-[searchopen=false]:p-0 sm:w-64 lg:w-52 2xl:w-72"
          >
            <input
              type="text"
              className="flex h-full w-full text-black text-sm bg-transparent outline-none placeholder:text-black/50 lg:text-base"
              onChange={(e) => {
                handleSearchImage(e.target.value)
              }}
              placeholder="Pesquise aqui"
            />
          </span>
        </div>
      </section>
    </>
  )
}
