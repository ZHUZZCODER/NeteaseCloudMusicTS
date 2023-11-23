/**
 * 数据类型判断
 */
export function getType(value: unknown) {
  return Object.prototype.toString
    .call(value)
    .replace(/\[object\s(\w+)\]/, '$1')
    .toLocaleLowerCase()
}

export function isArray<T = unknown>(value: unknown): value is T[] {
  return getType(value) === 'array'
}

export function isString(value: unknown): boolean {
  return getType(value) === 'string'
}

export function hasOwnPropertypeKey(obj: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key)
}
