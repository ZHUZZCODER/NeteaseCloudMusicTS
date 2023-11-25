import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { UserInfoWrapper } from './style'
import { getImageSize, momentFormat } from '@/utils/format'

interface IProps {
  children?: ReactNode
  useInfo: Record<string, unknown>
  createTime: number
}

interface IAVATARDETAIL {
  identityIconUrl?: string
}

const UserInfo: FC<IProps> = (props) => {
  const {
    useInfo: {
      avatarUrl = '',
      nickname = '',
      avatarDetail = { identityIconUrl: '' }
    },
    createTime
  } = props
  return (
    <UserInfoWrapper>
      <a className="info-img" href={undefined}>
        <img src={getImageSize(avatarUrl as string, 40)} alt="" />
      </a>

      <span className="info-name">
        <a className="info-name-text" href={undefined}>
          {nickname as string}
        </a>
        {(avatarDetail as IAVATARDETAIL)?.identityIconUrl && (
          <img
            className="info-name-icon"
            src={(avatarDetail as IAVATARDETAIL).identityIconUrl}
            alt=""
          />
        )}
      </span>
      <span className="info-time">{momentFormat(createTime)} 创建</span>
    </UserInfoWrapper>
  )
}

export default memo(UserInfo)
