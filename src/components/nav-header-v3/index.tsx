import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavHeaderV3Wrapper } from './style'

interface IProps {
  children?: ReactNode
  navTitle: string
  titleChildren: string
  link?: string
  playCount?: number
}

const NavHeaderV3: FC<IProps> = (props) => {
  const {
    navTitle = '默认标题',
    titleChildren = '100首歌',
    link = '',
    playCount = 0
  } = props
  return (
    <NavHeaderV3Wrapper>
      <div className="header-left">
        <h1>{navTitle}</h1>
        <span>{titleChildren}</span>
      </div>
      <div className="header-right">
        {link && (
          <div className="right-link">
            <i className="sprite_icon2"></i>
            <a href={link}>生成外链播放器</a>
          </div>
        )}
        {playCount > 0 && (
          <div className="playText">
            播放：<span>{playCount}</span>次
          </div>
        )}
      </div>
    </NavHeaderV3Wrapper>
  )
}

export default memo(NavHeaderV3)
