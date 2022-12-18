import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'

const Discover = lazy(() => import('@/views/discover'))
const Download = lazy(() => import('@/views/download'))
const Focus = lazy(() => import('@/views/focus'))
const Mine = lazy(() => import('@/views/mine'))

const Album = lazy(() => import('@/views/discover/c-views/album'))
const Radio = lazy(() => import('@/views/discover/c-views/radio'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Singer = lazy(() => import('@/views/discover/c-views/singer'))
const Song = lazy(() => import('@/views/discover/c-views/song'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to={'/discover/recommend'} />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/song',
        element: <Song />
      },
      {
        path: '/discover/singer',
        element: <Singer />
      },
      {
        path: '/discover/radio',
        element: <Radio />
      },
      {
        path: '/discover/album',
        element: <Album />
      }
    ]
  },
  {
    path: './download',
    element: <Download />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  }
]

export default routes
