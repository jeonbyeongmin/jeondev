import { atom } from 'recoil'

const getInitialColorMode = () => {
  const persistedColorPreference = window.localStorage.getItem('color-mode')

  if (persistedColorPreference) {
    return persistedColorPreference
  }

  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')
  if (systemPreference.matches) {
    return 'dark'
  }

  return 'light'
}

const initialColorMode = atom({
  key: 'initialColorMode',
  default: getInitialColorMode(),
})

export { initialColorMode }
