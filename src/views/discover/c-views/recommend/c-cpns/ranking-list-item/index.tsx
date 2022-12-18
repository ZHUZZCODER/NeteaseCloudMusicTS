import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingListItemWrapper } from './style'
import { getImageSize } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongDataAction } from '@/views/player/store/player'

interface IProps {
  children?: ReactNode
  rankingItem: any
}

interface Al {
  id: number
  name: string
  pic: number
  picUrl: string
  pic_str: string
}

interface Tracks {
  id: number
  name: string
  al: Al
}

const RankingListItem: FC<IProps> = (props) => {
  const {
    rankingItem: { coverImgUrl = '', name = '', tracks = [] }
  } = props
  const dispatch = useAppDispatch()

  //播放音乐
  function playMusic(id: number) {
    dispatch(fetchCurrentSongDataAction(id))
  }
  return (
    <RankingListItemWrapper>
      <div className="rankingTop">
        <a href="#" className="rangkingImg">
          <img src={getImageSize(coverImgUrl, 80)} alt="" />
          <div className="sprite_cover rankingCover"></div>
        </a>
        <div className="topText">
          <a className="text" href="#">
            {name}
          </a>
          <a className="iconBox" href="#">
            <div className="sprite_02 icon iconLeft"></div>
            <div className="sprite_02 icon iconRight"></div>
          </a>
        </div>
      </div>
      <div className="rankingBottom">
        {tracks
          .slice(0, 10)
          .map(({ id, name, al: { id: alId } }: Tracks, index: number) => {
            return (
              <div className="rankingItem" key={id}>
                <span className="rankingNum">{index + 1}</span>
                <a className="rankingTitle" href="#">
                  {name}
                </a>
                <div className="rankingIcon">
                  <div
                    className="btn sprite_02 iconPlay"
                    onClick={(e) => playMusic(alId)}
                  ></div>
                  <div className="btn sprite_icon2 iconAdd"></div>
                  <div className="btn sprite_02 iconCollect"></div>
                </div>
              </div>
            )
          })}
        <a className="seeAll" href="#">
          查看全部 &gt;
        </a>
      </div>
    </RankingListItemWrapper>
  )
}

export default memo(RankingListItem)
