import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { RankingSongWrapper } from './style'
import NavHeaderV3 from '@/components/nav-header-v3'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { getImageSize, formatTime } from '@/utils/format'
import { fetchCurrentSongDataAction } from '@/views/player/store/player'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const RankingSong: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { playList, currentSong } = useAppSelector(
    (state) => ({
      playList: state.ranking.playList,
      currentSong: state.player.currentSong
    }),
    shallowEqual
  )

  const { tracks = [], playCount = 0 } = playList ?? {}

  function playMusic(id: number) {
    dispatch(fetchCurrentSongDataAction(id))
  }

  return (
    <RankingSongWrapper>
      <NavHeaderV3
        navTitle="歌曲列表"
        titleChildren={`${tracks.length}首歌`}
        playCount={playCount}
      />

      <table className="tableBox">
        <thead>
          <tr className="theadBox">
            <th className="sprite_table commonTh col1w"></th>
            <th className="sprite_table commonTh col2w">
              <i className="sprite_table divisionIcon">标题</i>
            </th>
            <th className="sprite_table commonTh col3w">
              <i className="sprite_table divisionIcon">时长</i>
            </th>
            <th className="sprite_table commonTh col4w">
              <i className="sprite_table divisionIcon">歌手</i>
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks.length ? (
            tracks.map(
              (
                {
                  id,
                  al: { picUrl },
                  name,
                  dt,
                  ar: [{ name: singerName }],
                  mv
                },
                index
              ) => {
                return (
                  <tr key={id} className="contentTr">
                    <td className="commonTd">
                      <div className="orderBox">
                        <span className="numBox">{index + 1}</span>
                        <i className="sprite_icon2 iconBox"></i>
                      </div>
                    </td>
                    <td className="commonTd">
                      <div className="titleBox">
                        {index < 3 ? (
                          <Link
                            className="titleImgBox"
                            to={`/discover/singleSong?id=${id}`}
                          >
                            <img
                              className="titleImg"
                              src={getImageSize(picUrl, 50)}
                              alt=""
                            />
                          </Link>
                        ) : null}

                        <div className="titleContent">
                          <i
                            className={classNames('sprite_table playIcon', {
                              activePlayIcon: currentSong.id === id
                            })}
                            onClick={(e) => playMusic(id)}
                          ></i>
                          <Link
                            className="songTitle"
                            to={`/discover/singleSong?id=${id}`}
                          >
                            {name}
                          </Link>
                          {mv > 0 && <i className="sprite_table mvIcon"></i>}
                        </div>
                      </div>
                    </td>
                    <td className="commonTd">
                      <div className="timeBox">
                        <span className="timeTx">{formatTime(dt)}</span>
                        <div className="timeIconList">
                          <div
                            title="添加到播放列表"
                            className="sprite_icon2 icon addPlayIcon"
                          ></div>
                          <div
                            title="收藏"
                            className="sprite_playlist icon addIcon"
                          ></div>
                          <div
                            title="分享"
                            className="sprite_playlist icon shareIcon"
                          ></div>
                          <div
                            title="下载"
                            className="sprite_playlist icon downloadIcon"
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="commonTd">
                      <span className="singerBox">{singerName}</span>
                    </td>
                  </tr>
                )
              }
            )
          ) : (
            <tr></tr>
          )}
        </tbody>
      </table>
    </RankingSongWrapper>
  )
}

export default memo(RankingSong)
