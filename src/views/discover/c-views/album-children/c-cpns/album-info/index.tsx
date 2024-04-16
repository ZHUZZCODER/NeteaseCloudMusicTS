import React, { memo, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumInfoWrapper } from './style'
import AlbumBig from '@/components/album-big'
import SongLabel from '@/components/song-label'
import SongBtnlist from '@/components/song-btnlist'
import IntroduceDescription from '@/components/introduce-description'
import { momentFormat } from '@/utils/format'
import type {
  IALBUMINFO,
  ISONGINFO
} from '@/views/discover/c-views/album-children/store/type'
import { useAppDispatch } from '@/store'
import {
  changeCurrentListAction,
  changeCurrentSongAction,
  fetchGetLyricDataAction
} from '@/views/player/store/player'
import { useAddPlaySongList } from '@/hooks'

interface IProps {
  children?: ReactNode
  albumInfo: IALBUMINFO
  songInfo: ISONGINFO[]
}

const AlbumInfo: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const {
    albumInfo: {
      blurPicUrl = '',
      name = '',
      artist: { name: captainName },
      publishTime = 0,
      company = '',
      info: { commentCount = 0, shareCount = 0 },
      description,
      id
    },
    songInfo
  } = props
  const playAllClick = useCallback(() => {
    if (!songInfo.length) return
    dispatch(changeCurrentSongAction(songInfo[0]))
    dispatch(changeCurrentListAction(songInfo))
    dispatch(fetchGetLyricDataAction(songInfo[0].id))
  }, [dispatch, songInfo])

  const { handleAddPlaySongList } = useAddPlaySongList()

  return (
    <AlbumInfoWrapper>
      <div className="infoHeader">
        <AlbumBig imgUrl={blurPicUrl} />
        <div className="headerRight">
          <SongLabel name={name} labelPosition="0 -186px" />
          <div className="info">
            <div className="songinfo">
              歌手：<span className="infoname">{captainName}</span>
            </div>
            <div className="songinfo">
              发行时间：<span>{momentFormat(publishTime)}</span>
            </div>
            <div className="songinfo">
              发行公司：<span>{company}</span>
            </div>
          </div>
          <SongBtnlist
            id={id}
            playAllClick={playAllClick}
            addPlayListClick={() => handleAddPlaySongList(id, songInfo)}
            shareNum={shareCount}
            commentNum={commentCount}
          />
        </div>
      </div>
      <div className="descriptionBox">
        <IntroduceDescription
          introduceTitle="专辑介绍:"
          description={description}
        />
      </div>
    </AlbumInfoWrapper>
  )
}

export default memo(AlbumInfo)
