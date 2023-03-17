import ZHURequest from './request'
import { PLAY_BASE_URL, TIME_OUT } from './config'

const zhuRequestPlay = new ZHURequest({
  baseURL: PLAY_BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    }
  }
})

export default zhuRequestPlay
