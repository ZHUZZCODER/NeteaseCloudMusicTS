import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LabelBtnItemWrapper } from './style'

interface IProps {
  children?: ReactNode
  labelName: string
}

const LabelBtnItem: FC<IProps> = (props) => {
  const { labelName } = props
  return (
    <LabelBtnItemWrapper>
      <i className="sprite_button btnLabel">{labelName}</i>
    </LabelBtnItemWrapper>
  )
}

export default memo(LabelBtnItem)
