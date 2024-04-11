import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data  = useLoaderData() ;
    // const [ data ,setData] = useState([]); 
    // useEffect(()=>{ 
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(Response => Response.json()) //string ko json me kiya
    //     .then(data=>{
    //         console.log(data);
    //         setData(data) ;
    //     })
    // },[])
  return (
    <div className='flex flex-col items-center bg-gray-700 text-center m-4 text-white p-4 text-3xl'>
    <div className='   text-center  text-white p-4 text-3xl '>
    Github Followers : {data.followers}
      
    </div>
    <img className='' src={data.avatar_url} alt="Github Picture" width={300} ></img>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json() ;
} 