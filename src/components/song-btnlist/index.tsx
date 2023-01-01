import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongBtnlistWrapper } from './style'
import { format } from '@/utils/format'

interface IProps {
  children?: ReactNode
  colletNum?: number
  shareNum?: number
  commentNum?: number
  playAllClick: () => void
}

const SongBtnlist: FC<IProps> = (props) => {
  const { colletNum, shareNum, commentNum, playAllClick } = props
  return (
    <SongBtnlistWrapper>
      <div className="btnPlay">
        <a
          className="sprite_button playIcon"
          title="播放"
          href={undefined}
          onClick={(e) => playAllClick()}
        >
          <i className="sprite_button  play"></i>
          <span>播放</span>
        </a>
        <a
          className="sprite_button playAddIcon"
          title="添加到播放列表"
          href={undefined}
        >
          <i className="sprite_button add"></i>
        </a>
      </div>
      <a className="sprite_button iconBox collectBox" href={undefined}>
        <i className="sprite_button collectIcon">
          {colletNum ? `(${format(colletNum)})` : '收藏'}
        </i>
      </a>
      <a className="sprite_button iconBox shareBox" href={undefined}>
        <i className="sprite_button shareIcon">
          {shareNum && `(${format(shareNum)})`}
        </i>
      </a>
      <a className="sprite_button iconBox downloadBox" href={undefined}>
        <i className="sprite_button downloadIcon">下载</i>
      </a>
      <a className="sprite_button iconBox commentBox">
        <i className="sprite_button commentIcon">
          {commentNum && `(${format(commentNum)})`}
        </i>
      </a>
    </SongBtnlistWrapper>
  )
}

export default memo(SongBtnlist)
