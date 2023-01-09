import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendProgramWrapper } from './style'
import NavHeaderV1 from '@/components/nav-header-v1'
import NavHeaderV4 from '@/components/nav-header-v4'
import RecommendProgramItem from './c-cpns/recommend-program-item'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const RecommendProgram: FC<IProps> = (props) => {
  const { programs } = useAppSelector(
    (state) => ({
      programs: state.radio.programs
    }),
    shallowEqual
  )

  return (
    <RecommendProgramWrapper>
      <NavHeaderV4 navTitle="推荐节目" moreLink="#" />
      <ul className="programBox">
        {programs.map(
          ({
            id,
            blurCoverUrl,
            mainSong: { name },
            radio: { desc, category }
          }) => {
            return (
              <RecommendProgramItem
                key={id}
                imgUrl={blurCoverUrl}
                programTitle={name}
                programDesc={desc}
                categoryTag={category}
              />
            )
          }
        )}
      </ul>
    </RecommendProgramWrapper>
  )
}

export default memo(RecommendProgram)
