import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RadioWrapper } from './style'
import RadioCategory from './c-cpns/radio-category'
import { useAppDispatch, useAppSelector } from '@/store'
import {
  fetchCategoriesDataAction,
  fetchProgramsDataAction,
  fetchDjProgramToplistDataAction,
  fetchDjRecommendTypeDataAction
} from './store/radio'
import RecommendProgram from './c-cpns/recommend-program'
import ProgramRanking from './c-cpns/program-ranking'
import SongRadio from './c-cpns/song-radio'
import LifeRadio from './c-cpns/life-radio'
import EmotionRadio from './c-cpns/emotion-radio'
import CreateRadio from './c-cpns/create-radio'
import KnowledgeRadio from './c-cpns/knowledge-radio'
import { shallowEqual } from 'react-redux'
import ExcellentNewProgram from './c-cpns/excellent-new-program'
import RadioRanking from './c-cpns/radio-ranking'

interface IProps {
  children?: ReactNode
}

const Radio: FC<IProps> = (props) => {
  const dispatch = useAppDispatch()

  const { activeRadioId } = useAppSelector(
    (state) => ({
      activeRadioId: state.radio.activeRadioId
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchCategoriesDataAction())
    dispatch(fetchProgramsDataAction())
    dispatch(fetchDjProgramToplistDataAction())
  }, [dispatch])

  return (
    <RadioWrapper>
      <div className="wrap-v2 radioContent">
        <RadioCategory />
        {activeRadioId === null ? (
          <>
            <div className="radio-program">
              <RecommendProgram />
              <ProgramRanking />
            </div>
            <SongRadio />
            <LifeRadio />
            <EmotionRadio />
            <CreateRadio />
            <KnowledgeRadio />
          </>
        ) : (
          <>
            <ExcellentNewProgram />
            <RadioRanking></RadioRanking>
          </>
        )}
      </div>
    </RadioWrapper>
  )
}

export default memo(Radio)
