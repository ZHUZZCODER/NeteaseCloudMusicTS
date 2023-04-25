import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { WholeButtonWrapper } from './style'

interface IProps {
  children?: ReactNode
  buttonClassList: string[]
  btnText: string
  textClassList?: string[]
  href?: string
}

const OperateButton: FC<IProps> = ({
  buttonClassList,
  btnText,
  textClassList = [],
  href = undefined
}) => {
  return (
    <WholeButtonWrapper className={classNames(buttonClassList)} href={href}>
      <i className={classNames([...textClassList])}>{btnText}</i>
    </WholeButtonWrapper>
  )
}
export default memo(OperateButton)
