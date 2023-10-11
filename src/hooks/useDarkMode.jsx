import { useEffect, useState } from 'react'

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => localStorage.theme === 'dark')
  const toogleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  useEffect(() => {
    const html = window.document.documentElement
    const prevTheme = isDarkMode ? 'light' : 'dark'
    html.classList.remove(prevTheme)
    const nextTheme = isDarkMode ? 'dark' : 'light'
    html.classList.add(nextTheme)
    localStorage.setItem('theme', nextTheme)
  }, [isDarkMode])

  return [isDarkMode, toogleDarkMode]
}

export default useDarkMode
