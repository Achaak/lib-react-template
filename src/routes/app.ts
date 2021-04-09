const appPath = ""

export const APP_ROUTES_LIST = {
  "HOME": `${appPath}/`,
}

export const APP_DEFAULT_ROUTE = (isUrl?: boolean): string => {
  let _APP_URL = ""
  
  if(isUrl) {
    if(typeof window !== 'undefined' && window.location.hostname.includes("dev.")) {
      _APP_URL = APP_URL_DEV
    } else if(typeof window !== 'undefined' && window.location.hostname.includes("staging.")) {
      _APP_URL = APP_URL_STAGING
    } else {
      _APP_URL = APP_URL
    }
  }

  return `${_APP_URL}${!APP_ROUTES_LIST["HOME"] ? "/" : APP_ROUTES_LIST["HOME"]}`
}

export const APP_URL = "https://example.com"
export const APP_URL_DEV = "https://dev.example.com"
export const APP_URL_STAGING = "https://staging.example.com"

export const APP_ROUTES = (routeId: keyof typeof APP_ROUTES_LIST, isUrl?: boolean): string => {
  let _APP_URL = ""
  
  if(isUrl) {
    if(typeof window !== 'undefined' && window.location.hostname.includes("dev.")) {
      _APP_URL = APP_URL_DEV
    } else if(typeof window !== 'undefined' && window.location.hostname.includes("staging.")) {
      _APP_URL = APP_URL_STAGING
    } else {
      _APP_URL = APP_URL
    }
  }

  return `${_APP_URL}${!APP_ROUTES_LIST[routeId] ? "/" : APP_ROUTES_LIST[routeId]}`
}