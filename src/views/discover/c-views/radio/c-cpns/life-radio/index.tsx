import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LifeRadioWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { useRenderRadioItem } from '@/hooks'

interface IProps {
  children?: ReactNode
  moreLink?: string
}

const LifeRadio: FC<IProps> = (props) => {
  const { moreLink = '#' } = props
  return (
    <LifeRadioWrapper>
      <NavHeaderV4 navTitle="生活·电台" moreLink={moreLink} />
      <div className="lifeRadioContent">{useRenderRadioItem(6)}</div>
    </LifeRadioWrapper>
  )
}

export default memo(LifeRadio)
