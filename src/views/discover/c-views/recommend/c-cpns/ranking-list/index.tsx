import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingListWrapper } from './style'
import NavHeaderV1 from '@/components/nav-header-v1'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import RankingListItem from '../ranking-list-item'

interface IProps {
  children?: ReactNode
}

const RankingList: FC<IProps> = (props) => {
  const { rankingList = [] } = useAppSelector(
    (state) => ({
      rankingList: state.recommend.rankingList
    }),
    shallowEqual
  )

  return (
    <RankingListWrapper>
      <NavHeaderV1 title="榜单" />
      <div className="rankingListContent">
        {rankingList.length &&
          rankingList.map((rankItem) => {
            return <RankingListItem key={rankItem.id} rankingItem={rankItem} />
          })}
      </div>
    </RankingListWrapper>
  )
}

export default memo(RankingList)
