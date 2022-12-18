import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotRadioWrapper } from './style'
import NavHeaderV2 from '@/components/nav-header-v2'
import { hotRadios } from '@/assets/data/local_data'

interface IProps {
  children?: ReactNode
}

const HotRadio: FC<IProps> = (props) => {
  return (
    <HotRadioWrapper>
      <NavHeaderV2 title="热门主播" />
      <div className="hotRadioContent">
        {hotRadios.map(({ url, picUrl, name, position }) => {
          return (
            <div key={url} className="item">
              <a className="hotRadioLeft" href="#">
                <img src={picUrl} alt="" />
              </a>
              <div className="hotRadioRight">
                <div className="rightName">{name}</div>
                <div className="rightTitle">{position}</div>
              </div>
            </div>
          )
        })}
      </div>
    </HotRadioWrapper>
  )
}

export default memo(HotRadio)
