import React, { Fragment, memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { NavHeaderV1Wrapper } from './style'

interface MenuList {
  link: string
  item: string
}

interface IProps {
  children?: ReactNode
  title?: string
  hotLink?: string
  menuList?: MenuList[]
  moreText?: string
  moreLink?: string
}

const NavHeaderV1: FC<IProps> = (props) => {
  const {
    title = '默认标题',
    hotLink = '#',
    menuList = [],
    moreText = '更多',
    moreLink = '#'
  } = props
  return (
    <NavHeaderV1Wrapper>
      <div className="navLeft">
        <div className="sprite_02 leftTitle">
          <a href={hotLink}>{title}</a>
        </div>
        <div className="leftList">
          {menuList.map(({ item, link }) => {
            return (
              <Fragment key={item}>
                <Link className="item" to={link}>
                  {item}
                </Link>
                <div className="line">|</div>
              </Fragment>
            )
          })}
        </div>
      </div>
      <div className="navRight">
        <Link to={moreLink}>{moreText}</Link>
        <i className="sprite_02 moveIcon"></i>
      </div>
    </NavHeaderV1Wrapper>
  )
}

export default memo(NavHeaderV1)
