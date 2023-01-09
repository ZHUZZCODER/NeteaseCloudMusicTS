import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RadioRankingItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IITEMDATA {
  picUrl: string
  name: string
  dj: {
    nickname: string
    avatarDetail: {
      identityIconUrl?: string
    }
  }
  programCount: number
  subCount: number
}

interface IProps {
  children?: ReactNode
  itemData: IITEMDATA
}

const RadioRankingItem: FC<IProps> = (props) => {
  const {
    itemData: {
      picUrl,
      name,
      dj: { nickname, avatarDetail },
      programCount,
      subCount
    }
  } = props
  return (
    <RadioRankingItemWrapper>
      <a className="radioImgBox" href={undefined}>
        <img src={getImageSize(picUrl, 200)} alt="" />
      </a>
      <div className="radioTxBox">
        <h3 className="radioTitle">
          <a href={undefined}>{name}</a>
        </h3>
        <div className="userInfo">
          <i className="sprite_icon2  iconUser"></i>
          <a className="username" href={undefined}>
            {nickname}
          </a>
          {avatarDetail?.identityIconUrl && (
            <img
              className="iconLogo"
              src={avatarDetail?.identityIconUrl}
              alt=""
            />
          )}
        </div>
        <div className="radioDesc">
          共{programCount}期&nbsp;&nbsp;&nbsp;&nbsp;订阅{subCount}次
        </div>
      </div>
    </RadioRankingItemWrapper>
  )
}

export default memo(RadioRankingItem)
