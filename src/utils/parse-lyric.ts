export interface Lyric {
  time: number
  text: string
}

//7.4歌词处理函数
// [02:11.842]这世界有那么多人 /\[(\d{2}:(\d{2}).(\d{2,3}))
//定义正则
const timeRegExp = /\[(\d{2}):(\d{2}).(\d{2,3})\]/
export function parseLyric(lyricString: string): Lyric[] {
  //拿到歌词
  const lyricList: string[] = lyricString.split('\n')

  const lyric = []
  for (const lyricItem of lyricList) {
    //匹配
    const results = timeRegExp.exec(lyricItem)
    if (!results) continue
    //将时间进行转换
    const time1 = parseInt(results[1]) * 60 * 1000
    const time2 = parseInt(results[2]) * 1000
    //秒可能两位可能三位，两位转成三位
    const time3 =
      results[3].length === 2 ? parseInt(results[3]) * 10 : parseInt(results[3])
    //总时间毫秒
    const time = time1 + time2 + time3
    //获取歌词
    const text = lyricItem.replace(timeRegExp, '')
    lyric.push({ time, text })
  }
  return lyric
}
