import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IITEMDATA {
  name: string
  img1v1Url: string
  id: number
}

interface IProps {
  children?: ReactNode
  itemData: IITEMDATA
}

const SingerItem: FC<IProps> = (props) => {
  const {
    itemData: { name, img1v1Url, id }
  } = props
  return (
    <SingerItemWrapper>
      <div className="imgBox" title={name}>
        <img src={getImageSize(img1v1Url, 130)} alt="" />
        <a className="imgMask sprite_cover" href={undefined}></a>
      </div>
      <div className="singerinfo">
        <a className="singerName" href={undefined} title={name}>
          {name}
        </a>
        <a className="singerIcon" href={undefined} title={`${name}的个人主页`}>
          <i className="sprite_icon2 iconLogo"></i>
        </a>
      </div>
    </SingerItemWrapper>
  )
}

export default memo(SingerItem)
