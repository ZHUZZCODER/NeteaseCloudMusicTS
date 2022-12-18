import React, { memo } from 'react'
import type { FunctionComponent, FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

// 方式一 props定义类型
// const Demo: FunctionComponent<IProps> = (props) => {
//   return <div>index</div>
// }
//方式二 props定义类型
const Demo: FC<IProps> = (props) => {
  return <div>index</div>
}

export default memo(Demo)
