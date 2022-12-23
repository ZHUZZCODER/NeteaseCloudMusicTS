import { useEffect, useState } from 'react'
import { throttle } from 'underscore'

export default function useMousePosition() {
  const [clientX, setClientX] = useState(0)
  const [clientY, setClientY] = useState(0)
  useEffect(() => {
    const handleScroll = throttle((e: Event) => {
      setClientX(window.scrollX)
      setClientY(window.scrollY)
    }, 100)
    window.addEventListener('mousemove', handleScroll)
    return () => {
      window.removeEventListener('mousemove', handleScroll)
    }
  }, [])

  return { clientX, clientY }
}
