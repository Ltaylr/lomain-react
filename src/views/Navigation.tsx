
import { NavLink } from 'react-router'

import '../App.css'

const Navigation = () => {
  return (
    <>
      <nav className="flex flex-col justify-evenly gap-10  pl-2">
        <div className="md:flex text-center"><img className="w-[50%] md:w-[10%] md:mr-5 md:ml-5 md:mb-0 mb-3" src='/limeD20.svg'/><NavLink className="mr-3 md:mr-10 border p-2 block hover:text-shadow hover:text-shadow-pink-500 hover:text-shadow-lg font-extrabold text-green-400 md:text-2xl text-md" to="/">H o m e</NavLink></div>
        <div className="md:flex text-center"><img className="w-[50%] md:w-[10%] md:mr-5 md:ml-5 md:mb-0 mb-3" src='/limeD20.svg'/><NavLink className="mr-3 md:mr-10 border p-2 block hover:text-shadow hover:text-shadow-pink-500 hover:text-shadow-lg font-extrabold text-green-400 md:text-2xl text-md" to="/About">A b o u t</NavLink></div>
        <div className="md:flex text-center"><img className="w-[50%] md:w-[10%] md:mr-5 md:ml-5 md:mb-0 mb-3" src='/limeD20.svg'/><NavLink className="mr-3 md:mr-10 border p-2 block hover:text-shadow hover:text-shadow-pink-500 hover:text-shadow-lg font-extrabold text-green-400 md:text-2xl text-md" to="/Characters">C h a r a c t e r s</NavLink></div>
        <div className="md:flex text-center"><img className="w-[50%] md:w-[10%] md:mr-5 md:ml-5 md:mb-0 mb-3" src='/limeD20.svg'/><NavLink className="mr-3 md:mr-10 border p-2 block hover:text-shadow hover:text-shadow-pink-500 hover:text-shadow-lg font-extrabold text-green-400 md:text-2xl text-md" to="/Campaigns">C a m p a i g n s</NavLink></div>
      </nav>
      
    </>
  )
}

export default Navigation;