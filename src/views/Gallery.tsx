import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router';

interface Image {
    imageUrl: string,
    description: string,
    campaignId: string,
    userId: string
}
interface Props{
    title:string
}
const baseUrl = 'http://localhost:8080'
function Gallery(props: Props) {
    const [images, setImages] = useState<Image[]>([]);
    const [error, setError] = useState<Error>();
    const [loading, setLoading] = useState(true);
    const {campaignId} = useParams()
    useEffect(() =>{
        const fetchData = async () =>{
            
            try{
                const response = await fetch(baseUrl + '/campaign/data/images/' + campaignId);
                console.log(response);
                if(!response.ok)
                {
                    throw new Error(`http error: ${response.status}`);
                }

                const result = await response.json();
                setImages(prevImages => result);

            }catch(err)
            {
                console.log(err);

            }
            finally{
                setLoading(false);

            }
        }
        fetchData();
    },[]);

    return (
        <>
        
            
                <div className="pt-3 columns-2 md:columns-3 justify-center" >
                    {images?.map(image => (
                        <div className="break-inside-avoid-column bg-gray-800 align-middle rounded-lg p-1 md:p-3 border border-gray-500 mt-4">
                            <a className="w-full rounded-lg" href={baseUrl + "/images/" + image.imageUrl}>
                                <img className="w-full object-cover object-center rounded-lg" src={baseUrl + "/images/" + image.imageUrl} alt={image.description}/>
                                <div className="mt-2">
                                    <p className=" text-center text-sm text-cyan-500 font-medium ">
                                       {image.description}
                                    </p>
                                </div>
                            </a>
                        </div>
                    ))} 
                </div>
            
        </>
    );
}

export default Gallery;