import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router';
import Gallery from './Gallery'
import CampaignHome from './CampaignHome';

interface Camp {
    _id: string, 
    title: string,
    imageUrl: string,
    description: string,
    imageCollection:[string],
    
};

const baseUrl = 'http://localhost:8080';
function CampaignLayout(){
    const [camp, setData] = useState<Camp>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();
    const {campaignId} = useParams();
    const [comp, setComp] = useState<string>("none");
    
    const setChildComponent = (name:string) =>
    {
        setComp(prev => name);
    }

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(baseUrl + '/campaign/data/' + campaignId);
                if(!response.ok)
                {
                    throw new Error(`http error: ${response.status}`);
                }
                response.json().then(result => {
                    var arr:Camp = result;
                    setData(prevData => arr);
                })
                .then(res =>{
                        console.log(camp);
                })
            }
            catch(error:any){
                console.log(error);
                setError(error);
            }
            finally{
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    
    return(
        <>
        <h1 className=" 
        font-extrabold text-cyan-400 
        text-shadow text-shadow-fuchsia-500 
        text-shadow-lg min-w-30 text-4xl md:text-5xl mb-5 ">{camp?.title}</h1>
        <div>
            <div className="flex flex-wrap p-3
                rounded-xl shadow-sm">
                        <button onClick={() => setChildComponent("home")} 
                        className={" w-[10%] hover:cursor-pointer max-w-full rounded-lg object-cover object-center"} >
                            <img className="mx-auto w-[30%] object-cover object-center rounded-lg" src={baseUrl + "/images/archive.svg"} alt="<%= campaign.title %>"/>
                            <p className={"text-lg text-center text-shadow-lg text-cyan-300 font-medium "  + ((comp==="home") ? "text-shadow-orange-500" : "text-shadow-fuchsia-500")} >
                                   Home
                            </p>
                        </button>
                        <button onClick={() => setChildComponent("gallery")} className={" w-[10%] hover:cursor-pointer max-w-full rounded-lg object-cover object-center"} >
                            <img className="mx-auto w-[30%] object-cover object-center rounded-lg" src={baseUrl + "/images/archive.svg"} alt="<%= campaign.title %>"/>
                                <p className={"text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium " + ((comp==="gallery") ? "text-shadow-orange-500" : "text-shadow-fuchsia-500")}>
                                   Gallery
                                </p>
                        </button>
                        <button onClick={() => setChildComponent("journal")} className={" w-[10%] hover:cursor-pointer max-w-full rounded-lg object-cover object-center"} >
                            <img className="mx-auto w-[30%] object-cover object-center rounded-lg" src={baseUrl + "/images/spellbook.svg"} alt="<%= campaign.title %>"/>
                                <p className={"text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium "+ ((comp==="journal") ? "text-shadow-orange-500" : "text-shadow-fuchsia-500")}>
                                   Journal
                                </p>
                        </button>
                        <button onClick={() => setChildComponent("locations")} className={" w-[10%] hover:cursor-pointer max-w-full rounded-lg object-cover object-center"} >
                            <img className="mx-auto w-[30%] object-cover object-center rounded-lg" src={baseUrl + "/images/world.svg"} alt="<%= campaign.title %>"/>
                                <p className={"text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium "+ ((comp==="locations") ? "text-shadow-orange-500" : "text-shadow-fuchsia-500")}>
                                   Locations
                                </p>
                        </button>
                        <button onClick={() => setChildComponent("characters")} className={" w-[10%] hover:cursor-pointer max-w-full rounded-lg object-cover object-center"} >
                            <img className="mx-auto  w-[30%] object-cover object-center rounded-lg" src={baseUrl + "/images/armor.svg"} alt="<%= campaign.title %>"/>
                                <p className={"text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium " + ((comp==="characters") ? "text-shadow-orange-500" : "text-shadow-fuchsia-500")}>
                                   Characters
                                </p>
                        </button>
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="block 
                min-w-80 max-w-[60%] p-3
                border border-gray-200 
                rounded-xl shadow-sm
              dark:bg-bgray-800 dark:border-gray-700 dark:hover:bg-gray-900">
                    {(() => {
                        switch (comp) {
                          case "home" : return (<CampaignHome />);
                          case "gallery": return <Gallery title={camp?.title || ''}/>;
                          case "journal":  return (<></>);
                          case "locations":  return (<></>);
                          case "characters":  return (<></>);
                          default:      return (<CampaignHome />);
                        }
                    })()}
                </div>
            </div>
        </div>
       </>
    );
  }
export default CampaignLayout;