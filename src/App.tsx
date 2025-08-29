import { BrowserRouter, Routes, Route } from "react-router"
import Home from './views/Home';
import About from "./views/About";
import Characters from "./views/Characters";
import Campaigns from "./views/Campaigns";
import Layout from "./views/Layout";
import Campaign from "./views/Campaign";

function App()
{
  //This shit is so fucking dumb, there has to be a simpler way to do this. 
  return(
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Campaigns" element={<Campaigns />}/>
          <Route path="/Characters" element={<Characters />}/>
          <Route path="/Campaign/:campaignId" element={<Campaign />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
