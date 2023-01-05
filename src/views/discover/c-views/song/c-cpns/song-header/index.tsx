import React, { memo, useCallback, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { SongHeaderWrapper } from './style'
import { Button } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import SongHeaderMenu from '../song-header-menu'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface IProps {
  children?: ReactNode
}

const SongHeader: FC<IProps> = (props) => {
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const { category } = useAppSelector(
    (state) => ({
      category: state.song.category
    }),
    shallowEqual
  )

  const selectCategory = useCallback(() => {
    setShowMenu(!showMenu)
  }, [showMenu])
  return (
    <SongHeaderWrapper>
      <div className="songLeft">
        <h2 className="songHeaderTitle">{category}</h2>
        <div className="selectclassify">
          <Button
            className="classify"
            icon={<DownOutlined />}
            onClick={selectCategory}
          >
            选择分类
          </Button>
          {showMenu && <SongHeaderMenu selectCategory={selectCategory} />}
        </div>
      </div>
      <div className="sprite_button2  songRight">热门</div>
    </SongHeaderWrapper>
  )
}

export default memo(SongHeader)
