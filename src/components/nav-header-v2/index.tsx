import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavHeaderV2Wrapper } from './style'

interface IProps {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const NavHeaderV2: FC<IProps> = (props) => {
  const { title = '默认标题', moreText = '', moreLink = '' } = props
  return (
    <NavHeaderV2Wrapper>
      <span className="song">{title}</span>
      {moreText && <a href={moreLink}>{moreText}</a>}
    </NavHeaderV2Wrapper>
  )
}

export default memo(NavHeaderV2)
