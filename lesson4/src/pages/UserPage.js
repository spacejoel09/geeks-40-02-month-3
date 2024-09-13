// import {useEffect, useState} from "react";

// const BASEURL = "https://jsonplaceholder.typicode.com/"


// const UserPage = () => {
//     const { user, setUsers } = useState([])


//      const getAPI = async (API) => {
//         const response = await fetch( `${BASEURL}/${API}/${user.id}`);
//         const data = await response.json()
//         return data

//     }
//     useEffect(() => {
//         getAPI("users").then(res=> setUsers)
//     }, []);




//     return(
//         <div>
//             {
//                 users.map(user=> {
//                     <div></div>
//                 })
//             }
//             <p>name:{user.name}</p>
//             <p>username:{users.username}</p>
//             <p>phone:{users.phone}</p>
//         </div>
//     )


// }

// export default UserPage;

