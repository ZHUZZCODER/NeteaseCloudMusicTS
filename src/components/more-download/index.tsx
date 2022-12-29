import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MoreDownloadWrapper } from './style'
import NavHeaderV2 from '@/components/nav-header-v2'

interface IProps {
  children?: ReactNode
}

const MoreDownload: FC<IProps> = (props) => {
  return (
    <MoreDownloadWrapper>
      <div className="moreDownloadContent">
        <NavHeaderV2 title="网易云音乐多端下载" />
        <div className="iconBox">
          <a
            className="ios sprite_donwload"
            href="https://itunes.apple.com/cn/app/id590338362"
            target="_blank"
            rel="noreferrer"
          >
            iPhone
          </a>
          <a
            className="windows sprite_donwload"
            href="https://music.163.com/api/pc/download/latest"
            target="_blank"
            rel="noreferrer"
          >
            PC
          </a>
          <a
            className="android sprite_donwload"
            href="https://music.163.com/api/android/download/latest2"
            target="_blank"
            rel="noreferrer"
          >
            Android
          </a>
        </div>
        <span className="downloadDesc">同步歌单，随时畅听320k好音乐</span>
      </div>
    </MoreDownloadWrapper>
  )
}

export default memo(MoreDownload)
