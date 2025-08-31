
import React, {useState, useEffect} from 'react';

interface Char {
    _id: string, 
    name: string,
    imageUrl: string,
    characterSheetUrl: string,
    level: string,
    description: string,
    isPlayerCharacter: boolean,
    isPregen: boolean,
    __v: number
};

const baseUrl = 'http://localhost:8080';
function Characters(){
    const [data, setData] = useState<Char[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(baseUrl + '/characters/data');
                if(!response.ok)
                {
                    throw new Error(`http error: ${response.status}`);
                }
                response.json().then(result => {
                    var arr:Char[] = result;
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
        text-shadow-lg min-w-30 text-4xl md:text-5xl">C h a r a c t e r s</h1>
        <div className="flex flex-wrap gap-4 pt-10">
            {data.map(char => (
                <article className="block w-[46%] md:max-w-[16%] aspect-square p-1 md:p-3 border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800/30 dark:border-gray-700 dark:hover:bg-gray-700">
                    <h1 className="md:pb-2 border-b-1 md:text-2xl border-b-gray-300 font-semibold border-transparent text-center text-cyan-400">
                                {char.name}
                    </h1>
                    <img className="pt-3 pb-3 w-7/10 mx-auto" src={baseUrl + '/images/' + char.imageUrl}alt=""/>
                    <p className="text-xs md:text-lg text-center font-semibold text-cyan-400">
                        Level {char.level} {char.description} 
                    </p>
                    <div className="card__actions font-semibold text-orange-500 text-center pt-2">
                        <a target="_blank" href={baseUrl + '/chars/' + char.characterSheetUrl} className="text-lg">Download pdf</a>
                        <input type="hidden" value={char._id} name="characterId"/>
                        <input type="hidden" name="_csrf" value="<%= csrfToken %>"/>
                    </div>
                </article>
            ))}
        </div>
        </>
    )
}

export default Characters;