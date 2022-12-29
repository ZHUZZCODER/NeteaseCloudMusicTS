import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DonwloadAppWrapper } from './style'
import { Button } from 'antd'

interface IProps {
  children?: ReactNode
}

const DownloadApp: FC<IProps> = (props) => {
  return (
    <DonwloadAppWrapper>
      <div className="hint">查看更多内容请下载客户端</div>
      <Button className="downloadBtn">立即下载</Button>
    </DonwloadAppWrapper>
  )
}

export default memo(DownloadApp)
