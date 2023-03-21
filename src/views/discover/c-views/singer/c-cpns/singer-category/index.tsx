import React, { memo, useCallback, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'
import { SingerCategoryWrapper } from './style'
import { artistCategories } from '@/assets/data/local_data'
import type { ICURRENTTYPE } from '../../store/type'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  changeCurrentAreaAction,
  changeCurrentTypeAction,
  fetchArtistListDataAction
} from '../../store/singer'
import localCache from '@/utils/cache'

interface IProps {
  children?: ReactNode
}

const SingerCategory: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const { currentType } = useAppSelector(
    (state) => ({
      currentType: state.singer.currentType
    }),
    shallowEqual
  )
  const params = useParams()
  //判断是否由路径跳转过来
  const [isPathTo, setIsPathTo] = useState<boolean>(false)

  useEffect(() => {
    const paramsVal = Object.values(params)[0]
    if (paramsVal) {
      const currentType = artistCategories[0].artists[1]
      dispatch(changeCurrentTypeAction(currentType))
      dispatch(changeCurrentAreaAction(-1))
      dispatch(fetchArtistListDataAction('-1'))
      setIsPathTo(false)
    } else {
      setIsPathTo(true)
    }
  }, [])

  useEffect(() => {
    if (isPathTo) {
      const localCurrentType = localCache.getCache('currentType')
      const localCurrentArea = localCache.getCache('currentArea')
      const localInitialStatus = localCache.getCache('initialStatus')

      if (localCurrentType) {
        dispatch(changeCurrentTypeAction(localCurrentType))
      }
      if (localCurrentArea) {
        dispatch(changeCurrentAreaAction(localCurrentArea))
      }
      //当路径中没有initial时调用
      if (!localInitialStatus) {
        dispatch(fetchArtistListDataAction('-1'))
      }
    }

    return () => {
      localCache.removeCache('currentType')
      localCache.removeCache('currentArea')
      localCache.removeCache('initialStatus')
      dispatch(changeCurrentAreaAction(-1))
      dispatch(
        changeCurrentTypeAction({
          name: '推荐歌手',
          type: 1,
          url: '/discover/singer/'
        })
      )
    }
  }, [dispatch, isPathTo])

  const singerLiClick = useCallback(
    (area: number, type: ICURRENTTYPE) => {
      localCache.setCache('currentType', type)
      localCache.setCache('currentArea', area)
      localCache.setCache('initialStatus', false)
      dispatch(changeCurrentAreaAction(area))
      dispatch(changeCurrentTypeAction(type))
      dispatch(fetchArtistListDataAction('-1'))
    },
    [dispatch]
  )

  return (
    <SingerCategoryWrapper>
      {artistCategories.map(({ title, area, artists }) => {
        return (
          <div key={area} className="categoryBox">
            <h2 className="categoryTitle">{title}</h2>
            <ul className="categoryUlBox">
              {artists.map((item) => {
                return (
                  <li
                    key={item.name}
                    className={classNames('singer_sprite', 'singer-li', {
                      singerLiActive: currentType.name === item.name
                    })}
                    onClick={(e) => singerLiClick(area, item)}
                  >
                    <Link className={classNames('singerItem')} to={item.url}>
                      {item.name}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </SingerCategoryWrapper>
  )
}

export default memo(SingerCategory)
