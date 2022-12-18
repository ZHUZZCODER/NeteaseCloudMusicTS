import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendWrapper } from './style'
import TopSwiper from './c-cpns/top-swiper'
import { useAppDispatch } from '@/store'
import {
  fetchBannersDataAction,
  fetchHotRecommendDataAction,
  fetchNewAlbumsDataAction,
  fetchRankingListDataAction,
  fetchSongListDataAction
} from './store/recommend'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import RankingList from './c-cpns/ranking-list'
import UserLogin from './c-cpns/user-login'
import JoinSong from './c-cpns/join-song'
import HotRadio from './c-cpns/hot-radio'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = (props) => {
  //请求轮播数据
  const dispath = useAppDispatch()
  useEffect(() => {
    dispath(fetchBannersDataAction())
    dispath(fetchHotRecommendDataAction())
    dispath(fetchNewAlbumsDataAction())
    dispath(fetchRankingListDataAction())
    dispath(fetchSongListDataAction())
  }, [dispath])

  return (
    <RecommendWrapper>
      <TopSwiper />
      <div className="recommendContent wrap-v2">
        <div className="recommendLeft">
          <HotRecommend />
          <NewAlbum />
          <RankingList />
        </div>
        <div className="recommendRight">
          <UserLogin />
          <JoinSong />
          <HotRadio />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
