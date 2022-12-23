import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AppPlayerPanelWrapper } from './style'
import PanelHeader from './c-cpns/panel-header'
import PanelList from './c-cpns/panel-list'
import PanelLyric from './c-cpns/panel-lyric'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { getImageBlur } from '@/utils/format'
import { isEmptyObject } from '@/utils/isEmptyObject'

interface IProps {
  children?: ReactNode
}

const AppPlayerPanel: FC<IProps> = (props) => {
  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqual
  )
  return (
    <AppPlayerPanelWrapper>
      <PanelHeader />
      <div className="panelBottom">
        {isEmptyObject(currentSong) && (
          <img
            className="bgImg"
            src={getImageBlur(currentSong?.al?.picUrl)}
            alt=""
          />
        )}
        <PanelList />
        <PanelLyric />
      </div>
    </AppPlayerPanelWrapper>
  )
}

export default memo(AppPlayerPanel)
