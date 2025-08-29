import Navigation from "./Navigation";
import { Outlet } from "react-router";

const Layout = () =>{
    return(
        <>
            <div className="flex flex-col pt-5 md:pt-10 h-screen w-[17%] md:w-[15%] xl:w-[15%] bg-bgray-700">
                <div className="flex flex-wrap justify-center"> 
                    <img className="mt-2 mb-5 md:mb-10 md:w-[60%]" src="/d20Large.png"/>
                </div>
                <Navigation />
            </div>
            <main className="md:pl-10 pt-10 md:pt-20 pl-6 xl:pl-20 h-screen w-[100%]">
                <div aria-hidden="true" className="absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                    <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="relative left-[calc(25%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#d78bab] to-[#5e56ce] opacity-40 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
                </div>
                <Outlet />
                <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-50rem)]">
                    <div style={{clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}} className="relative left-[calc(25%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#c0658b] to-[#9b97d7] opacity-60 sm:left-[calc(50%+36rem)] sm:w-288.75"></div>
                </div>
            </main>
        </>
    )
}

export default Layout;