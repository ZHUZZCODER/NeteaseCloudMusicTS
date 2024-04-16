import React, {
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useImperativeHandle,
  useState
} from 'react'
import type { FC, MutableRefObject, ReactNode, RefObject } from 'react'
import GlobalModal from '../global-modal'
import styles from './style.module.less'
import classNames from 'classnames'
import { Modal, message, type ModalProps } from 'antd'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import {
  Playlist,
  getPlaylistTracks,
  getUserPlaylist
} from '@/services/service'
import { getImageSize } from '@/utils/format'
import { changePlaylist } from '@/store/modules/global'
import { useModal } from '@/hooks'
import NewSonglistModal from '../new-songlist-modal'

interface IProps extends ModalProps {
  children?: ReactNode
  ref?: MutableRefObject<CollectModalRef> | null
  setOpen?: (value: boolean) => void
  closeModalFn?: () => void
  isMethodRender?: boolean
  uid?: number
  tracks?: number | string // 歌曲id
  cookie?: string
}

export interface CollectModalRef {
  open: boolean
  closeModalFn: () => void
  setOpen?: (value: boolean) => void
}

let isRender = false
const CollectModal = forwardRef<
  MutableRefObject<CollectModalRef>,
  // CollectModalRef,
  IProps
>((props, ref) => {
  const {
    open,
    setOpen,
    closeModalFn,
    isMethodRender = false,
    uid,
    tracks,
    cookie
  } = props
  const dispatch = useAppDispatch()
  const { playlist } = useAppSelector(
    (state) => ({
      playlist: state.globalStore.playlist
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!isRender) {
      handleRequestPlaylist()
      isRender = true
    }
  }, [])

  //请求歌单
  const handleRequestPlaylist = useCallback(async () => {
    if (uid && dispatch) {
      const { code, playlist } = await getUserPlaylist({ uid })
      if (code === 200) {
        dispatch(changePlaylist(playlist))
      }
    }
  }, [uid])

  //添加歌曲到歌单
  const handleAddSongInPlaylist = useCallback(
    async (playlistId: number) => {
      if (tracks) {
        const {
          status,
          body: { code = 0, trackIds = '[]', count = 0 }
        } = await getPlaylistTracks({
          pid: playlistId,
          op: 'add',
          tracks: tracks,
          cookie
        })
        if (status === 200 && code === 200) {
          const trackId = JSON.parse(trackIds)[0]
          const newPlaylist: Playlist[] = JSON.parse(JSON.stringify(playlist))
          const trackIdsObj = newPlaylist.find(({ id }) => id === playlistId)
          if (trackIdsObj) {
            trackIdsObj.trackCount = count
            dispatch(changePlaylist(newPlaylist))
            closeModalFn?.()
            message.success({
              content: '添加成功'
            })
          }
        } else {
          message.error('歌曲已存在')
        }
      }
    },
    [tracks, playlist]
  )

  const { renderModal, hideModal } = useModal()

  const handleNewSonglist = useCallback(() => {
    closeModalFn?.()
    renderModal({
      modalRender: () => (
        <NewSonglistModal
          open={true}
          closeModalFn={hideModal}
          tracks={tracks}
        />
      )
    })
  }, [])

  useImperativeHandle<any, any>(ref, () => ({
    open,
    closeModalFn,
    setOpen
  }))

  return (
    <GlobalModal
      title="添加到歌单"
      open={open}
      closeModalFn={closeModalFn}
      modalWidth="480px"
      isMethodRender={isMethodRender}
    >
      <section className={styles['collect-content']}>
        <header className={styles['header-new']} onClick={handleNewSonglist}>
          <i className={classNames('sprite_icon2', styles['new-icon'])}></i>
          新歌单
        </header>
        <ul className={styles['songlist']}>
          {playlist?.length &&
            playlist.map(({ coverImgUrl, name, trackCount, id }) => {
              return (
                <li
                  className={styles['songlistItem']}
                  key={id}
                  onClick={() => handleAddSongInPlaylist(id)}
                >
                  <a className={styles['collectLink']} href={undefined}>
                    <img
                      className={styles['collectimg']}
                      src={getImageSize(coverImgUrl, 40)}
                      alt=""
                    />
                  </a>
                  <div className={styles['collectTx']}>
                    <p className={styles['collect-name']}>{name}</p>
                    <p>{trackCount}首</p>
                  </div>
                </li>
              )
            })}
        </ul>
      </section>
    </GlobalModal>
  )
})

CollectModal.displayName = 'CollectModal'

export default memo(CollectModal)
