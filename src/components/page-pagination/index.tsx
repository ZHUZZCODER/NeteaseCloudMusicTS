import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import type { PaginationProps } from 'antd'
import { Pagination } from 'antd'
import { PaginationWrapper } from './style'

interface IProps {
  children?: ReactNode
  currentPage: number
  onPageChange: (page: number) => void
  total: number
  isFirst: boolean
  isNext: boolean
}

const PagePagination: FC<IProps> = (props) => {
  const { currentPage, onPageChange, total, isFirst, isNext } = props
  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement
  ) => {
    if (type === 'prev') {
      return <a className="sprite_button2 pagebtn prev">上一页</a>
    }
    if (type === 'next') {
      return <a className="sprite_button2 pagebtn next">下一页</a>
    }
    return originalElement
  }
  return (
    <PaginationWrapper isFirst={isFirst} isNext={isNext}>
      <Pagination
        className="paginationBox"
        current={currentPage}
        total={total}
        itemRender={itemRender}
        onChange={onPageChange}
        showSizeChanger={false}
      />
    </PaginationWrapper>
  )
}

export default memo(PagePagination)
