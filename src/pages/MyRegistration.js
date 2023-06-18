import { useRef, useState } from "react";

function MyRegistration(){
 
    let fromRef = useRef();
    let [isSuccess, setIsSuccess] = useState(false);
    let [isError, setIsError] = useState(false);
    let [user, setUser]= useState({
      username:"", 
      password:"", 
      email:"",
      mobile:""
    });
  
    let handleNameChange=(e)=>{
      let newUser = {...user,username: e.target.value};
      setUser(newUser);
    }
    let handlePassChange=(e)=>{
      let newUser = {...user,password: e.target.value};
      setUser(newUser);
    }
    let handleEmailChange=(e)=>{
      let newUser = {...user,email: e.target.value};
      setUser(newUser);
    }
    let handleMobileChange=(e)=>{
      let newUser = {...user,mobile: e.target.value};
      setUser(newUser);
    }
  
    let registerAction = async()=>{
      try{
          //form-validation
        fromRef.current.classList.add("was-validated");
        let formStatus = fromRef.current.checkValidity();
        if(!formStatus){
          return;
        }
        //backend
        let url= `http://localhost:4000/adduser?username=${user.username}&password=${user.password}&email=${user.email}&mobile=${user.mobile}`
        let res = await fetch(url);
        if(res.status !=200){
          let serverMsg = await res.text();
          throw new Error(serverMsg);
        }
    
        let newuser={
          username:"", 
          password:"", 
          email:"",
          mobile:""
        };
    
        setUser(newuser);
        fromRef.current.classList.remove("was-validated");
        alert("success");
        setIsSuccess(true);
        setIsError(false);
      }catch(err){
        alert(err.message);
        setIsSuccess(false);
        setIsError(true);
      }finally{
        setTimeout(()=>{
          setIsSuccess(false);
          setIsError(false)
        },1000);
      }
      
    }
  
    return(
      <>
        <form ref={fromRef} className="needs-validation">
        <input 
          className="form-control" 
          type="text" 
          placeholder="Enter username" 
          value={user.username} 
          onChange={handleNameChange}
          required
        />
        <input 
          className="form-control" 
          type="password" 
          placeholder="Enter password" 
          value={user.password} 
          onChange={handlePassChange}
          required
        />
        <input 
          className="form-control" 
          type="text" 
          placeholder="Enter email" 
          value={user.email} 
          onChange={handleEmailChange}
          required
        />
        <input 
          className="form-control" 
          type="text" 
          placeholder="Enter mobile" 
          value={user.mobile}
          onChange={handleMobileChange}
          required
        />
        <input 
          className="w-100" 
          type="button" 
          value="Register"
          onClick={registerAction} 
        />
        </form>
        {isSuccess && <div className="alert alert-success">Success</div>}
        {isError && <div className="alert alert-danger">Error</div>}
      </>
    )
  }

  export default MyRegistration;