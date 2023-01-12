import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerWrapper } from './style'
import SingerCategory from './c-cpns/singer-category'
import SingerContent from './c-cpns/singer-content'

interface IProps {
  children?: ReactNode
}

const Singer: FC<IProps> = (props) => {
  return (
    <SingerWrapper>
      <div className="wrap-v2 wrap_bg4 singerContent">
        <SingerCategory />
        <SingerContent />
      </div>
    </SingerWrapper>
  )
}

export default memo(Singer)
