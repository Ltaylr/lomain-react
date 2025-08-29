import { useState } from 'react'

//import '../App.css'
//import '../index.css'

function Home() {
  const [count, setCount] = useState(0);

  return (
    <>
   
      <div>
        <h1 className=" 
        font-extrabold text-cyan-400 
        text-shadow text-shadow-fuchsia-500 
        text-shadow-lg min-w-30 text-5xl">
          <div><span className="pr-4">L o</span>
          <span className="pl-5">M a i n </span></div>
          <div className="pt-5 pb-5"><span className="pt-5">D n D!</span></div>
        </h1>
        <div className="card">
          
        </div>
      </div>
      
      
    </>
  )
}

export default Home;