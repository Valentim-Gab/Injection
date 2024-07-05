import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './embla-carousel-arrow-buttons'
import { SelectedSnapDisplay, useSelectedSnapDisplay } from './embla-carousel-selected-snap-display'
import { EmblaOptionsType } from 'embla-carousel'
import './embla.scss'

type PropType = {
  slides: number[]
  options?: EmblaOptionsType | any
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi as any)

  const { selectedSnap, snapCount } = useSelectedSnapDisplay(emblaApi as any)

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div
              className={`embla__slide ${selectedSnap == index ? 'scale' : ''}`}
              key={index}
            >
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <SelectedSnapDisplay
          selectedSnap={selectedSnap}
          snapCount={snapCount}
        />
      </div>
    </section>
  )
}

export default EmblaCarousel
