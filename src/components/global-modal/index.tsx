import Modal from 'antd/es/modal/Modal'
import type { ModalProps } from 'antd/es/modal/Modal'
import React, { memo, useMemo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps extends ModalProps {
  children?: ReactNode
}

const GlobalModal: FC<IProps> = (props) => {
  const containerIntance = useMemo<HTMLElement>(() => {
    return document.querySelector('#modal-root')!
  }, [])
  return (
    <Modal getContainer={containerIntance} {...props}>
      {props.children}
    </Modal>
  )
}

export default memo(GlobalModal)
