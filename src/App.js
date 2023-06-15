function App(){
  return(
    <>
    <h1>Props Demo</h1>
    <MessageDemo/>{/**Empty props */}
    < MessageDemo username="Jae" city="LA"/>
    </>
  );

}

function MessageDemo({username,city}){
  console.log("Props for current component: ",props);
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