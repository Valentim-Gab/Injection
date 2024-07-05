import React from 'react'
import { UseEmblaCarouselType } from 'embla-carousel-react'
import './carousel-main.scss'
import Image from 'next/image'

interface CarouselMainProps {
  items: { src: string; title: string }[]
  emblaRef: UseEmblaCarouselType[0]
  selectedSnap: number
}

const CarouselMain: React.FC<CarouselMainProps> = (props) => {
  const { items, emblaRef, selectedSnap } = props

  return (
    <section className="carousel-main">
      <div ref={emblaRef}>
        <div className="carousel-main-container max-w-[400px] sm:max-w-[540px] lg:max-w-[668px]">
          {items.map((item, index) => (
            <div
              key={index}
              data-current={index == selectedSnap}
              className="carousel-main-item scale-75 data-[current=true]:scale-100 rounded h-auto"
            >
              <p className="font-bold text-sm z-10 mb-2 sm:text-base">
                {item.title}
              </p>
              <Image
                width={0}
                height={0}
                alt={item.title}
                src={item.src}
                className="aspect-[12/16] rounded w-full h-full "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CarouselMain
