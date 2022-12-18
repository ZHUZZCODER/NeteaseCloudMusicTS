import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserLoginWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const UserLogin: FC<IProps> = (props) => {
  return (
    <UserLoginWrapper className="sprite_02">
      <div className="loginHeader">
        <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      </div>
      <div className="loginBtn">
        <a className="login sprite_02" href="#">
          用户登录
        </a>
      </div>
    </UserLoginWrapper>
  )
}

export default memo(UserLogin)
