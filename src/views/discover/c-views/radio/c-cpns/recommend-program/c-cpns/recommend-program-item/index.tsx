import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RecommendProgramItemWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  imgUrl: string
  programTitle: string
  programDesc: string
  categoryTag: string
}

const RecommendProgramItem: FC<IProps> = (props) => {
  const { imgUrl, programTitle, programDesc, categoryTag } = props
  return (
    <RecommendProgramItemWrapper>
      <a className="imgBox" href={undefined} title="播放">
        <img className="imgLogo" src={getImageSize(imgUrl, 40)} alt="" />
        <i className="sprite_icon imgMask"></i>
      </a>
      <div className="txBox">
        <h3 className="txTitle">
          <a className="aNormal" href={undefined}>
            {programTitle}
          </a>
        </h3>
        <span className="txDesc">
          <a className="aNormal" href={undefined}>
            {programDesc}
          </a>
        </span>
      </div>
      <a className="tag" href={undefined}>
        {categoryTag}
      </a>
    </RecommendProgramItemWrapper>
  )
}

export default memo(RecommendProgramItem)
