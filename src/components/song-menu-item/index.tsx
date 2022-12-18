import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { format, getImageSize } from '@/utils/format'
import { SongMenuItemWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchHotRecommendListDataAction } from '@/views/player/store/player'

interface IProps {
  children?: ReactNode
  itemData: any
}

const SongMenuItem: FC<IProps> = (props) => {
  const {
    itemData: { picUrl = '', playCount = 0, name = '', id = 0 }
  } = props

  const dispatch = useAppDispatch()
  function playMusic(id: number) {
    dispatch(fetchHotRecommendListDataAction(id))
  }
  return (
    <SongMenuItemWrapper>
      <div className="songHeader">
        <img className="imgBox" src={getImageSize(picUrl, 140)} alt="" />
        <a title={name} className="sprite_cover cover" href="#"></a>
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
              onClick={(e) => playMusic(id)}
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
