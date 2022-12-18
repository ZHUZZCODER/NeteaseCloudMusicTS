import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'
import { DiscoverWrapper } from './style'
import DiscoverNav from './c-cpns/discover-nav'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = (props) => {
  return (
    <DiscoverWrapper>
      <DiscoverNav />

      <Suspense fallback="loading">
        <Outlet />
      </Suspense>
    </DiscoverWrapper>
  )
}

export default memo(Discover)
