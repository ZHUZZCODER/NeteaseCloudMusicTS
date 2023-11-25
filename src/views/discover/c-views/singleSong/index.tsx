import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { useHandleSearchParams } from '@/hooks'
import { useAppDispatch } from '@/store'
import { SingleSongWrapper } from './style'
import SingleSongInfo from './c-cpns/singleSongInfo'
import SingleSongMore from './c-cpns/singleSongMore'
import { fetchSongInfoDataAction } from './store/singleSong'
import { isEmptyObject } from '@/utils/isEmptyObject'
import { changeSongIdAction } from './store/singleSong'

interface IProps {
  children?: ReactNode
}

const SingleSong: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useHandleSearchParams()
  useEffect(() => {
    if (searchParams && isEmptyObject(searchParams)) {
      dispatch(fetchSongInfoDataAction(searchParams.id))
      dispatch(changeSongIdAction(searchParams.id))
    }
  }, [searchParams, dispatch])

  return (
    <SingleSongWrapper className="wrap-v2 wrap_bg2">
      <SingleSongInfo />
      <SingleSongMore />
    </SingleSongWrapper>
  )
}

export default memo(SingleSong)
