import React, { memo, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { ExcellentNewProgramWrapper } from './style'
import NavHeaderV4 from '@/components/nav-header-v4'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import NewRadioItem from './c-cpns/new-radio-item'

interface IProps {
  children?: ReactNode
}

const ExcellentNewProgram: FC<IProps> = (props) => {
  const { djRadiosList, activeRadioId } = useAppSelector(
    (state) => ({
      djRadiosList: state.radio.djRadiosList,
      activeRadioId: state.radio.activeRadioId
    }),
    shallowEqual
  )

  function renderProgram() {
    if (djRadiosList.length && activeRadioId !== null) {
      const songRadioList = djRadiosList.filter(
        (item) => item.categoryId === activeRadioId
      )
      if (!songRadioList.length) {
        return <div></div>
      } else {
        return songRadioList
          .slice(0, 5)
          .map(({ id, name, rcmdtext, picUrl }) => {
            return (
              <NewRadioItem
                key={id}
                itemData={{
                  id,
                  picUrl,
                  radioTitle: name,
                  radioDesc: rcmdtext
                }}
              />
            )
          })
      }
    } else {
      return <div></div>
    }
  }

  return (
    <ExcellentNewProgramWrapper>
      <NavHeaderV4 navTitle="优秀新电台" />
      <ul className="excellentNewBox">{renderProgram()}</ul>

      {/* <NavHeaderV4 navTitle="电台排行榜" /> */}
    </ExcellentNewProgramWrapper>
  )
}

export default memo(ExcellentNewProgram)
