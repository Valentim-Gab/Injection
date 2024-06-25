'use client'

import React, { useEffect, useState } from 'react'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '../ui/carousel'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

export default function CarouselGallery() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const imageList = [
    {
      src: '/images/usermock/2.jpg',
      title: 'Only Me',
    },
    {
      src: '/images/usermock/1.jpg',
      title: 'Cachoeira grande',
    },
    {
      src: '/images/usermock/3.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/1.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/3.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/2.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/1.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/3.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/2.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/1.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/3.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/2.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/3.jpg',
      title: 'Paisagem',
    },
    {
      src: '/images/usermock/1.jpg',
      title: 'Paisagem',
    },
  ]

  const buttons = [
    {
      icon: 'icon-[majesticons--arrow-right-circle]',
      action: () => api?.scrollPrev(),
    },
    {
      icon: 'icon-[majesticons--arrow-up-circle]',
      action: () => api?.scrollNext(),
    },
  ]

  function handleSearch() {
    if (!searchValue) setSearchOpen(!searchOpen)
    else console.log('searching...')
  }

  function changeSearch(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setSearchValue(value)

    console.log(value)
  }

  const setCarouselItem = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  return (
    <>
      <section className="pt-16 sm:pl-6 lg:pt-0">
        <Carousel setApi={setApi}>
          <CarouselContent className="items-center mx-5 2xl:ml-8 2xl:mr-10">
            {imageList.map((image, index) => (
              <CarouselItem
                key={index}
                data-current={current - 1 == index}
                onClick={() => setCarouselItem(index)}
                className="grid gap-2 cursor-pointer basis-1/1 lg:basis-1/1 pb-8 pr-4 mt-8 h-full data-[current=true]:scale-125 duration-300 ease-in-out transition-all rounded sm:pr-8 sm:mt-10 lg:pr-8 2xl:pr-10 2xl:mt-12"
              >
                <p className="font-bold text-sm z-10 sm:text-base ">
                  {image.title}
                </p>
                <Image
                  width={0}
                  height={0}
                  alt={image.title}
                  src={image.src}
                  className="aspect-[12/16] rounded w-fit h-[180px] sm:h-[252px] lg:h-[302px] 2xl:h-[360px]"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="p-4 grid grid-flow-col justify-between sm:p-8 lg:col-start-2 lg:self-start lg:mt-16">
        <div className="flex gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="flex items-center justify-center"
              onClick={button.action}
            >
              <i
                className={twMerge(
                  'w-8 h-8 text-white/50 sm:w-10 sm:h-10 lg:w-12 lg:h-12',
                  button.icon
                )}
              ></i>
            </button>
          ))}
        </div>
        <div className="flex justify-center items-center bg-white/50 rounded-full">
          <button
            className="flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 lg:w-14 lg:h-14 rounded-full"
            onClick={handleSearch}
          >
            <i className="icon-[majesticons--search] w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-black/50"></i>
          </button>
          <span
            data-searchopen={searchOpen}
            className="flex justify-center w-36 h-8 p-2 pr-4 rounded-r-full duration-200 ease-in-out transition-all data-[searchopen=false]:w-0 data-[searchopen=false]:p-0 lg:w-56"
          >
            <input
              type="text"
              className="w-full text-black text-sm bg-transparent outline-none placeholder:text-black/50 lg:text-base"
              onChange={changeSearch}
              placeholder="Pesquise aqui"
            />
          </span>
        </div>
      </section>
    </>
  )
}
