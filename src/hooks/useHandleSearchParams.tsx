import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

//将search参数转为对象形式
export default function useHandleSearchParams() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [newSearchParams, setNewSearchParams] = useState<any>(undefined)
  useEffect(() => {
    setNewSearchParams(Object.fromEntries(searchParams))
  }, [searchParams])
  return [newSearchParams, setSearchParams]
}
