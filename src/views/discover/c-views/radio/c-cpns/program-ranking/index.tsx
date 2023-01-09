import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ProgramRankingWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import ProgramRankingItem from './c-cpns/program-ranking-item'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const ProgramRanking: FC<IProps> = (props) => {
  const { toplist } = useAppSelector(
    (state) => ({ toplist: state.radio.toplist }),
    shallowEqual
  )

  return (
    <ProgramRankingWrapper>
      <NavHeaderV4 navTitle="节目排行榜" moreLink="#" />
      <ul className="topListBox">
        {toplist.slice(0, 10).map(
          (
            {
              program: {
                mainSong: { id, name: mainSongName },
                radio: { name },
                coverUrl
              }
            },
            index
          ) => {
            return (
              <ProgramRankingItem
                key={id}
                imgUrl={coverUrl}
                radioTitle={mainSongName}
                radioDesc={name}
                radioIndex={index}
              />
            )
          }
        )}
      </ul>
    </ProgramRankingWrapper>
  )
}

export default memo(ProgramRanking)
