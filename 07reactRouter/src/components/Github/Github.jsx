import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();  
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://api.github.com/users/singhkuldeep29")
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);
    //         setData(data);
    //     })
    // }, [])

    return (

        <div className="bg-gray-400 p-4 text-center text-2xl"> 
        Github Folowers: {data.followers}
        </div>
    )
}

export default Github; 

// we use this method by decrease the latenct as , it load the data from API calls
// as the cursor hover to the github link it will load the data from API and when we click on the github 
//  link it will show the data in the UI without any delay as it is already loaded in the memory
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/singhkuldeep29');

    return response.json();
}