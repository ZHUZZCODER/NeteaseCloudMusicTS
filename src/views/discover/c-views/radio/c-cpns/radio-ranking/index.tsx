import React, { memo, useCallback, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { RadioRankingWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchDjRadioHotDataAction } from '../../store/radio'
import { shallowEqual } from 'react-redux'
import RadioRankingItem from './c-cpns/radio-ranking-item'
import PagePagination from '@/components/page-pagination'

interface IProps {
  children?: ReactNode
}

const RadioRanking: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const { activeRadioId, hotRadios, hotRadiosCount } = useAppSelector(
    (state) => ({
      activeRadioId: state.radio.activeRadioId,
      hotRadios: state.radio.hotRadios,
      hotRadiosCount: state.radio.hotRadiosCount
    }),
    shallowEqual
  )
  useEffect(() => {
    if (activeRadioId !== null) {
      dispatch(fetchDjRadioHotDataAction({ offset: 1, cateId: activeRadioId }))
      setCurrentPage(1)
    }
  }, [dispatch, activeRadioId])

  const onPageChange = useCallback(
    (page: number) => {
      if (activeRadioId)
        dispatch(
          fetchDjRadioHotDataAction({ offset: page, cateId: activeRadioId })
        )
      setCurrentPage(page)
    },
    [activeRadioId]
  )
  return (
    <RadioRankingWrapper>
      <NavHeaderV4 navTitle="电台排行榜">
        <div className="radioBtn">
          <span className="radioLeftBtn">上升最快</span>
          <span>|</span>
          <span className="radioRightBtn">最热电台</span>
        </div>
      </NavHeaderV4>
      <ul className="radioRankingBox">
        {hotRadios.slice(0, 22).map((item) => {
          return <RadioRankingItem key={item.id} itemData={item} />
        })}
      </ul>
      <PagePagination
        currentPage={currentPage}
        onPageChange={onPageChange}
        total={hotRadiosCount}
        isFirst={currentPage === 1}
        isNext={currentPage === hotRadios.length}
      />
    </RadioRankingWrapper>
  )
}

export default memo(RadioRanking)
