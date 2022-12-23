import React, { memo, useEffect, useRef } from 'react'
import type { FC, ReactNode } from 'react'
import { PanelLyricWrapper } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'

interface IProps {
  children?: ReactNode
}

const PanelLyric: FC<IProps> = (props) => {
  const { lyric, lyricsItemIndex } = useAppSelector(
    (state) => ({
      lyric: state.player.lyrics,
      lyricsItemIndex: state.player.lyricsItemIndex
    }),
    shallowEqual
  )

  const panelLyricRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (lyricsItemIndex === -1) return
    //总可滚动距离
    const totalScrollDistance = panelLyricRef.current!.scrollHeight
    //父元素可视区域距离
    const clientDistance = panelLyricRef.current!.clientHeight
    //需要移动的子元素
    const childrenElement = panelLyricRef.current!.children[lyricsItemIndex]
    //子元素宽度
    const childrenElementHeight = childrenElement!.clientHeight
    //子元素距离顶部距离
    const childrenElementTop = (childrenElement as HTMLDivElement).offsetTop
    //子元素需要滚动距离
    const distance =
      clientDistance * 0.5 - (childrenElementHeight * 0.5 + childrenElementTop)
    panelLyricRef.current!.scrollTop = -distance
  }, [lyricsItemIndex])

  return (
    <PanelLyricWrapper ref={panelLyricRef}>
      {lyric.map(({ time, text }, index) => {
        return (
          <div
            className={classNames('lyricItem', {
              activeLyricItem: lyricsItemIndex === index
            })}
            key={time}
          >
            {text}
          </div>
        )
      })}
    </PanelLyricWrapper>
  )
}

export default memo(PanelLyric)
