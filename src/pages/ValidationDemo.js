import { useRef } from "react";

function ValidationDemo(){
    let formRef = useRef();
    
    let submitAction=()=>{
        console.log(formRef.current);
        formRef.current.classList.add("was-validated");
        let formStatus = formRef.current.checkValidity();
        if(!formStatus){
            return;
        }

    };
    return(
        <>
        <h1>Validation Demo</h1>
        <form ref={formRef} className="needs-validation" novalidate>
            <input className="form-control" type="text" placeholder="Enter name" minLength="3" required/>
            <input className="form-control" type="text" placeholder="kuch bhi.." required />
            <input type="button" value="Submit" onClick={submitAction} />
        </form>
        
        </>
    );
}

export default ValidationDemo;