import React, { memo, useCallback, useState, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { MusicInfoWrapper, LyricWrapper } from './style'
import SongLabel from '@/components/song-label'
import SongBtnlist from '@/components/song-btnlist'
import { parseLyric } from '@/utils/parse-lyric'
import type { Lyric } from '@/utils/parse-lyric'
import { showhtml } from '@/utils/format'
import { fetchCurrentSongDataAction } from '@/views/player/store/player'

interface IProps {
  children?: ReactNode
}

const MusicInfo: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const {
    songInfo,
    singerInformation: { songName = '', singerName = '', albumName = '' },
    songId
  } = useAppSelector((state) => ({
    songInfo: state.singleSong.songInfo,
    singerInformation: state.singleSong.singerInformation,
    songId: state.singleSong.songId
  }))
  const [lyric, setLyric] = useState<Lyric[]>([])
  useEffect(() => {
    const gc = songInfo?.lrc?.lyric
    gc && setLyric(parseLyric(gc))
  }, [songInfo, parseLyric])
  const playAllClick = useCallback(() => {
    dispatch(fetchCurrentSongDataAction(songId))
  }, [dispatch, songId])

  return (
    <MusicInfoWrapper>
      <SongLabel name={songName} labelPosition="0 -463px" />
      <p className="singeInfo">
        歌手：<a href={undefined}>{singerName}</a>
      </p>
      <p className="singeInfo">
        所属专辑：<a href={undefined}>{albumName}</a>
      </p>
      <SongBtnlist
        colletNum={1}
        shareNum={2}
        commentNum={3}
        playAllClick={playAllClick}
      />
      <LyricWrapper
        dangerouslySetInnerHTML={showhtml(
          lyric.reduce(
            (accumulator, currentValue) =>
              accumulator + currentValue.text + '<br/>',
            ''
          )
        )}
      ></LyricWrapper>
    </MusicInfoWrapper>
  )
}

export default memo(MusicInfo)
