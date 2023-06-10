import zhuRequest from '..'

//获取搜索建议
export const searchSuggest = (keywords: string) => {
  return zhuRequest.get({
    url: '/search/suggest',
    params: {
      keywords
    }
  })
}

//获取输入框搜索
export const search = (keywords: string) => {
  return zhuRequest.get({
    url: 'search',
    params: {
      keywords
    }
  })
}
