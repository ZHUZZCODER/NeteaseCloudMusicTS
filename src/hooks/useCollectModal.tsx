import React from 'react'
import { useAppSelector } from '@/store'
import useModal from './useModal'
import { shallowEqual } from 'react-redux'
import { useCallback, useEffect, useMemo } from 'react'
import CollectModal from '@/components/collect-modal'

export default function useCollectModal() {
  const { profile, cookie } = useAppSelector(
    (state) => ({
      profile: state.globalStore.userInfo?.profile,
      cookie: state.globalStore.cookie
    }),
    shallowEqual
  )

  const uid = useMemo(() => profile?.userId, [profile?.userId])
  const {
    renderModal: createModal,
    hideModal,
    destoryModal,
    updateModal
  } = useModal()

  const closeModalFn = () => {
    if (uid) hideModal()
  }

  const renderModal = useCallback(
    (tracks: number | string) => {
      // antd方式
      if (uid && cookie) {
        createModal({
          modalRender: () => (
            <CollectModal
              closeModalFn={closeModalFn}
              isMethodRender
              uid={uid}
              tracks={tracks}
              cookie={cookie}
            />
          )
        })
      }
      // render函数方式
      // const root = ReactDOM.createRoot(document.querySelector('#modal-root')!)
      // root.render(<CollectModal closeModalFn={closeModalFn} open={true} />)
    },
    [cookie]
  )

  return {
    renderModal,
    closeModalFn
  }
}
