import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { IUSERHOMESTATE } from './type'
import type { IThunkState } from '@/store'
import { getUserPlaylist } from '../service/user-home'
import type { IUSERHOMEPLAYLIST } from './type'

//请求user-home歌手信息数据
export const fetchUserHomePlaylistAction = createAsyncThunk<
  void,
  number,
  IThunkState
>('userhomePlaylist', async (uid: number, { dispatch }) => {
  const { code, playlist = [] } = await getUserPlaylist(uid)
  if (code === 200) {
    dispatch(changeUserhomePlaylistAction(playlist))
  }
})

const initialState: IUSERHOMESTATE = {
  userhomePlaylist: []
}

const userHomeSlice = createSlice({
  name: 'userhome',
  initialState,
  reducers: {
    changeUserhomePlaylistAction(
      state,
      { payload }: PayloadAction<IUSERHOMEPLAYLIST[]>
    ) {
      state.userhomePlaylist = payload
    }
  }
})

export const { changeUserhomePlaylistAction } = userHomeSlice.actions
export default userHomeSlice.reducer
