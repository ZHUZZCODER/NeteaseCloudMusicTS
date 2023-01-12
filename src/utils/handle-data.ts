interface IALPHABETS {
  name: string
  charCode: number
}

// 获取歌手字母类别
export function generateSingerAlpha(): IALPHABETS[] {
  const alphabets = [{ name: '热门', charCode: -1 }]
  const start = 'A'.charCodeAt(0)
  const last = 'Z'.charCodeAt(0)
  for (let i = start; i <= last; ++i) {
    alphabets.push({ name: String.fromCharCode(i), charCode: i })
  }

  alphabets.push({
    name: '其他',
    charCode: 0
  })

  return alphabets
}

export const singerAlphas = generateSingerAlpha()
