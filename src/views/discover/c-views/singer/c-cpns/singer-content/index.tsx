import React, { memo, useCallback, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SingerContentWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import SingerItem from './c-cpns/singer-item'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import joinSongList from '@/assets/data/join_singer.json'
import type { IARTISTS } from '../../store/type'
import FilterName from './c-cpns/filter-name'

interface IProps {
  children?: ReactNode
}

const SingerContent: FC<IProps> = (props) => {
  const [navName, setNavName] = useState('')
  const [showJoinShort, setShowJoinShort] = useState(false)
  const [artList, setArtList] = useState<IARTISTS[]>([])
  const { currentArea, currentType, hotArtists, artistsList } = useAppSelector(
    (state) => ({
      currentArea: state.singer.currentArea,
      currentType: state.singer.currentType,
      hotArtists: state.singer.hotArtists,
      artistsList: state.singer.artistsList
    }),
    shallowEqual
  )

  useEffect(() => {
    if (currentType.name === '推荐歌手') {
      setNavName('入驻歌手')
    } else {
      setNavName(currentType.name)
    }
    if (currentArea === -1 && currentType.type === 2) {
      setShowJoinShort(false)
    } else {
      setShowJoinShort(true)
    }
    if (currentArea === -1) {
      setArtList(hotArtists)
    } else {
      setArtList(artistsList)
    }
  }, [currentType, currentArea, hotArtists, artistsList])

  const renderJoinSinger = useCallback(
    (offset = 0, limit = 10) => {
      if (!showJoinShort) {
        limit = 99999
      }
      return joinSongList.slice(offset, limit).map((item) => {
        return <SingerItem key={item.id} itemData={item} />
      })
    },
    [showJoinShort]
  )

  function renderCategorySinger() {
    return artistsList.slice(0, 10).map((item) => {
      return <SingerItem key={item.id} itemData={item} />
    })
  }

  return (
    <SingerContentWrapper>
      <NavHeaderV4 navTitle={navName} moreLink="#" />
      {currentArea !== -1 && <FilterName />}
      <div className="joinSinger">
        {currentArea === -1 ? renderJoinSinger() : renderCategorySinger()}
      </div>
      {currentArea === -1 && currentType.type === 1 && (
        <>
          <NavHeaderV4 navTitle="热门歌手" />
          <div className="joinSinger">
            {hotArtists.slice(0, 10).map((item) => {
              return <SingerItem key={item.id} itemData={item} />
            })}
          </div>
        </>
      )}
      {showJoinShort && (
        <ul className="joinSingerShort">
          {artList.slice(10).map(({ id, name }) => {
            return (
              <li key={id} className="singer-info">
                <a className="singer-name" href={undefined}>
                  {name}
                </a>
                <a className="sprite_icon2 singer-icon" href={undefined}></a>
              </li>
            )
          })}
        </ul>
      )}
    </SingerContentWrapper>
  )
}

export default memo(SingerContent)
