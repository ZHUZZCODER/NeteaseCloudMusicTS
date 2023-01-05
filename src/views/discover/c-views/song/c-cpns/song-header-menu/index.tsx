import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import classNames from 'classnames'
import { SongHeaderMenuWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { isEmptyObject } from '@/utils/isEmptyObject'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
  selectCategory: () => void
}

const SongHeaderMenu: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { selectCategory } = props

  const { categoryInfo, category: CATEGORY } = useAppSelector(
    (state) => ({
      categoryInfo: state.song.categoryInfo,
      category: state.song.category
    }),
    shallowEqual
  )
  const { categories = {}, sub = [] } = categoryInfo ?? {}

  function changeCategory(name: string) {
    navigate(`/discover/song?cat=${name}`)
    selectCategory()
  }

  return (
    <SongHeaderMenuWrapper>
      <div className="menu-sltlyr menuHeader">
        <i className="sprite_icon icn"></i>
      </div>
      <div className="menu-sltlyr menuContent">
        <h3 className="allStyle">
          <a
            href={undefined}
            onClick={(e) => changeCategory('全部')}
            className="sprite_button2 allStyleBtn"
          >
            <i className="all">全部风格</i>
          </a>
        </h3>
        <div className="menuCategory">
          {isEmptyObject(categories) &&
            Object.entries(categories).map((item, index) => {
              return (
                <dl className={classNames('dlCg', `cg${index}`)} key={item[1]}>
                  <dt className="dtCg">
                    <i className="sprite_icon2 iconCategory"></i>
                    <span>{item[1]}</span>
                  </dt>
                  <dd className="ddCg">
                    <ul className="ulCg">
                      {sub.length &&
                        sub.map(({ name, category }) => {
                          if (category === parseInt(item[0])) {
                            return (
                              <li className="liCg" key={name}>
                                <a
                                  className={classNames({
                                    activeA: CATEGORY === name
                                  })}
                                  href={undefined}
                                  onClick={(e) => changeCategory(name)}
                                >
                                  {name}
                                </a>
                                <div className="divider">|</div>
                              </li>
                            )
                          }
                        })}
                    </ul>
                  </dd>
                </dl>
              )
            })}
        </div>
      </div>

      <div className="menu-sltlyr menuBottom"></div>
    </SongHeaderMenuWrapper>
  )
}

export default memo(SongHeaderMenu)
