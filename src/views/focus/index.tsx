import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { FocusWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Demo: FC<IProps> = (props) => {
  return (
    <FocusWrapper>
      <div className="wrap-v2 focusContent">
        <div className="focusBox">
          <h3 className="focusDesc">
            你可以关注明星和好友品味他们的私房歌单通过他们的动态发现更多精彩音乐
          </h3>
          <a
            className="focusBtn"
            href="#"
            target={'_self'}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            立即登录
          </a>
        </div>
      </div>
    </FocusWrapper>
  )
}

export default memo(Demo)
