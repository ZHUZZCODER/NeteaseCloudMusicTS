import React, { memo, Fragment } from 'react'
import type { FC, ReactNode } from 'react'
import { NavHeaderV4Wrapper } from './style'
import { Link } from 'react-router-dom'

interface ITABLIST {
  name: string
  area?: string
}

interface IProps {
  children?: ReactNode
  navTitle?: string
  moreLink?: string
  tabList?: ITABLIST[]
  tabClick?: (item: any) => void
}

const NavHeaderV4: FC<IProps> = (props) => {
  const {
    navTitle = '默认标题',
    moreLink,
    children,
    tabList,
    tabClick = (item: any) => {
      console.log(item)
    }
  } = props

  return (
    <NavHeaderV4Wrapper>
      <div className="leftBox">
        <h3 className="leftTitle">
          <a href={undefined}>{navTitle}</a>
        </h3>
        {tabList?.length && (
          <div className="tabList">
            {tabList.map((item) => {
              return (
                <Fragment key={item.name}>
                  <a
                    className="tabItem"
                    href={undefined}
                    onClick={(e) => tabClick(item)}
                  >
                    {item.name}
                  </a>
                  <span className="line">|</span>
                </Fragment>
              )
            })}
          </div>
        )}
      </div>

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
