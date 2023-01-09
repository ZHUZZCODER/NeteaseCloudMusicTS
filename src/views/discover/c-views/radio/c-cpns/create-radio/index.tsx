import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { CreateRadioWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { useRenderRadioItem } from '@/hooks'

interface IProps {
  children?: ReactNode
}

const CreateRadio: FC<IProps> = (props) => {
  return (
    <CreateRadioWrapper>
      <NavHeaderV4 navTitle="创作翻唱·电台" moreLink="#" />
      <div className="createRadioContent">{useRenderRadioItem(2001)}</div>
    </CreateRadioWrapper>
  )
}

export default memo(CreateRadio)
