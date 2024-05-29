import React, {useState} from "react"
import Form from "../components/Form"

function ButtonAdd(props){
const [show,setShow] = useState(false)
    function handleForm(){
    setShow((s)=>!s)
    }
    return(
        <div className={''}>
            <button color={'primary'} className={'px-4'} onClick={handleForm}>Add task</button>
            {show ? <Form/> : null}
        </div>

    );
}


export default ButtonAdd;
