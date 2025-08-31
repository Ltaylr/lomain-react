
import React, {useState, useEffect} from 'react';

interface Camp {
    _id: string, 
    title: string,
    imageUrl: string,
    description: string,
    imageCollection:[string],
    
};

const baseUrl = 'http://localhost:8080';
function Campaigns(){
    const [data, setData] = useState<Camp[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(baseUrl + '/campaigns/data');
                if(!response.ok)
                {
                    throw new Error(`http error: ${response.status}`);
                }
                response.json().then(result => {
                    var arr:Camp[] = result;
                    setData(prevData => arr);
                })
                .then(res =>{
                        console.log(data);
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
        text-shadow-lg min-w-30 text-4xl md:text-5xl">C a m p a i g n s</h1>
        <div className="flex flex-wrap gap-4 pt-10">
            {data.map(camp => (
              <div className="block hover:border-2 hover:border-amber-600 
                min-w-80 max-w-[35%] aspect-square p-3
                border border-gray-200 
                rounded-xl shadow-sm hover:bg-gray-100
              dark:bg-gray-800/30 dark:border-gray-700 dark:hover:bg-gray-700">
                <a href={"/campaign/" + camp._id} className="block  aspect-square p-1 md:p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h1 className="md:pb-2 border-b-1 md:text-2xl border-b-gray-300 font-semibold border-transparent text-center text-cyan-400">
                                {camp.title}
                    </h1>
                    <img className=" mb-5 pt-3 pb-3 w-7/10 mx-auto" src={baseUrl + '/images/' + camp.imageUrl}alt=""/>
                    <p className=" border-2 p-5 rounded-lg border-gray-500 text-xs md:text-lg text-center font-semibold text-cyan-400">
                        {camp.description} 
                    </p>
                </a>
                <input type="hidden" value={camp._id} name="campaignId"/>
                <input type="hidden" name="_csrf" value="<%= csrfToken %>"/>
                </div>
            ))}
        </div>
        </>
    );
  }
export default Campaigns;