import { useNavigate } from "react-router-dom";

function MyNavUsingButton(){
    const navigate = useNavigate();
    let goToHome=()=>{
      navigate("/home");
    }
    let goToTodo=()=>{
      navigate("/todo");
    }
    let goToRegister=()=>{
      navigate("/registration");
    }
    return(
      <div>
        <input type="button" value="Home" onClick={goToHome} />
        <input type="button" value="Todo" onClick={goToTodo} />
        <input type="button" value="Registration" onClick={goToRegister} />
      </div>
      
    )
  }

  export default MyNavUsingButton;