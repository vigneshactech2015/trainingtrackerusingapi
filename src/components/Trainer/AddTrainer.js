import React,{useState} from "react";
import './AddTrainer.css';
const AddTrainer=(props)=>{
    const[enteredTrainerName,setEnteredTrainerName]=useState('');
    const nameChangeHandler=(event)=>{
      setEnteredTrainerName(event.target.value);
    }


    const onSubmitHandler=(event)=>{
     event.preventDefault();
     const tabledata={
         name:enteredTrainerName
     };
        props.onAddTrainer(tabledata);
        setEnteredTrainerName('');
     }
    

return(
    <div>
        <form className="formalign" onSubmit={onSubmitHandler}>
        <input type="text" placeholder="Enter trainer name" className="trainername" id="trainer" onChange={nameChangeHandler} value={enteredTrainerName} required></input>&nbsp;&nbsp;
        <button type="submit" className="btn btn-success">+</button>&nbsp;&nbsp;
    </form>
    </div>
)
};

export default AddTrainer;