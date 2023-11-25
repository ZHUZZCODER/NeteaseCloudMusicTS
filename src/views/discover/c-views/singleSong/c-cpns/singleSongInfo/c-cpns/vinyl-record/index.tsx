import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { VinylRecordWrapper } from './style'

interface IProps {
  children?: ReactNode
  bgWH?: number
  imgWH?: number
}

const VinyRecord: FC<IProps> = (props) => {
  const { bgWH = 198, imgWH = 130 } = props
  return (
    <VinylRecordWrapper bgWH={bgWH} imgWH={imgWH}>
      <img
        className="vinyImg"
        src="https://p1.music.126.net/9Oyd_61-tp1OsLeHPiVuNg==/5860396976152190.jpg?param=130y130"
        alt=""
      />
      <span className="sprite_cover vinyBg"></span>
    </VinylRecordWrapper>
  )
}

export default memo(VinyRecord)
