import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { MineWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Mine: FC<IProps> = (props) => {
  return (
    <MineWrapper>
      <div className="wrap-v2 mineContent">
        <div className="loginBox">
          <a
            className="loginBtn"
            href={'#'}
            target={'_self'}
            onClick={(e) => {
              e.preventDefault()
            }}
          >
            立即登录
          </a>
        </div>
      </div>
    </MineWrapper>
  )
}

export default memo(Mine)
