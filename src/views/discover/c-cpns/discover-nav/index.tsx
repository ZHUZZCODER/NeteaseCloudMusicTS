import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DiscoverNavWrapper } from './style'
import { discoverMenu } from '@/assets/data/local_data'
import { NavLink } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const DiscoverNav: FC<IProps> = (props) => {
  return (
    <DiscoverNavWrapper>
      <div className="wrap-v1">
        <div className="discover-nav">
          {discoverMenu.map(({ title, link }) => {
            return (
              <div key={title} className="nav-item">
                <NavLink to={link}>{title}</NavLink>
              </div>
            )
          })}
        </div>
      </div>
    </DiscoverNavWrapper>
  )
}

export default memo(DiscoverNav)
