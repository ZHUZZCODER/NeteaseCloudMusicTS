import React, {
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useState,
  useRef
} from 'react'
import type { FC, ReactNode, ChangeEvent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Input, InputRef } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import { AppHeaderWrapper, SearchPanelWrapper } from './style'
import headerTitles from '@/assets/data/header_titles.json'
import { hasOwnPropertypeKey, isString } from '@/utils/utils'
import { searchSuggest, search } from '@/services/service'
import { changeSuggestResultAction } from '@/store/modules/musicSearch'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { isEmptyObject } from '@/utils/isEmptyObject'
import { isArray } from 'underscore'
import { changeSingerInfomationAction } from '@/views/discover/c-views/singleSong/store/singleSong'
import type { LoginStatusRes } from '@/services/service/type'
import { isObject, isObjectKeys } from '@/utils/type'
import LoginBar from './cpns/login-bar'

interface IProps {
  children?: ReactNode
  changeLoginModal?: (status: boolean) => void
}

interface TitleItem {
  title: string
  type: string
  link: string
}

const AppHeader: FC<IProps> = (props) => {
  const { changeLoginModal } = props
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState<string>('')
  const [showSearchPanel, setShowSearchPanel] = useState<boolean>(false)
  const [order, setOrder] = useState<string[]>([])
  //是否点击
  const [isClick, setIsClick] = useState<boolean>(false)
  const inputRef = useRef<InputRef>(null)
  //登录状态
  const [isLogin, setIsLogin] = useState<boolean>(false)
  // const isClick = useRef<boolean>()

  //获取搜索建议
  const { suggestResult, userInfo } = useAppSelector(
    (state) => ({
      suggestResult: state.musicSearch.suggestResult,
      userInfo: state.globalStore.userInfo
    }),
    shallowEqual
  )

  useEffect(() => {
    if (suggestResult.order) {
      setOrder(suggestResult.order)
    }
  }, [suggestResult.order, setOrder])

  useEffect(() => {
    if (isObject<LoginStatusRes>(userInfo) && isObjectKeys(userInfo)) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }, [userInfo])

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
      const value = e.target.value
      //进行关键字搜索
      const { result } = await searchSuggest(value)
      if (result) {
        dispatch(changeSuggestResultAction(result))
      }
      if ((isString(value) && !value) || !isEmptyObject(result)) {
        setShowSearchPanel(false)
        dispatch(changeSuggestResultAction({}))
      } else {
        setShowSearchPanel(true)
      }
      setSearchValue(value)
    },
    [setSearchValue, setShowSearchPanel, dispatch]
  )

  const handlePressEnter = useCallback(() => {
    setShowSearchPanel(false)
  }, [])

  const handleFocus = useCallback(async () => {
    const { result } = await searchSuggest(searchValue)
    if (result) dispatch(changeSuggestResultAction(result))
    if (searchValue) setShowSearchPanel(true)
  }, [searchValue])

  const handleBlur = useCallback(() => {
    if (!isClick) setShowSearchPanel(false)
  }, [isClick])

  const handleSongClick = useCallback(
    ({
      id,
      name,
      artistName,
      albumName
    }: {
      id: number
      name: string
      artistName: string
      albumName: string
    }) => {
      dispatch(
        changeSingerInfomationAction({
          songName: name,
          singerName: artistName,
          albumName: albumName
        })
      )
      navigate(`/discover/singleSong?id=${id}`)
      setShowSearchPanel(false)
      inputRef.current?.blur()
    },
    [dispatch, navigate, setShowSearchPanel, inputRef]
  )

  const handlePlaylists = useCallback(
    (id: number) => {
      navigate(`/discover/playlist?id=${id}`)
      setShowSearchPanel(false)
      inputRef.current?.blur()
    },
    [navigate, setShowSearchPanel, inputRef]
  )

  const handleAlbums = useCallback(
    (id: number) => {
      navigate(`/discover/albumList?id=${id}`)
      setShowSearchPanel(false)
      inputRef.current?.blur()
    },
    [navigate, setShowSearchPanel, inputRef]
  )

  const handleShowPanelMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (showSearchPanel) {
        e.stopPropagation()
        e.preventDefault()
      }
    },
    [setIsClick, showSearchPanel]
  )

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
              ref={inputRef}
              className="search"
              placeholder="音乐/视频/电台/用户"
              prefix={<SearchOutlined className="searchIcon" />}
              defaultValue={searchValue}
              onChange={(e) => handleSearchChange(e)}
              onPressEnter={handlePressEnter}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <SearchPanelWrapper
              showPanel={showSearchPanel}
              onMouseDown={(e: React.MouseEvent) => handleShowPanelMouseDown(e)}
            >
              <p className="searchHeader">
                <a href={undefined}>搜&quot;{searchValue}&quot;相关用户&gt;</a>
              </p>
              <div className="searchContentBox">
                {!!order.length &&
                  order.map((orderKey) => {
                    let element = null
                    switch (orderKey) {
                      case 'songs':
                        element = (
                          <>
                            <h3 className="searchCategory">单曲</h3>
                            <ul className="searchContent">
                              {suggestResult?.songs &&
                                suggestResult.songs.map(
                                  ({
                                    id,
                                    artists: [{ name: artistName }],
                                    album: { name: albumName },
                                    name
                                  }) => {
                                    return (
                                      <li
                                        key={id}
                                        className="contentItem"
                                        onClick={(e) =>
                                          handleSongClick({
                                            id,
                                            name,
                                            artistName,
                                            albumName
                                          })
                                        }
                                      >
                                        <a
                                          title={`${name}-${artistName}`}
                                          href={undefined}
                                        >
                                          {name}-{artistName}
                                        </a>
                                      </li>
                                    )
                                  }
                                )}
                            </ul>
                          </>
                        )
                        break
                      case 'artists':
                        element = (
                          <>
                            <h3 className="searchCategory">歌手</h3>
                            <ul className="searchContent">
                              {suggestResult?.artists &&
                                suggestResult.artists.map(({ name, id }) => {
                                  return (
                                    <li key={id} className="contentItem">
                                      <a title={name} href={undefined}>
                                        {name}
                                      </a>
                                    </li>
                                  )
                                })}
                            </ul>
                          </>
                        )
                        break
                      case 'albums':
                        element = (
                          <>
                            <h3 className="searchCategory">专辑</h3>
                            <ul className="searchContent">
                              {suggestResult?.albums &&
                                suggestResult.albums.map(
                                  ({
                                    id,
                                    artist: { name: artistName },
                                    name
                                  }) => {
                                    return (
                                      <li
                                        key={id}
                                        className="contentItem"
                                        onClick={(e) => handleAlbums(id)}
                                      >
                                        <a
                                          title={`${name}-${artistName}`}
                                          href={undefined}
                                        >
                                          {name}-{artistName}
                                        </a>
                                      </li>
                                    )
                                  }
                                )}
                            </ul>
                          </>
                        )
                        break
                      case 'playlists':
                        element = (
                          <>
                            <h3 className="searchCategory">歌单</h3>
                            <ul className="searchContent">
                              {suggestResult?.playlists &&
                                suggestResult.playlists.map(({ id, name }) => {
                                  return (
                                    <li
                                      key={id}
                                      className="contentItem"
                                      onClick={(e) => handlePlaylists(id)}
                                    >
                                      <a title={name} href={undefined}>
                                        {name}
                                      </a>
                                    </li>
                                  )
                                })}
                            </ul>
                          </>
                        )
                        break
                    }

                    return (
                      <div className="searchItem" key={orderKey}>
                        {element}
                      </div>
                    )
                  })}
              </div>
            </SearchPanelWrapper>
          </div>
          <div className="framer">创作者中心</div>
          {!isLogin ? (
            <a href={undefined} onClick={() => changeLoginModal?.(true)}>
              登录
            </a>
          ) : (
            !!userInfo && <LoginBar imgUrl={userInfo.profile.avatarUrl} />
          )}
        </div>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
}

export default memo(AppHeader)
