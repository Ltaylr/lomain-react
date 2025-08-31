import { BrowserRouter, Routes, Route } from "react-router"
import Home from './views/Home';
import About from "./views/About";
import Characters from "./views/Characters";
import Campaigns from "./views/Campaigns";
import Layout from "./views/Layout";
import CampaignLayout from "./views/CampaignLayout";

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
          <Route path="/Campaign/:campaignId" element={<CampaignLayout />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
