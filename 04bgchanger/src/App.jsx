import { useState } from 'react'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
      <div className ="h-screen w-screen duration-300" 
      style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex items-center flex-wrap justify-center bottom-10  inset-x-0 px-4">
        <div className='flex flex-wrap justify-center gap-4 shadow-lg bg-white/50 
        rounded-lg p-4 backdrop-blur-sm px-3 py-2'>
          <button className='outline-none border-none bg-transparent text-black rounded-md shadow-lg px-2 py-1'
          onClick={() => setColor("red")}
          style={{ backgroundColor : "white" }}>Red</button>
          <button className='outline-none border-none bg-transparent text-black rounded-md shadow-lg px-2 py-1'
          onClick={() => setColor("green")}
          style={{ backgroundColor : "white" }}>Green</button>
          <button className='outline-none border-none bg-transparent text-black rounded-md shadow-lg px-2 py-1'
          onClick={() => setColor("yellow")}
          style={{ backgroundColor : "white" }}>Yellow</button>
          <button className='outline-none border-none bg-transparent text-black rounded-md shadow-lg px-2 py-1'
          onClick={() => setColor("magenta")}
          style={{ backgroundColor : "white" }}>Magenta</button>
          <button className='outline-none border-none bg-transparent text-black rounded-md shadow-lg px-2 py-1'
          onClick={() => setColor("cyan")}
          style={{ backgroundColor : "white" }}>Cyan</button>
          <button className='outline-none border-none bg-transparent text-black rounded-md shadow-lg px-2 py-1'
          onClick={() => setColor("brown")}
          style={{ backgroundColor : "white" }}>Brown</button>
          <button className='outline-none border-none bg-transparent text-black rounded-md shadow-lg px-2 py-1'
          onClick={() => setColor("orange")}
          style={{ backgroundColor : "white" }}>Orange</button>

          </div>
      </div>
    </>
  )
}

export default App
