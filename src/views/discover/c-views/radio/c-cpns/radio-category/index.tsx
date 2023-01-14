import React, {
  memo,
  useRef,
  ElementRef,
  useCallback,
  useState,
  useEffect
} from 'react'
import type { FC, ReactNode } from 'react'
import { RadioCategoryWrapper, RadioCategoryA } from './style'
import { Carousel } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import {
  fetchDjRecommendTypeDataAction,
  changeActiveRadioIdAction
} from '../../store/radio'
import { Link, useLocation, useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const RadioCategory: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  //当前选中项id
  const [selectId, setSelectId] = useState<number | null>(null)
  const { categories } = useAppSelector(
    (state) => ({
      categories: state.radio.categories
    }),
    shallowEqual
  )

  //获取所有的分类数据
  useEffect(() => {
    if (categories.length) {
      categories.forEach((item) => {
        dispatch(fetchDjRecommendTypeDataAction(item.id))
      })
    }
  }, [categories])

  //刷新重新设置activeId
  useEffect(() => {
    if (location.search) {
      const searchParams = new URLSearchParams(location.search)
      const activeId = parseInt(searchParams.get('id') as string)
      setSelectId(activeId)
      dispatch(changeActiveRadioIdAction(activeId))
    } else {
      setSelectId(null)
    }
    return () => {
      dispatch(changeActiveRadioIdAction(null))
    }
  }, [location.search])

  //slider颜色切换
  const [activeSlide, setActiveSlide] = useState(false)

  //设置轮播页数
  const pageCount = Math.ceil(categories.length / 18) || 1

  //获取轮播图实例
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  //轮播计数
  const carouselCount = useRef<number>(0)

  function handleSlide(isNext = true, count = 1) {
    carouselCount.current = carouselCount.current + count
    //如果是最后一页，重置为最后一页
    if (carouselCount.current > pageCount - 1) {
      carouselCount.current = pageCount - 1
      return
    }
    //如果是第一页，重置为第一页
    if (carouselCount.current < 0) {
      carouselCount.current = 0
      return
    }
    if (carouselCount.current === 0) setActiveSlide(false)
    if (carouselCount.current === pageCount - 1) setActiveSlide(true)
    if (isNext) {
      carouselRef.current!.next()
      return
    }
    carouselRef.current!.prev()
  }

  //点击分类
  function categoryItemClick(id: number) {
    navigate(`/discover/radio?id=${id}`)
  }

  return (
    <RadioCategoryWrapper activeSlide={activeSlide}>
      <div
        className="radio_slide slide slideLeft"
        onClick={(e) => handleSlide(false, -1)}
      >
        向左
      </div>
      <div
        className="radio_slide slide slideRight"
        onClick={(e) => handleSlide()}
      >
        向右
      </div>
      <Carousel ref={carouselRef} speed={0} dots={{ className: 'dots' }}>
        {/* 根据length创建一个数组 */}
        {/* 0 18 18 36  index * 18 /  item + 1 * 18  */}
        {Array(pageCount)
          .fill(0)
          .map((item, index) => {
            return (
              <div key={item}>
                <div className="categoriesBox">
                  {categories.length &&
                    categories
                      .slice(index * 18, (index + 1) * 18)
                      .map(({ id, picWebUrl, name }) => {
                        return (
                          <RadioCategoryA
                            className="radio_bg"
                            activeCategory={id === selectId}
                            picWebUrl={picWebUrl}
                            key={id}
                            onClick={(e) => categoryItemClick(id)}
                          >
                            <div className="picWebBox"></div>
                            <div className="categoryTx">{name}</div>
                          </RadioCategoryA>
                        )
                      })}
                </div>
              </div>
            )
          })}
      </Carousel>
    </RadioCategoryWrapper>
  )
}

export default memo(RadioCategory)
