import React, { memo, useEffect, Fragment, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import {
  RankingWrapper,
  RankingLeftListWrapper,
  RankingRightWrapper
} from './style'
import RankingItem from './c-cpns/ranking-item'
import RankingInfo from './c-cpns/ranking-info'
import RankingSong from './c-cpns/ranking-song'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchRankingListDataAction,
  fetchPlayListDataAction,
  changeCurrentIndexAction
} from './store/ranking'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchRankingListDataAction())
  }, [dispatch])

  const { rankingList, currentIndex } = useAppSelector(
    (state) => ({
      rankingList: state.ranking.rankingList,
      currentIndex: state.ranking.currentIndex
    }),
    shallowEqual
  )

  useEffect(() => {
    const id = rankingList[currentIndex] && rankingList[currentIndex].id
    if (!id) return
    dispatch(fetchPlayListDataAction(id))
  }, [rankingList, dispatch, currentIndex])

  const rankingItemClick = useCallback((index: number) => {
    dispatch(changeCurrentIndexAction(index))
  }, [])

  return (
    <RankingWrapper>
      <div className="wrap-v2 rankingContent">
        <RankingLeftListWrapper>
          {rankingList.length &&
            rankingList.map(
              ({ id, coverImgUrl, name, updateFrequency }, index) => {
                let header
                if (index === 0 || index === 4) {
                  header =
                    index === 0 ? (
                      <h2 className="ranking-title">云音乐特色榜</h2>
                    ) : (
                      <h2 className="ranking-title">全球媒体榜</h2>
                    )
                }
                return (
                  <Fragment key={id}>
                    {header}
                    <RankingItem
                      imgUrl={coverImgUrl}
                      itemTitle={name}
                      itemStatus={updateFrequency}
                      itemActive={currentIndex === index}
                      rankingItemClick={() => rankingItemClick(index)}
                    />
                  </Fragment>
                )
              }
            )}
        </RankingLeftListWrapper>
        <RankingRightWrapper>
          <RankingInfo />
          <RankingSong />
        </RankingRightWrapper>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
