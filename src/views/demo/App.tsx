import React, { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '@/store'
import routes from '@/router'
import { shallowEqual } from 'react-redux'
import { changeMessageAction } from '@/store/modules/counter'

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
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <div>
        <div>
          <span>
            {count}
            {message}
          </span>
          <button onClick={changeMessage}>修改message</button>
        </div>
      </div>
      <Suspense fallback="loading">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
    </div>
  )
}

export default App
