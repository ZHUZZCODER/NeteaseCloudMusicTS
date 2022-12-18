import { BASE_URL, TIME_OUT } from './config'
import ZHURequest from './request'

const zhuRequest = new ZHURequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      return config
    }
  }
})

export default zhuRequest
