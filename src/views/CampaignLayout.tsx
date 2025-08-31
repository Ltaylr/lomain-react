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
        <><div className="flex flex-wrap">
            
            <div >
                    {(() => {
                        switch (comp) {
                          case "home" : return (<CampaignHome />);
                          case "gallery": return <Gallery title={camp?.title || "none"}/>;
                          case "journals":  return (<></>);
                          case "locations":  return (<></>);
                          case "characters":  return (<></>);
                          default:      return (<CampaignHome />);
                        }
                    })()}
            </div>
            <div className=" flex -flex-wrap p-3 border border-gray-200 
                rounded-xl shadow-sm
              dark:bg-bgray-800 dark:border-gray-700 dark:hover:bg-gray-900" >
                <div className="bg-gray-800 rounded-lg p-2 md:p-4 border border-gray-500">
                        <button onClick={() => setChildComponent("home")} className={"max-w-full rounded-lg object-cover object-center"} >
                            <img className="w-full object-cover object-center rounded-lg" src={baseUrl + "/images/archive.svg"} alt="<%= campaign.title %>"/>
                            <div className="mt-1">
                                <p className="text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium ">
                                   Home
                                </p>
                            </div>
                        </button>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 md:p-4 border border-gray-500">
                        <button onClick={() => setChildComponent("gallery")} className={"max-w-full rounded-lg object-cover object-center"} >
                            <img className="w-full object-cover object-center rounded-lg" src={baseUrl + "/images/archive.svg"} alt="<%= campaign.title %>"/>
                            <div className="mt-1">
                                <p className="text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium ">
                                   Gallery
                                </p>
                            </div>
                        </button>
                    </div>
                     <div className="bg-gray-800 rounded-lg p-2 md:p-4 border border-gray-500 mt-3">
                        <a className=" h-auto max-w-full rounded-lg object-cover object-center" href="/campaign/journals/<%= campaign._id %>">
                            <img className="w-full object-cover object-center rounded-lg" src={baseUrl + "/images/spellbook.svg"} alt="<%= campaign.title %>"/>
                            <div className="mt-1">
                                 <p className="text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium ">
                                   Journals
                                </p>
                            </div>
                        </a>
                    </div>
                     <div className="bg-gray-800 rounded-lg p-2 md:p-4 border border-gray-500 mt-3">
                        <a className=" h-auto max-w-full rounded-lg object-cover object-center" href="/campaign/locations/<%= campaign._id %>">
                            <img className="w-full object-cover object-center rounded-lg" src={baseUrl + "/images/world.svg"} alt="<%= campaign.title %>"/>
                            <div className="mt-1" >
                                <p className="text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium ">
                                   Locations
                                </p>
                            </div>
                        </a>
                    </div>
                     <div className="bg-gray-800 rounded-lg p-2 md:p-4 border border-gray-500 mt-3">
                        <a className=" h-auto max-w-full rounded-lg object-cover object-center" href="/campaign/sharacters/<%= campaign._id %>">
                            <svg width="100" height="100" version="1.1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <path className="w-full object-cover object-center rounded-lg" d="m37.61 98.277c-4.7587-2.4664-9.8974-5.6521-13.84-8.5805-1.6984-1.2614-6.7174-5.379-8.1827-6.7131l-1.5869-1.4448 1.1682-2.1953c2.5572-4.8056 4.5934-12.105 5.4399-19.501 0.53176-4.6462 0.65588-7.6138 0.76676-18.332l0.12799-12.372 0.88723-0.80221c0.619-0.55969 1.0643-1.3056 1.4729-2.4673 0.75354-2.1425 2.2664-5.1629 3.5146-7.0169 1.4321-2.1272 4.157-5.2817 5.487-6.352 0.6352-0.51118 1.2098-1.0017 1.277-1.09 0.06714-0.08831 1.001-0.78821 2.0752-1.5553 2.3424-1.6728 5.0871-3.0887 8.0303-4.1426l2.171-0.77737 0.88076-1.596c1.1218-2.0329 2.1931-3.3396 2.7379-3.3396 0.56298 0 1.7204 1.4257 2.7643 3.4052 0.83788 1.5888 0.85292 1.6015 2.5237 2.1377 3.3865 1.0868 8.1429 3.7393 10.555 5.8861 0.46997 0.4183 1.2719 1.1104 1.7821 1.5379 3.1194 2.6142 6.8937 8.3458 8.4964 12.903 0.40851 1.1615 0.85391 1.9077 1.4725 2.467l0.88685 0.80187 0.14221 12.129c0.07821 6.6708 0.19401 12.567 0.25732 13.102 0.06331 0.53518 0.182 1.7393 0.26377 2.6759 0.5513 6.3146 1.7541 12.447 3.3046 16.848 0.41207 1.1697 1.3714 3.377 2.1319 4.9053l1.3826 2.7786-1.5763 1.4385c-6.3126 5.7607-14.762 11.589-22.511 15.527l-2.8686 1.4578 0.0034-20.626c0.0018-11.344 0.06633-20.86 0.14333-21.146 0.09695-0.36 0.64018-0.72785 1.7667-1.1963 4.5195-1.8794 7.5862-3.7955 10.005-6.2513l1.5423-1.5659-0.16954-1.4932c-0.21951-1.9332-0.50269-2.341-1.3281-1.9124-3.7422 1.9431-11.185 4.2784-14.933 4.6856-2.6165 0.28429-2.3852-0.53142-2.4586 8.6715l-0.06437 8.0673-3.54 2.8962-3.54-2.8962-0.06444-8.0046c-0.03545-4.4025-0.1453-8.0819-0.24414-8.1763-0.09883-0.09448-1.4919-0.40419-3.0957-0.68824-1.6038-0.28404-3.4165-0.66255-4.0283-0.84111-4.388-1.2808-5.7326-1.7778-10.658-3.9393-0.16876-0.07406-0.38822 0.57912-0.59054 1.7576l-0.32197 1.8755 2.0554 1.9707c2.3487 2.2519 4.4165 3.5661 8.337 5.2987 1.5133 0.66877 2.8345 1.2931 2.936 1.3874 0.10146 0.09428 0.15639 9.6021 0.12207 21.129l-0.06244 20.957z"/>
                            </svg>
                            <div className="mt-1">
                                <p className="text-lg text-center text-shadow-lg text-cyan-300 text-shadow-fuchsia-500 font-medium ">
                                   Characters
                                </p>
                            </div>
                        </a>
                    </div>
            </div>
            
        </div>
       </>
    );
  }
export default CampaignLayout;