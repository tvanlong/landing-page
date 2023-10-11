import NavBar from './components/NavBar'
import Slogan from './components/Slogan'
import Content from './components/Content'
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      if (windowSize.width < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [windowSize.width])

  return (
    <div className='font-sora overflow-y-auto overflow-x-hidden dark:text-white text-black h-screen px-4 py-8 bg-gradient-to-b from-white to-pink-500 dark:from-purple-900 dark:to-purple-700 md:px-20'>
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  )
}

export default App
