import React, { memo, useRef, ElementRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'
import { Carousel } from 'antd'
import classNames from 'classnames'
import { TopSwiperWrapper, SwiperRight } from './style'
import { useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const TopSwiper: FC<IProps> = (props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  //获取轮播数据
  const { banners = [] } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )

  //背景图片地址
  let bgUrl
  if (currentIndex >= 0 && banners.length > 0) {
    bgUrl = banners[currentIndex].imageUrl + '?imageView&blur=40x20'
  }

  const CarouselRef = useRef<ElementRef<typeof Carousel>>(null)
  function preClick() {
    CarouselRef.current?.prev()
  }
  function nextClick() {
    CarouselRef.current?.next()
  }

  function swiperAfterChange(index: number) {
    setCurrentIndex(index)
  }

  function dotClick(index: number) {
    CarouselRef.current?.goTo(index, true)
  }
  return (
    <TopSwiperWrapper
      style={{
        background: `url(${bgUrl}) center center / 6000px`
      }}
    >
      <div className="wrap-v2 swiperContent">
        <div className="swiperLeft">
          <Carousel
            ref={CarouselRef}
            autoplay
            effect="fade"
            dots={false}
            autoplaySpeed={10000}
            afterChange={swiperAfterChange}
          >
            {banners.map(({ targetId, imageUrl }) => {
              return (
                <div key={targetId} className="swiperItem">
                  <img src={imageUrl} alt="" />
                </div>
              )
            })}
          </Carousel>
          <ul className="dotList">
            {banners.map(({ imageUrl }, index) => {
              return (
                <li
                  className={classNames({ liActive: currentIndex === index })}
                  key={imageUrl}
                  onClick={(e) => dotClick(index)}
                ></li>
              )
            })}
          </ul>
        </div>
        <SwiperRight>
          <span className="downloadTitle">
            PC 安卓 iPhone WP iPad Mac 六大客户端
          </span>
        </SwiperRight>
        <div className="slider sliderLeft" onClick={preClick}></div>
        <div className="slider sliderRight" onClick={nextClick}></div>
      </div>
    </TopSwiperWrapper>
  )
}

export default memo(TopSwiper)
