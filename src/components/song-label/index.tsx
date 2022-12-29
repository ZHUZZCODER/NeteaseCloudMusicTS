import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongLabelWrapper } from './style'

interface IProps {
  children?: ReactNode
  name: string
}

const SongLabel: FC<IProps> = (props) => {
  const { name } = props
  return (
    <SongLabelWrapper>
      <i className="sprite_icon2 labelImg"></i>
      <div className="labelText">
        <h2>{name}</h2>
      </div>
    </SongLabelWrapper>
  )
}

export default memo(SongLabel)
