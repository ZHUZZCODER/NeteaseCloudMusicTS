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
      link: '#'
    },
    {
      item: '流行',
      link: '#'
    },
    {
      item: '摇滚',
      link: '#'
    },
    {
      item: '民谣',
      link: '#'
    },
    {
      item: '电子',
      link: '#'
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
        menuList={menuList}
        moreLink="/discover/song"
      />
      <div className="songList">
        {hotRecommends.map((item) => {
          return <SongMenuItem key={item.id} itemData={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
}

export default memo(HotRecommend)
