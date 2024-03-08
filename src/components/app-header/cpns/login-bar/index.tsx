import React, { memo, useCallback } from 'react'
import type { FC, ReactNode } from 'react'
import { LoginBarWrapper } from './style'
import { Dropdown } from 'antd'
import type { MenuProps } from 'antd'
import { getImageSize } from '@/utils/format'
import { LogoutOutlined } from '@ant-design/icons'
import { fetchLogout } from '@/store/modules/global'
import { useAppDispatch } from '@/store'

interface IProps {
  children?: ReactNode
  imgUrl: string
}

const LoginBar: FC<IProps> = (props) => {
  const { imgUrl } = props
  const dispatch = useAppDispatch()

  //退出登录
  const handleLoginOut = useCallback(async () => {
    dispatch(fetchLogout())
  }, [dispatch])

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a
          className="menuitem"
          rel="noopener noreferrer"
          href={undefined}
          onClick={handleLoginOut}
        >
          <LogoutOutlined />
          <span className="menutext">退出</span>
        </a>
      )
    }
  ]
  return (
    <LoginBarWrapper>
      <Dropdown
        getPopupContainer={() => document.querySelector('.logo-bar-box')!}
        className="dropdown-logo"
        overlayClassName="dropdown-logo"
        menu={{ items }}
        placement="bottom"
        arrow
      >
        <img className="img-logo" src={getImageSize(imgUrl, 30)} alt="" />
      </Dropdown>
    </LoginBarWrapper>
  )
}

export default memo(LoginBar)
