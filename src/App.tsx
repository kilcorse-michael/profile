import { useState } from 'react'
import profileImg from './assets/profile.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex flex-col justify-start bg-orange-100 items-center top-0 h-screen w-screen'>
      <img className='rounded-full mt-3' src={profileImg}/>
      <h1>Michael Kilcorse</h1>
      <ul className='flex flex-row'>
        <li className='m-1'>Portfolio</li>
        <li className='m-1'>About</li>
        <li className='m-1'>Contact</li>
      </ul>
    </div>
    </>
  )
}

export default App
