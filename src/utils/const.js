const DARK_MODE_KEY = 'dark_mode_setting'

export const DARK_MODE = window.localStorage.getItem(DARK_MODE_KEY) === 'true' || (window.localStorage.getItem(DARK_MODE_KEY) !== 'false' && window.matchMedia('(prefers-color-scheme: dark)').matches)
export const setDarkMode = (darkMode) => {
  window.localStorage.setItem(DARK_MODE_KEY, darkMode)
  window.location.reload()
}

export const MOBILE_WIDTH = '40rem'

export const LANGUAGES = [
  'Ruby on Rails',
  'Python',
  'SQL',
  'PHP',
  'C++',
  'Java'
]

export const SKILLSET = []

export const TV_MODE = (process.env.REACT_APP_TV_MODE + (window.DO_NOT_PARSE_ME_WEBPACK || '')) === 'true'

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const sortKeyValueEntries = (obj) => {
  return Object.entries(obj).sort(([, a], [, b]) => b - a).reduce((r, [k, v]) => ({ ...r, [k]: v }), {})
}
