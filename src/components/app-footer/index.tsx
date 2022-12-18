import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = (props) => {
  return <div>AppFooter</div>
}

export default memo(AppFooter)
