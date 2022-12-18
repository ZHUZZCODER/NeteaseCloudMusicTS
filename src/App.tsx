import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from './store'
import routes from './router'
import { shallowEqual } from 'react-redux'
import { changeMessageAction } from './store/modules/counter'
import AppHeader from './components/app-header'
import AppPlayerBar from './views/player/app-player-bar'

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

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>

      <AppPlayerBar />
    </div>
  )
}

export default App
