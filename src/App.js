import NavBar from './components/NavBar'
import Slogan from './components/Slogan'
import Content from './components/Content'
import './App.css'

function App() {
  return (
    <div className='font-sora overflow-y-auto overflow-x-hidden text-white h-screen px-4 py-8 bg-gradient-to-b from-purple-900 to-purple-700'>
      <NavBar />
      <Slogan />
      <Content />
    </div>
  )
}

export default App
