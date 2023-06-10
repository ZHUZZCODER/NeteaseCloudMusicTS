/**
 * 数据类型判断
 */
export function getType(value: unknown) {
  return Object.prototype.toString
    .call(value)
    .replace(/\[object\s(\w+)\]/, '$1')
    .toLocaleLowerCase()
}

export function isArray(value: unknown): boolean {
  return getType(value) === 'array'
}

export function isString(value: unknown): boolean {
  return getType(value) === 'string'
}
