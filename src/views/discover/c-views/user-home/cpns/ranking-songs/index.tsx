import React, { Fragment, memo, ReactElement, useMemo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingSongsWrapper } from './style'
import NavHeaderV3 from '@/components/nav-header-v3'

interface IProps {
  children?: ReactNode
}

const RankingSong: FC<IProps> = (props) => {
  const childrenTitleElement = useMemo((): ReactElement => {
    return (
      <div className="totalMusicBox">
        <h4 className="totalMusic">累计听歌24首</h4>
        <div className="iconBox">
          <i className="sprite_icon3 icon"></i>
        </div>
      </div>
    )
  }, [])
  const rightElement = useMemo((): ReactElement => {
    return (
      <ul className="rightActionBox">
        <li className="time activeTime">最近一周</li>
        <li className="cutLine"></li>
        <li className="time">所有时间</li>
      </ul>
    )
  }, [])

  return (
    <RankingSongsWrapper>
      <NavHeaderV3
        navTitle="听歌排行"
        childrenTitleSlot={childrenTitleElement}
        rightSolt={rightElement}
      />
      <ul className="rankingSongList">
        <li className="rankingSongItem">
          <div className="songLeft">
            <span className="numIndex">1.</span>
            <i className="sprite_table playIcon"></i>
          </div>
          <div className="songCenter">
            <div>
              <a href={undefined}>Booty Call</a>
              <span className="connectLine">-</span>
              <a className="singerName" href={undefined}>
                张惠妹
              </a>
            </div>

            <ul className="iconList">
              <li title="添加到播放列表" className="addPlay">
                <a className="sprite_icon2 playLink" href={undefined}></a>
              </li>
              <li title="收藏" className="sprite_table collect"></li>
              <li title="分享" className="sprite_table share"></li>
              <li title="下载" className="sprite_table download"></li>
            </ul>
          </div>
          <div className="songRight"></div>
        </li>
      </ul>
    </RankingSongsWrapper>
  )
}

export default memo(RankingSong)
