
import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router';
import Gallery from './Gallery'


interface Camp {
    _id: string, 
    title: string,
    imageUrl: string,
    description: string,
    imageCollection:[string],
    
};

const baseUrl = 'http://localhost:8080';
function CampaignHome(){
    const [camp, setData] = useState<Camp>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();
    const {campaignId} = useParams();
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
        
                <a href={"/campaign/" + camp?._id} className="block p-1 md:p-3 rounded-lg shadow-sm dark:bg-gray-800/30 dark:border-gray-700">
                    <img className="rounded-lg mb-5 pt-3 pb-3  lg:w-[85%] md:w-[85%] mx-auto" src={baseUrl + '/images/' + camp?.imageUrl}alt=""/>
                    <p className=" bg-bgray-900 border-2 p-5 rounded-lg border-gray-500 text-xs md:text-lg text-center font-semibold text-cyan-400">
                        {camp?.description} 
                    </p>
                </a>
                <input type="hidden" value={camp?._id} name="campaignId"/>
                <input type="hidden" name="_csrf" value="<%= csrfToken %>"/>
            
        </>
    );
  }
export default CampaignHome;