import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongListWrapper } from './style'
import type { Al, Ar } from '@/views/discover/c-views/playlist/store/type'
import { formatTime } from '@/utils/format'
import { fetchCurrentSongDataAction } from '@/views/player/store/player'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { useAddPlayList, useCollectModal } from '@/hooks'
import type { CurrentSongState } from '@/views/player/store/type'

export interface Track {
  id: number
  name: string
  dt: number
  ar: Ar[]
  al: Al
  mv: number
  alia?: string[]
}

interface IProps {
  children?: ReactNode
  tracks: CurrentSongState[]
  isShowAlbum?: boolean
}

const SongList: FC<IProps> = (props) => {
  const { tracks, isShowAlbum = true } = props
  const handleAddPlayList = useAddPlayList()
  const dispatch = useAppDispatch()
  const { renderModal } = useCollectModal()

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqual
  )

  function playMusic(id: number) {
    dispatch(fetchCurrentSongDataAction(id))
  }

  return (
    <SongListWrapper>
      <table>
        <thead>
          <tr>
            <th className="sprite_table Col1"></th>
            <th className="sprite_table Col2">
              <i className="sprite_table thIcon">歌曲标题</i>
            </th>
            <th className="sprite_table Col3">
              <i className="sprite_table thIcon">时长</i>
            </th>
            <th className="sprite_table Col4">
              <i className="sprite_table thIcon">歌手</i>
            </th>
            {isShowAlbum && (
              <th className="sprite_table Col5">
                <i className="sprite_table thIcon">专辑</i>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {tracks.map((song, index) => {
            const { id, name, alia, dt, ar, al, mv } = song
            return (
              <tr key={id}>
                <td className="Col1 tdCol1">
                  <span className="tdCol1Num">{index + 1}</span>
                  <i
                    className={classnames('sprite_table', 'tdCol1Icon', {
                      iconPlay: currentSong.id === id
                    })}
                    onClick={(e) => playMusic(id)}
                  ></i>
                </td>
                <td className="Col2 tdCol2">
                  <div className="titleContent">
                    <div className="titleBox">
                      <Link
                        className="abox"
                        to={`/discover/singleSong?id=${id}`}
                        title={name}
                      >
                        {name}
                      </Link>
                      {!!alia && alia.length > 0 && <span>-（{alia[0]}）</span>}
                    </div>
                    {mv > 0 && <i className="sprite_table mvIcon abox"></i>}
                  </div>
                </td>
                <td className="Col3 tdCol3">
                  <div className="timeDuration">{formatTime(dt)}</div>
                  <div className="timeIconList">
                    <div
                      title="添加到播放列表"
                      className="sprite_icon2 icon addPlayIcon"
                      onClick={() => handleAddPlayList(song)}
                    ></div>
                    <div
                      title="收藏"
                      className="sprite_playlist icon addIcon"
                      onClick={() => renderModal(id)}
                    ></div>
                    <div
                      title="分享"
                      className="sprite_playlist icon shareIcon"
                    ></div>
                    <div
                      title="下载"
                      className="sprite_playlist icon downloadIcon"
                    ></div>
                    {/* <div
                      title="删除"
                      className="sprite_playlist icon deleteIcon"
                    ></div> */}
                  </div>
                </td>
                <td className="Col4 tdCol4">
                  <a className="abox" href={undefined} title={ar[0].name}>
                    {ar[0].name}
                  </a>
                </td>
                {isShowAlbum && (
                  <td className="Col5 tdCol5">
                    <a className="abox" href={undefined} title={al.name}>
                      {al.name}
                    </a>
                  </td>
                )}
              </tr>
            )
          })}
        </tbody>
      </table>
    </SongListWrapper>
  )
}

export default memo(SongList)
