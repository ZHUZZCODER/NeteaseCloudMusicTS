import Request from './request'
import { RESERVE_BASE_URL, TIME_OUT } from './config'

const reservePlayRequest = new Request({
  baseURL: RESERVE_BASE_URL,
  timeout: TIME_OUT
})

export default reservePlayRequest
