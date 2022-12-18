import React, { ElementRef, memo, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { NewAlbumWrapper } from './style'
import NavHeaderV1 from '@/components/nav-header-v1'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import NewAlbumItem from '@/components/new-album-item'
import { Carousel } from 'antd'

interface IProps {
  children?: ReactNode
}

const NewAlbum: FC<IProps> = (props) => {
  const { albums = [] } = useAppSelector(
    (state) => ({
      albums: state.recommend.albums
    }),
    shallowEqual
  )

  const albumCarouselRef = useRef<ElementRef<typeof Carousel>>(null)

  function carouselLeft() {
    albumCarouselRef.current?.prev()
  }

  function carouselRight() {
    albumCarouselRef.current?.next()
  }

  return (
    <NewAlbumWrapper>
      <NavHeaderV1 title={'新碟上架'} />
      <div className="newAlbumContent">
        <div className="sprite_02 btn leftBtn" onClick={carouselLeft}></div>
        <div className="albumCenter">
          <Carousel ref={albumCarouselRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="albumList">
                    {albums.length > 0 &&
                      albums
                        .slice(item * 5, (item + 1) * 5)
                        .map((albumsItem) => {
                          return (
                            <NewAlbumItem
                              key={albumsItem.id}
                              newAlbumItem={albumsItem}
                            />
                          )
                        })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="sprite_02 btn rightBtn" onClick={carouselRight}></div>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
