import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

type TFN = (id: number) => void

interface IProps {
  children?: ReactNode
  imgUrl: string
  itemTitle: string
  itemStatus: string
  itemActive: boolean
  rankingItemClick: () => any
}

const RankingItem: FC<IProps> = (props) => {
  const { imgUrl, itemTitle, itemStatus, itemActive, rankingItemClick } = props
  return (
    <RankingItemWrapper isActive={itemActive} onClick={rankingItemClick}>
      <div className="itemLeft">
        <img src={getImageSize(imgUrl, 40)} alt="" />
      </div>
      <div className="itemRight">
        <div className="itemTitle">{itemTitle}</div>
        <div className="itemContent">{itemStatus}</div>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(RankingItem)
