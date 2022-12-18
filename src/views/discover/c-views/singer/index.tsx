import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = (props) => {
  return <div>Singer</div>
}

export default memo(Singer)
