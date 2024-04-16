import React, {
  ElementRef,
  Suspense,
  useCallback,
  useRef,
  useState
} from 'react'
import { useRoutes } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './store'
import routes from './router'
import { shallowEqual } from 'react-redux'
import { changeMessageAction } from './store/modules/counter'
import AppHeader from './components/app-header'
import AppPlayerBar from './views/player/app-player-bar'
import DiscoverFooter from './components/discover-footer'
import LoginModal from './components/login-modal'
import CollectModal from './components/collect-modal'
import type { CollectModalRef } from './components/collect-modal'

function App() {
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    shallowEqual
  )

  const dispatch = useAppDispatch()
  function changeMessage() {
    dispatch(changeMessageAction('Hello World'))
  }

  const [showModal, setShowModal] = useState(false)
  const collectModalInstance = useRef<ElementRef<typeof CollectModal>>(null)

  const changeShowModal = useCallback((status: boolean) => {
    setShowModal(status)
  }, [])

  return (
    <div className="App">
      <AppHeader changeLoginModal={changeShowModal} />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      <DiscoverFooter />

      <AppPlayerBar />
      <LoginModal showModal={showModal} changeLoginModal={changeShowModal} />
      {/* <CollectModal ref={collectModalInstance} /> */}
    </div>
  )
}

export default App
