import { useState,useEffect } from 'react'

export default function Users(){
    const[userList, setUserList] = useState([])
   
    async function fetchAllUsers(){
        try{
             const apiRes = await fetch("http://dummyjson.com/users");
             const res = await apiRes.json();
             console.log(res);
             if(res?.users){
                setUserList(res?.users);
             }
             else
             {
                setUserList([]);
             }
             console.log(userList);
        }
        
        catch(error){
           console.log(error);
        }
    }
    

    useEffect(()=>{
        fetchAllUsers()
    },[])
return(
   <div>
     <h1>Hiiiii</h1>
     <ul>
        {
         userList.map((users) => 
            (<li key = {users?.id}>{users?.firstName}</li>

            ))
         }
     </ul>
   </div>

)


}