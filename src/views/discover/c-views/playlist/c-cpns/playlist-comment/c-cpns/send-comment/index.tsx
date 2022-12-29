import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SendCommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const SendComment: FC<IProps> = (props) => {
  return (
    <SendCommendWrapper>
      <div className="imgBox">
        <img
          src="https://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=50y50"
          alt=""
        />
      </div>
      <div className="commentBox"></div>
    </SendCommendWrapper>
  )
}

export default memo(SendComment)
