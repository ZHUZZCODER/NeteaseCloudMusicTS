import type { PlainObject } from '@/bean/base'

enum DataType {
  Number = 'number',
  String = 'string',
  Boolean = 'boolean',
  Undefined = 'undefined',
  Null = 'null',
  Symbol = 'symbol',
  Object = 'object',
  Date = 'date',
  Map = 'map',
  Set = 'set',
  BigInt = 'bigint',
  Function = 'function',
  Promise = 'promise',
  File = 'file',
  Blob = 'blob',
  ErrorEvent = 'errorevent'
}
/**
 * 判断变量的数据类型
 * @param {unknown} val 变量值
 * @returns {string} 数据类型
 */
export function getType(val: unknown): string {
  return Object.prototype.toString
    .call(val)
    .replace(/\[object\s(\w+)\]/, '$1')
    .toLowerCase()
}

export function isObject<T = PlainObject>(val: unknown): val is T {
  return getType(val) === DataType.Object
}

export function isObjectKeys(val: object): boolean {
  return !!Object.keys(val).length
}

export function isNumber(val: unknown): val is number {
  return typeof val === DataType.Number
}
