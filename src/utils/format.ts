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
  return `${url}?params=${width}y${height}`
}

export function formatTime(ms: number): string {
  const totalSecond = ms / 1000
  const minute = Math.floor(totalSecond / 60)
  const second = Math.floor(totalSecond) % 60
  const formatMinute = String(minute).padStart(2, '0')
  const formatSecond = String(second).padStart(2, '0')
  return `${formatMinute}:${formatSecond}`
}
