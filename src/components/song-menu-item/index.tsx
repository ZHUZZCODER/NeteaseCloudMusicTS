import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { format, getImageSize } from '@/utils/format'
import { SongMenuItemWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchHotRecommendListDataAction } from '@/views/player/store/player'

interface IProps {
  children?: ReactNode
  itemData: any
  right?: number
}

const SongMenuItem: FC<IProps> = (props) => {
  const {
    itemData: {
      picUrl = '',
      coverImgUrl = '',
      playCount = 0,
      name = '',
      id = 0
    },
    right = 0
  } = props

  const dispatch = useAppDispatch()
  function playMusic(e: React.MouseEvent, id: number) {
    e.stopPropagation()
    dispatch(fetchHotRecommendListDataAction(id))
  }
  return (
    <SongMenuItemWrapper right={right}>
      <div className="songHeader">
        <img
          className="imgBox"
          src={getImageSize(picUrl || coverImgUrl, 140)}
          alt=""
        />
        <a
          title={name}
          className="sprite_cover cover"
          href={`#/discover/playlist?id=${id}`}
        ></a>
        <div className="sprite_cover cover_bottom">
          <div className="bottomContent">
            <div className="hearBox">
              <i className="sprite_icon hear"></i>
              <p>{format(playCount)}</p>
            </div>
            <a
              className="sprite_icon play"
              href={undefined}
              target="_self"
              onClick={(e) => playMusic(e, id)}
            ></a>
          </div>
        </div>
      </div>
      <div className="songFooter">
        <a title={name} href="#">
          {name}
        </a>
      </div>
    </SongMenuItemWrapper>
  )
}

export default memo(SongMenuItem)
