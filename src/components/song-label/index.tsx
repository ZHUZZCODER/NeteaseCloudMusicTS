import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongLabelWrapper } from './style'

interface IProps {
  children?: ReactNode
  name: string
  labelPosition?: string
}

const SongLabel: FC<IProps> = (props) => {
  const { name, labelPosition = '0 -243px' } = props
  return (
    <SongLabelWrapper labelPosition={labelPosition}>
      <i className="sprite_icon2 labelImg"></i>
      <div className="labelText">
        <h2>{name}</h2>
      </div>
    </SongLabelWrapper>
  )
}

export default memo(SongLabel)
