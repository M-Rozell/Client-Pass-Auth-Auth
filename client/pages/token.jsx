import React from "react";
import { useEffect, useState } from "react";
import { apiService } from "../services/api-service";


const Token = () => {

    const [tokenTime, setTokenTime] = useState(null)//begins as null until it is ready to populate the page.

    useEffect(() => {
        apiService('/api/token')  //don't have to provide GET b.c it defaults to it, and there is no data so we don't need to add that after api/pizza, ("GET", data)
            .then(data => setTokenTime(data))
            //^we don't have to run res => res.json() b.c the api will do this automatically
            .catch(() => alert('Not Logged In'))
    }, [])



    //no longer need this b/c our api-service should handle it
    //  const TOKEN = localStorage.getItem(TOKEN_KEY) 
    //     fetch('/api/token', {
    //         method: 'GET',
    //         headers: {
    //             Authorization: `Bearer ${TOKEN}`
    //         }
    //     })
    //     .then(res => res.json()) //for the body parser
    //     .then(data => setTokenTime(data));
    // }, []);

    return (
        <div>
            <h1 className="text-center display-1">{tokenTime?.message}</h1>
        </div>
    )
}


export default Token;