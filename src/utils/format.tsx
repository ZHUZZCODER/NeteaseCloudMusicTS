import React from 'react'
import moment from 'moment'

export function format(count: number): string | number {
  if (count > 100000) {
    return Math.floor(count / 10000) + '万'
  } else {
    return count
  }
}

export function getImageSize(
  url: string,
  width: number,
  height: number = width
): string {
  return `${url}?param=${width}y${height}`
}

export function formatTime(ms: number): string {
  const totalSecond = ms / 1000
  const minute = Math.floor(totalSecond / 60)
  const second = Math.floor(totalSecond) % 60
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}

//获取毛玻璃图片
export function getImageBlur(url: string): string {
  if (!url || url.length === 0) return ''
  const imgArr = url.split('==')
  return `https://music.163.com/api/img/blur/${imgArr[1]}`
}

//时间格式化
export function momentFormat(time: number, formatType = 'YYYY-MM-DD'): any {
  return moment(time).format(formatType)
}

//渲染html
export function showhtml(htmlString: string) {
  const html = { __html: htmlString }
  // return <div dangerouslySetInnerHTML={html}></div>
  return html
}
