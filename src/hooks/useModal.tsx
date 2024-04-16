import React from 'react'
import store from '@/store'
import { Modal } from 'antd'
import type { ModalFuncProps } from 'antd'
import { ReactNode, useEffect } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import theme from '@/assets/theme'

type ConfigUpdate =
  | ModalFuncProps
  | ((prevConfig: ModalFuncProps) => ModalFuncProps)

interface ModalType {
  destroy: () => void
  update: (configUpdate: ConfigUpdate) => void
}

interface ModalResult {
  renderModal: (modalInitProps: ModalFuncProps) => void
  hideModal: (open?: boolean) => void
  updateModal: (modalProps: ConfigUpdate) => void
  destoryModal: () => void
}
let modal: ModalType
export default function useModal(): ModalResult {
  useEffect(() => {
    return () => {
      destoryModal()
    }
  }, [])

  const renderModal = (modalInitProps: ModalFuncProps) => {
    const modalRender = (node: ReactNode): ReactNode => {
      // @ts-ignore
      return (
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            {modalInitProps.modalRender?.('')}
          </ThemeProvider>
        </Provider>
      )
    }

    const defaultModalProps: ModalFuncProps = {
      getContainer: () => document.querySelector('#modal-root')!,
      maskStyle: { backgroundColor: 'transparent' },
      ...modalInitProps,
      modalRender
    }
    modal = Modal.info(defaultModalProps)
  }

  const hideModal = (open?: boolean) => {
    modal.update({
      open: !!open
    })
  }

  const updateModal = (modalProps: ConfigUpdate) => {
    modal.update(modalProps)
  }

  const destoryModal = () => {
    if (modal) modal.destroy()
  }

  return {
    renderModal,
    hideModal,
    updateModal,
    destoryModal
  }
}
