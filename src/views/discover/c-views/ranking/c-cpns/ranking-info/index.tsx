import React, { memo, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingInfoWrapper } from './style'
import SongBtnlist from '@/components/song-btnlist'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { getImageSize, momentFormat } from '@/utils/format'
import {
  changeCurrentListAction,
  changeCurrentSongAction,
  fetchGetLyricDataAction
} from '@/views/player/store/player'
import { useAddPlaySongList } from '@/hooks'

interface IProps {
  children?: ReactNode
}

const RankingInfo: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { playList } = useAppSelector(
    (state) => ({
      playList: state.ranking.playList
    }),
    shallowEqual
  )
  const {
    id = 0,
    coverImgUrl = '',
    name = '',
    updateTime = 0,
    shareCount = 0,
    commentCount = 0,
    subscribedCount = 0,
    tracks = []
  } = playList ?? {}

  const playAllClick = useCallback(() => {
    dispatch(changeCurrentSongAction(tracks[0]))
    dispatch(changeCurrentListAction(tracks))
    dispatch(fetchGetLyricDataAction(tracks[0].id))
  }, [dispatch, tracks])

  const { handleAddPlaySongList } = useAddPlaySongList()

  return (
    <RankingInfoWrapper>
      <div className="rankingHeader">
        <div className="imgBox">
          <img src={getImageSize(coverImgUrl, 150)} alt="" />
          <span className="sprite_cover imgMask"></span>
        </div>
        <div className="rankinginfo">
          <h2 className="rankingTitle">{name}</h2>
          <div className="timeBox">
            <i className="sprite_icon2 timeIcon"></i>
            <span className="timeUpdate">
              最近更新：{momentFormat(updateTime, 'MM月DD日')}
              <span>（{'每日更新:TODO'}）</span>
            </span>
          </div>
          <SongBtnlist
            id={id}
            colletNum={subscribedCount}
            shareNum={shareCount}
            commentNum={commentCount}
            playAllClick={playAllClick}
            addPlayListClick={() => handleAddPlaySongList(id, tracks)}
          />
        </div>
      </div>
    </RankingInfoWrapper>
  )
}

export default memo(RankingInfo)
