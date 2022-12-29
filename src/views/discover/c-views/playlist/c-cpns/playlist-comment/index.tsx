import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayListCommentWrapper } from './style'
import NavHeaderV3 from '@/components/nav-header-v3'
import SendComment from './c-cpns/send-comment'

interface IProps {
  children?: ReactNode
}

const PlayListComment: FC<IProps> = (props) => {
  return (
    <PlayListCommentWrapper>
      <NavHeaderV3 navTitle="评论" titleChildren="共2549评论" playCount={-1} />
      <div className="commentContent">
        <SendComment />
      </div>
    </PlayListCommentWrapper>
  )
}

export default memo(PlayListComment)
