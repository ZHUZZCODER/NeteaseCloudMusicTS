import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavHeaderV4Wrapper } from './style'
import { Link } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  navTitle?: string
  moreLink?: string
}

const NavHeaderV4: FC<IProps> = (props) => {
  const { navTitle = '默认标题', moreLink, children } = props
  return (
    <NavHeaderV4Wrapper>
      <h3 className="leftTitle">
        <a href={undefined}>{navTitle}</a>
      </h3>
      {moreLink && (
        <Link className="moreTitle" to={''}>
          更多&nbsp;&gt;
        </Link>
      )}
      {children && children}
    </NavHeaderV4Wrapper>
  )
}

export default memo(NavHeaderV4)
