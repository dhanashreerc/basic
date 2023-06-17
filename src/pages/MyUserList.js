import { useState } from "react";
import MyNavUsingButton from "./MyNavUsingButton";

function MyUserList(){
    const[userList , setUserList]= useState([]);
    const getUser = async()=>{
        let url ="http://localhost:8000/find-user-list";
        let res = await fetch(url);
        let list = await res.json();
        //console.log(list);
        setUserList([...list]);
    }
    return(
        <>
        <h1>User List</h1>
        <input type="button" value="Get User List" onClick={getUser} />
        {userList.map((item)=>(
            <>
                <div>
                    {item.username} {item.email} {item.password} {item.mobile}
                </div>
            </>
        ))}
        </>
    );
}

export default MyUserList;