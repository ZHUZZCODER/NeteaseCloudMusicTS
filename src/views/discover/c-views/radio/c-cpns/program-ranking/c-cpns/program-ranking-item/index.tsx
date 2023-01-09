import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ProgramRankingItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  imgUrl: string
  radioTitle: string
  radioDesc: string
  radioIndex: number
}

const ProgramRankingItem: FC<IProps> = (props) => {
  const { imgUrl, radioTitle, radioDesc, radioIndex } = props
  return (
    <ProgramRankingItemWrapper>
      <div className="numBox">
        <span className="counter">{`${radioIndex + 1}`.padStart(2, '0')}</span>
        <i className="sprite_icon2 iconBox">0</i>
      </div>
      <div className="imgBox">
        <img className="imgLogo" src={getImageSize(imgUrl, 40)} alt="" />
        <i className="sprite_icon imgMask"></i>
      </div>
      <div className="txBox">
        <h3 className="txTitle">
          <a className="aNormal" href={undefined}>
            {radioTitle}
          </a>
        </h3>
        <span className="txDesc">
          <a className="aNormal" href={undefined}>
            {radioDesc}
          </a>
        </span>
      </div>
      <span className="sprite_table progressBox">
        <i className="sprite_table progressContent">
          <i className="sprite_table progressChild"></i>
        </i>
      </span>
    </ProgramRankingItemWrapper>
  )
}

export default memo(ProgramRankingItem)
