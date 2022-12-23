import React, { memo, useContext } from 'react'
import type { FC, ReactNode } from 'react'
import {
  HeaderLeftWrapper,
  HeaderRightWrapper,
  PanelHeaderWrapper
} from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changeCurrentListAction } from '@/views/player/store/player'
import { PlayerContext } from '@/views/player/app-player-bar'

interface IProps {
  children?: ReactNode
}

const PanelHeader: FC<IProps> = (props) => {
  //关闭面板
  const { panelState, setPanelState } = useContext(PlayerContext)!
  const { currentList = [], currentSong } = useAppSelector(
    (state) => ({
      currentList: state.player.currentList,
      currentSong: state.player.currentSong
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()
  //清除播放歌曲列表
  const clearCurrentList = () => {
    dispatch(changeCurrentListAction([]))
  }

  return (
    <PanelHeaderWrapper>
      <HeaderLeftWrapper>
        <h4 className="headerTitle">播放列表({currentList.length})</h4>
        <div className="collectAndClear">
          <div className="collectAll">
            <div className="sprite_playlist  collectIcon icon"></div>
            <span className="iconText">收藏全部</span>
          </div>
          <span className="line"></span>
          <div className="clearAll" onClick={clearCurrentList}>
            <div className="sprite_playlist  clearIcon icon"></div>
            <span className="iconText">清除</span>
          </div>
        </div>
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <div className="iconLeft"></div>
        <div className="lyricTitle">{currentSong.name}</div>
        <div
          className="sprite_playlist iconRight"
          onClick={(e) => setPanelState(!panelState)}
        ></div>
      </HeaderRightWrapper>
    </PanelHeaderWrapper>
  )
}

export default memo(PanelHeader)
