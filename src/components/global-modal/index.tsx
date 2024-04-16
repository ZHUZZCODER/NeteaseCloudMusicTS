import Modal from 'antd/es/modal/Modal'
import type { ModalProps } from 'antd/es/modal/Modal'
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { extend } from 'underscore'
import { CloseOutlined } from '@ant-design/icons'
import styles from './style.module.scss'

interface IProps extends ModalProps {
  children?: ReactNode
  title: string
  closeModalFn?: () => void
  modalWidth?: string
  isMethodRender?: boolean
}

const GlobalModal: FC<IProps> = (props) => {
  const {
    title,
    closeModalFn,
    modalWidth = '538px',
    isMethodRender = false
  } = props

  const [mergeProps, setMergeProps] = useState<ModalProps>()
  useEffect(() => {
    if (props) {
      const mgProps = extend(defaultProps, props)
      setMergeProps(mgProps)
    }
  }, [props])

  const containerIntance = useMemo<HTMLElement>(() => {
    return document.querySelector('#modal-root')!
  }, [])

  const defaultProps = {
    centered: true,
    maskStyle: { backgroundColor: 'transparent' }
  }

  const modalContent = useCallback(() => {
    return (
      <section
        className={styles['global-modal-container']}
        style={{ width: modalWidth }}
      >
        <header className={styles['global-modal-header']}>
          <h2>{title}</h2>
          <CloseOutlined
            className={styles['close-icon']}
            onClick={() => closeModalFn?.()}
          />
        </header>
        <section>{props.children}</section>
      </section>
    )
  }, [props.children])

  return (
    <>
      {!isMethodRender ? (
        <Modal
          getContainer={containerIntance}
          {...mergeProps}
          modalRender={modalContent}
        ></Modal>
      ) : (
        modalContent()
      )}
    </>
  )
}

export default memo(GlobalModal)
