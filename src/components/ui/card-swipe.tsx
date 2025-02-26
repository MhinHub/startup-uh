import React, { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import type { Swiper as SwiperType } from "swiper"

import "swiper/css/effect-cards"
import { EffectCards } from "swiper/modules"

import "swiper/css"
import "swiper/css/effect-coverflow"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

interface CarouselProps {
  listChildren: React.ReactNode[]
  autoPlay?: boolean
  autoplayDelay?: number
  slideShadows?: boolean
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
}

export const CardSwipe: React.FC<CarouselProps> = ({
  listChildren,
  autoPlay = true,
  autoplayDelay = 1500,
  slideShadows = false,
  onSwipeLeft,
  onSwipeRight,
}) => {
  const prevIndexRef = useRef<number>(0);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;
    const prevIndex = prevIndexRef.current;

    // Account for loop wraparound
    const isFirstSlide = currentIndex === 0;
    const isLastSlide = currentIndex === listChildren.length - 1;

    if (isFirstSlide && prevIndex === listChildren.length - 1) {
      // Wrapped from last to first - this is a left swipe
      onSwipeLeft?.();
    } else if (isLastSlide && prevIndex === 0) {
      // Wrapped from first to last - this is a right swipe
      onSwipeRight?.();
    } else if (currentIndex > prevIndex) {
      // Swiped right (forward)
      onSwipeRight?.();
    } else if (currentIndex < prevIndex) {
      // Swiped left (backward)
      onSwipeLeft?.();
    }

    prevIndexRef.current = currentIndex;
  };

  const css = `
  .swiper {
    width: 50%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
   display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  `
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                autoplay={autoPlay ? {
                  delay: autoplayDelay,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                  stopOnLastSlide: true,
                } : false}
                effect={"cards"}
                grabCursor={true}
                loop={false}
                slidesPerView={"auto"}
                rewind={true}
                cardsEffect={{
                  slideShadows: slideShadows,
                }}
                onSlideChange={handleSlideChange}
                modules={[EffectCards, Autoplay, Pagination, Navigation]}
              >
                {listChildren.map((child, index) => (
                  <SwiperSlide key={index}>
                    {child}
                  </SwiperSlide>
                ))}
                {listChildren.map((child, index) => (
                  <SwiperSlide key={index}>
                    <div className="size-full rounded-3xl">
                      {child}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
