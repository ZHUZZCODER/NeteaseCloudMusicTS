import React, {
  memo,
  useCallback,
  useContext,
  useEffect,
  useState
} from 'react'
import type { FC, ReactNode } from 'react'
import { PlayListInfoWrapper } from './style'
import SongLabel from '@/components/song-label'
import UserInfo from './c-cpns/user-info'
import SongBtnlist from '@/components/song-btnlist'
import LabelBtnItem from './c-cpns/labelBtnItem'
import { PlayListCtx } from '../..'
import { getImageSize, showhtml } from '@/utils/format'
import { useAppDispatch } from '@/store'
import {
  changeCurrentListAction,
  changeCurrentSongAction,
  fetchGetLyricDataAction
} from '@/views/player/store/player'
import IntroduceDescription from '@/components/introduce-description'
import SingerImg from '@/components/singer-img'
import { useAddPlaySongList } from '@/hooks'

interface IProps {
  children?: ReactNode
}

const PlayListInfo: FC<IProps> = (props) => {
  const {
    playlist: {
      coverImgUrl = '',
      name = '',
      creator = {},
      createTime = 0,
      subscribedCount = 0,
      shareCount = 0,
      commentCount = 0,
      tags = [],
      description = '',
      tracks = [],
      id
    }
  } = useContext(PlayListCtx)!

  const dispatch = useAppDispatch()
  const playAllClick = useCallback(() => {
    if (!tracks.length) return
    dispatch(changeCurrentSongAction(tracks[0]))
    dispatch(changeCurrentListAction(tracks))
    dispatch(fetchGetLyricDataAction(tracks[0].id))
  }, [dispatch, tracks])

  const { handleAddPlaySongList } = useAddPlaySongList()

  return (
    <PlayListInfoWrapper>
      <SingerImg coverImgUrl={coverImgUrl} imgsize={200} />
      {/* <div className="imgBox">
        <img src={getImageSize(coverImgUrl, 200)} alt="" />
        <div className="sprite_cover imgMask"></div>
      </div> */}
      <div className="info">
        <SongLabel name={name} labelPosition="0 -243px" />
        <UserInfo useInfo={creator} createTime={createTime} />
        <SongBtnlist
          id={id}
          colletNum={subscribedCount}
          shareNum={shareCount}
          commentNum={commentCount}
          playAllClick={playAllClick}
          addPlayListClick={() => handleAddPlaySongList(id, tracks)}
        />
        <div className="labelBox">
          标签：
          {tags.length &&
            tags.map((item) => {
              return <LabelBtnItem key={item} labelName={item} />
            })}
        </div>
        {/* <div className="description">
          介绍：
          <span className="hiddenDesc">
            {!isFlod ? descriptionCpn() : description}
          </span>
          {showFlod && (
            <div className="flodBox">
              <span onClick={flodClick}>
                {!isFlod ? '展开' : '收起'}
                <i className="sprite_icon2 foldIcon"></i>
              </span>
            </div>
          )}
        </div> */}
        {description && (
          <IntroduceDescription
            introduceTitle="介绍"
            description={description}
          />
        )}
      </div>
    </PlayListInfoWrapper>
  )
}

export default memo(PlayListInfo)
