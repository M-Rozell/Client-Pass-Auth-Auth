
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import Login from "./pages/login.jsx";
import Token from "./pages/token.jsx";
import PrivateRoute from "./pages/privateRoute.jsx";
import Profile from "./pages/profilePage.jsx";


const App = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRoute />} >
                <Route path="/" element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/token" element={<Token />} />
                </Route>

            <Route path="/login" element={<Login />} />



            </Routes>
        </BrowserRouter>
    )
}




// const App = (props) => {

//     const [tokenMessage, setTokenMessage] = useState(null);

//     useEffect(() => {
//         //lets go find the local token if there should be one
//         const TOKEN = localStorage.getItem('token');

//         fetch('/api/token', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `Bearer ${TOKEN}`
//             }
//         })
//             .then(res => res.json())
//             .then(data => setTokenMessage(data));
//     }, [])
// //^when a valid token was pasted into local storage from login in postman,
// //the fetch request retrieved that valid token from localstorage, applied it 
// //under the Bearer scheme we learned, and that successfully allows the fetch
// //request to complete b/c we properly provided that token.



//     // const[greeting, setGreeting] = useState('');

//     // useEffect(() => {
//     //     async function getGreeting() {
//     //         try {
//     //             const res = await fetch('/api/hello');
//     //             const greeting = await res.json();
//     //             setGreeting(greeting);
//     //         } catch(error) {
//     //             console.log(error);
//     //         }
//     //     }
//     //     getGreeting();
//     // }, []);

//     return (
//         <main className="container my-5">
//             <h1 className="test-primary text-center">{tokenMessage?.message}!</h1>
//             {/* ^ the ? means optional chain. b/c the initial render null.message will fail. so we say don't chain .message if it is falsy which null is.
//             otherwise once the useEffect finishes running and fetches the data from our server tokenMessage will be populated
//             and .message should be safe to chain on there. */}
//         </main>


//     )

// }
// console.log('working')

export default App;