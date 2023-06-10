import React, { memo, ReactElement, useCallback, useState } from 'react'
import type { FC, ReactNode, ChangeEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { AppHeaderWrapper, SearchPanelWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'
import { isString } from '@/utils/utils'
import { searchSuggest, search } from '@/services/service'
import { changeSuggestResultAction } from '@/store/modules/musicSearch'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { isEmptyObject } from '@/utils/isEmptyObject'

interface IProps {
  children?: ReactNode
}

interface TitleItem {
  title: string
  type: string
  link: string
}

const AppHeader: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  const [showSearchPanel, setShowSearchPanel] = useState<boolean>(false)

  //获取搜索建议
  const { suggestResult } = useAppSelector(
    (state) => ({
      suggestResult: state.musicSearch.suggestResult
    }),
    shallowEqual
  )

  function handleTitle(
    { title, type, link }: TitleItem,
    index: number
  ): ReactElement {
    if (type === 'path') {
      /**
       * NavLink的active，刷新之后仍然是active
       * */
      return (
        <NavLink
          to={link}
          className={({ isActive }) => (isActive ? 'active' : undefined)}
        >
          {title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={link} target="_blank" rel="noreferrer">
          {title}
        </a>
      )
    }
  }

  const handleSearchChange = useCallback(
    async (e: ChangeEvent<HTMLInputElement>) => {
      console.log('Event=', e.target.value, typeof e.target.value, searchValue)
      const value = e.target.value
      //进行关键字搜索
      const { result } = await searchSuggest('111')
      if (result) {
        dispatch(changeSuggestResultAction(result))
      }

      console.log('请求result=', result)

      if ((isString(value) && !value) || !isEmptyObject(result)) {
        setShowSearchPanel(false)
      }

      setShowSearchPanel(true)

      setSearchValue(value)
    },
    []
  )

  const handlePressEnter = useCallback(() => {
    setShowSearchPanel(false)
  }, [])

  const handleFocus = useCallback(() => {
    console.log('searchValue=', searchValue)
    if (searchValue) setShowSearchPanel(true)
  }, [searchValue])

  const handleBlur = useCallback(() => {
    setShowSearchPanel(false)
  }, [])

  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 appHeaderBox">
        <div className="headerLeft">
          <a className="sprite_01 logo" href="#">
            网易云音乐
          </a>
          <div className="left_titles">
            {headerTitles.map((titleItem, index) => {
              return (
                <div key={titleItem.title} className="titleItem">
                  {handleTitle(titleItem, index)}
                </div>
              )
            })}
          </div>
        </div>
        <div className="headerRight">
          <div className="searchBox">
            <Input
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined className="searchIcon" />}
              value={searchValue}
              onChange={(e) => handleSearchChange(e)}
              onPressEnter={handlePressEnter}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <SearchPanelWrapper showPanel={showSearchPanel}>
              <p className="searchHeader">
                <a href={undefined}>搜&quot;11&quot;相关用户&gt;</a>
              </p>
              <div className="searchContentBox">
                <div className="searchItem">
                  <h3 className="searchCategory">单曲</h3>
                  <ul className="searchContent">
                    <li className="contentItem">
                      <a href={undefined}>11-队长 黄礼格</a>
                    </li>
                    <li className="contentItem">
                      <a href={undefined}>11-队长 黄礼格</a>
                    </li>
                  </ul>
                </div>
                <div className="searchItem">
                  <h3 className="searchCategory">歌手</h3>
                  <ul className="searchContent">
                    <li className="contentItem">
                      <a href={undefined}>11:11</a>
                    </li>
                  </ul>
                </div>
                <div className="searchItem">
                  <h3 className="searchCategory">专辑</h3>
                  <ul className="searchContent">
                    <li className="contentItem">
                      <a href={undefined}>111</a>
                    </li>
                  </ul>
                </div>
                <div className="searchItem">
                  <h3 className="searchCategory">歌单</h3>
                  <ul className="searchContent">
                    <li className="contentItem">
                      <a href={undefined}>123</a>
                    </li>
                  </ul>
                </div>
              </div>
            </SearchPanelWrapper>
          </div>
          <div className="framer">创作者中心</div>
          <a href="#">登录</a>
        </div>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
