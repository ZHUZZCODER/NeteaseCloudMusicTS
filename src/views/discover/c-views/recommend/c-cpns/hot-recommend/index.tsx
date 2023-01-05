import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRecommendWrapper } from './style'
import NavHeaderV1 from '@/components/nav-header-v1'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import SongMenuItem from '@/components/song-menu-item'

interface IProps {
  children?: ReactNode
}

const HotRecommend: FC<IProps> = (props) => {
  const menuList = [
    {
      item: '华语',
      link: '/discover/song?cat=华语'
    },
    {
      item: '流行',
      link: '/discover/song?cat=流行'
    },
    {
      item: '摇滚',
      link: '/discover/song?cat=摇滚'
    },
    {
      item: '民谣',
      link: '/discover/song?cat=民谣'
    },
    {
      item: '电子',
      link: '/discover/song?cat=电子'
    }
  ]

  const { hotRecommends = [] } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )
  return (
    <HotRecommendWrapper>
      <NavHeaderV1
        title={'热门推荐'}
        hotLink="#/discover/song"
        menuList={menuList}
        moreLink="/discover/song"
      ></NavHeaderV1>
      <div className="songList">
        {hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
