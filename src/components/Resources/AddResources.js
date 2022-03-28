import React,{useState} from "react";
import './AddResources.css';
const AddResources=(props)=>{
    const[enteredResourceName,setEnteredResourceName]=useState('');
    const resourceChangeHandler=(event)=>{
      setEnteredResourceName(event.target.value);
    }

    const onSubmitHandler=(event)=>{
     event.preventDefault();
     const tabledata={
         name:enteredResourceName
     }
        props.onAddResource(tabledata);
        setEnteredResourceName('');
     }
    

return(
    <div>
        <form className="formalign" onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter resource name" className="trainername" id="resource" onChange={resourceChangeHandler} value={enteredResourceName} required></input>&nbsp;&nbsp;
        <button type="submit" className="btn btn-success">+</button>&nbsp;&nbsp;
    </form>
    
    </div>
)
};

export default AddResources;