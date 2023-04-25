import React, { memo, useEffect, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { FilterNameWrapper } from './style'
import { singerAlphas } from '@/utils/handle-data'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { fetchArtistListDataAction } from '../../../../store/singer'
import localCache from '@/utils/cache'

interface IProps {
  children?: ReactNode
}

const FilterName: FC<IProps> = (props) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const location = useLocation()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeInitial, setActiveInitial] = useState(-1)
  const [catQuery, setCatQuery] = useState<string>('')
  const filterStatus = useRef(false)

  const { currentType } = useAppSelector(
    (state) => ({
      currentType: state.singer.currentType
    }),
    shallowEqual
  )

  useEffect(() => {
    const catId = currentType.url.split('=')[1]
    setCatQuery(catId)
    if (activeInitial) setActiveInitial(-1)
  }, [currentType])

  useEffect(() => {
    const initial = searchParams.get('initial')
    if (initial) {
      const initialNum = parseInt(initial)
      localCache.setCache('initialStatus', true)
      setActiveInitial(initialNum)
      dispatch(fetchArtistListDataAction({ initial: `${initial}` }))
    }
  }, [searchParams])

  const filterItemClick = (
    index: number,
    item: { name: string; charCode: number }
  ) => {
    const pathname = location.pathname
    navigate(`${pathname}?cat=${catQuery}&initial=${item.charCode}`)
  }

  return (
    <FilterNameWrapper>
      {singerAlphas.map((item, index) => {
        if (item.charCode === -1 || item.charCode === 0) {
          filterStatus.current = true
        } else {
          filterStatus.current = false
        }

        return (
          <li
            key={item.charCode}
            className={classNames(
              'filterItem',
              {
                filterNormal: !filterStatus.current
              },
              { activeFilter: activeInitial === item.charCode }
            )}
            onClick={(e) => filterItemClick(index, item)}
          >
            {item.name}
          </li>
        )
      })}
    </FilterNameWrapper>
  )
}

export default memo(FilterName)
