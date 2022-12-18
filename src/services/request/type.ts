import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface CustomInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (err: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (err: any) => any
}

export interface CustomAxiosRequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: CustomInterceptors<T>
}
