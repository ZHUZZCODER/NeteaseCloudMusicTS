import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RadioItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IITEMDATA {
  id: number
  name: string
  desc: string
  avatarUrl: string
}

interface IProps {
  children?: ReactNode
  itemData: IITEMDATA
}

const RadioItem: FC<IProps> = (props) => {
  const {
    itemData: { id, name, desc, avatarUrl }
  } = props
  return (
    <RadioItemWrapper>
      <a className="imgItemBox" href={undefined}>
        <img className="imgItem" src={getImageSize(avatarUrl, 200)} alt="" />
      </a>
      <div className="radioDescBox">
        <h3 className="radioTitle">
          <a href={undefined}>{name}</a>
        </h3>
        <span className="radioDesc">{desc}</span>
      </div>
    </RadioItemWrapper>
  )
}

export default memo(RadioItem)
