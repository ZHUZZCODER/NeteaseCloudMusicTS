import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NewRadioItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IITEMDATA {
  id: number
  picUrl: string
  radioTitle: string
  radioDesc: string
}

interface IProps {
  children?: ReactNode
  itemData: IITEMDATA
}

const NewRadioItem: FC<IProps> = (props) => {
  const {
    itemData: { picUrl, radioTitle, radioDesc }
  } = props
  return (
    <NewRadioItemWrapper>
      <a className="radioImgBox" href={undefined}>
        <img src={getImageSize(picUrl, 200)} alt="" />
      </a>
      <h3 className="radioTitle">
        <a href={undefined}>{radioTitle}</a>
      </h3>
      <p className="radioDesc">{radioDesc}</p>
    </NewRadioItemWrapper>
  )
}

export default memo(NewRadioItem)
