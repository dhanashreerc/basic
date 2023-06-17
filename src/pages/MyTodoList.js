import { useEffect, useState } from "react";

function MyTodoList(){
    
    let [todoList, setTodoList] = useState([]);
    useEffect(()=>{
        getData();
    },[]);
    let getData = async()=>{
        let url = "http://localhost:4000/find-all-todo";
        let res = await fetch(url);
        let list = await res.json();
        //console.log(list);

        let newlist = [...list];
        setTodoList(newlist);
    }
    return(
      <>
        <h1>Display All todo</h1>
        {/* <input type="button" value="Get data from server" onClick={getData}/> */}
        {todoList.map((item)=>
            <>
                 <div className="alert alert-secondary">
                    <h4>{item.task}</h4>
                    <p>{item.desc}</p>
                 </div>

            </>
        )}
      </>
    );
}

export default MyTodoList;