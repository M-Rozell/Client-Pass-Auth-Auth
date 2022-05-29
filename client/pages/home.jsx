import React from "react";
// import { apiService } from "../services/api-service";
// import { useEffect, useState } from "react";


const Home = () => {

    // const [tokenTime, setTokenTime] = useState(null)

    // useEffect(() => {
    //     apiService('/api/token')  
    //         .then(data => setTokenTime(data))
            
    //         .catch(() => alert('Not Logged In'))
    // }, [])

    return (
        <div>
            <h1 className="text-center display-1">Home Page</h1>
            <input type="email" placeholder="email" />
        </div>
    )
}

export default Home;