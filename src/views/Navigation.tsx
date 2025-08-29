
import { NavLink } from 'react-router'

import '../App.css'

const Navigation = () => {
  return (
    <>
      <nav className="flex flex-col justify-evenly gap-10  pl-2">
        <div><NavLink className="mr-3 md:mr-10 border p-2 block hover:text-shadow hover:text-shadow-pink-500 hover:text-shadow-lg font-extrabold text-green-400 hover:text-3xl md:text-2xl text-lg" to="/">H o m e</NavLink></div>
        <div><NavLink className="mr-3 md:mr-10 border p-2 block hover:text-shadow hover:text-shadow-pink-500 hover:text-shadow-lg font-extrabold text-green-400 hover:text-3xl md:text-2xl text-lg" to="/About">A b o u t</NavLink></div>
        <div><NavLink className="mr-3 md:mr-10 border p-2 block hover:text-shadow hover:text-shadow-pink-500 hover:text-shadow-lg font-extrabold text-green-400 hover:text-3xl md:text-2xl text-lg" to="/Characters">C h a r a c t e r s</NavLink></div>
        <div><NavLink className="mr-3 md:mr-10 border p-2 block hover:text-shadow hover:text-shadow-pink-500 hover:text-shadow-lg font-extrabold text-green-400 hover:text-3xl md:text-2xl text-lg" to="/Campaigns">C a m p a i g n s</NavLink></div>
      </nav>
      
    </>
  )
}

export default Navigation;