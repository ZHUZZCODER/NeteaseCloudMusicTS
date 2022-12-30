class LocalCache {
  setCache(key: string, value: any, isLocal = true) {
    if (isLocal) {
      window.localStorage.setItem(key, JSON.stringify(value))
    } else {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string, isLocal = true) {
    let value
    if (isLocal) {
      value = window.localStorage.getItem(key)
    } else {
      value = window.sessionStorage.getItem(key)
    }
    console.log(typeof value)
    if (value !== 'undefined' && value !== null) {
      return JSON.parse(value)
    }
  }

  removeCache(key: string, isLocal = true) {
    if (isLocal) {
      window.localStorage.removeItem(key)
    } else {
      window.sessionStorage.removeItem(key)
    }
  }

  clearCache(isLocal = true) {
    if (isLocal) {
      window.localStorage.clear()
    } else {
      window.sessionStorage.clear()
    }
  }
}

export default new LocalCache()
