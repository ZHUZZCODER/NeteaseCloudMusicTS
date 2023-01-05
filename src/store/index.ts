import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import counterReducer from './modules/counter'
import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import playerReducer from '@/views/player/store/player'
import playlistReducer from '@/views/discover/c-views/playlist/store/playlist'
import albumChildrenReducer from '@/views/discover/c-views/album-children/store/album-children'
import rankingReducer from '@/views/discover/c-views/ranking/store/ranking'
import songReducer from '@/views/discover/c-views/song/store/song'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    recommend: recommendReducer,
    player: playerReducer,
    playlist: playlistReducer,
    albumChildren: albumChildrenReducer,
    ranking: rankingReducer,
    song: songReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store
