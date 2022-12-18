import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Radio: FC<IProps> = (props) => {
  return <div>Radio</div>
}

export default memo(Radio)
