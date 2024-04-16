import React, { memo, useCallback, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Button, message, type ModalProps } from 'antd'
import { NewSonglistWrapper } from './style'
import GlobalModal from '../global-modal'
import { getPlaylistCreate, getPlaylistTracks } from '@/services/service'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { changePlaylist } from '@/store/modules/global'

interface IProps extends ModalProps {
  children?: ReactNode
  isMethodRender?: boolean
  closeModalFn?: () => void
  tracks?: number | string // 歌曲id
}

const NewSonglistModal: FC<IProps> = (props) => {
  const { isMethodRender = true, closeModalFn, tracks = 0 } = props
  const dispatch = useAppDispatch()
  const { cookie, playlist } = useAppSelector(
    (state) => ({
      cookie: state.globalStore.cookie,
      playlist: state.globalStore.playlist
    }),
    shallowEqual
  )
  const [songlistName, setSonglistName] = useState('')

  const handleCreate = useCallback(async () => {
    const {
      code,
      playlist: playlistObj,
      id
    } = await getPlaylistCreate({
      name: songlistName,
      cookie
    })
    if (code === 200) {
      const newplaylist = JSON.parse(JSON.stringify(playlist))
      const {
        status,
        body: { code: resCode = 0, trackIds = '[]', count = 0 }
      } = await getPlaylistTracks({
        pid: id,
        op: 'add',
        tracks: tracks,
        cookie
      })
      if (status === 200 && resCode === 200) {
        playlistObj.trackCount = count
        newplaylist.splice(1, 0, playlistObj)
        dispatch(changePlaylist(newplaylist))
        closeModalFn?.()
        message.success({
          content: '新增成功'
        })
      }
    }
  }, [songlistName, playlist, tracks])

  const handleCancel = useCallback(() => {
    closeModalFn?.()
  }, [])

  return (
    <GlobalModal
      title="新建歌单"
      modalWidth="480px"
      closeModalFn={closeModalFn}
      isMethodRender={isMethodRender}
    >
      <NewSonglistWrapper>
        <p className="inputContainer">
          歌单名：
          <input
            className="inputBox"
            defaultValue={songlistName}
            onChange={(e) => setSonglistName(e.target.value)}
          />
        </p>
        <p className="newSonglistTx">可通过“收藏”将音乐添加到新歌单中</p>
        <div className="songBtn">
          <Button className="btn" type="primary" onClick={handleCreate}>
            新建
          </Button>
          <Button className="btn cancelBtn" onClick={handleCancel}>
            取消
          </Button>
        </div>
      </NewSonglistWrapper>
    </GlobalModal>
  )
}

export default NewSonglistModal
