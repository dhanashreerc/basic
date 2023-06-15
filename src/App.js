function App(){
  return(
    <>
    <h1>Props Demo</h1>
    <MessageDemo/>{/**Empty props */}
    < MessageDemo username="Jae" city="LA"/>
    </>
  );

}

function MessageDemo(props){
  console.log("Props for current component: ",props);
  //Object {  }
  //Object { username: "Jae", city: "LA" }
  return(
    <>
    <h1>Hello {props.username}</h1>
    <h1>I am from {props.city}</h1>
    </>
  );
}

export default App;