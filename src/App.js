function App(){
  return(
    <>
    <h1>Props Demo</h1>
    <ListDemo/>
    </>
  );

}

function ListDemo(){
  let list = ["delhi","mumbai","chennai"];
  let list1 = [];
  for(let i=1;i<=10;i++){
    list.push("");
  }
  return(
    <>
    <h1>Hello world</h1>
    {/** version: map method is i/o */}
    {list.map((item) =>  item)};
    <hr />
    {/** version 2 */}
    {list.map((item) => `Hello ${item}` )};
    <hr />
    {/** version 3 */}
    {list.map((item) => (<><h1>Hello {item}</h1> </>))};
    <hr />
    {list.map((item)=><h1>Hello</h1>)};

    </>
  );
}
function MessageDemo({username,city}){
  //console.log("Props for current component: ",props);
  //Object {  }
  //Object { username: "Jae", city: "LA" }
  return(
    <>
    <h1>Hello {username}</h1>
    <h1>I am from {city}</h1>
    </>
  );
}

export default App;


