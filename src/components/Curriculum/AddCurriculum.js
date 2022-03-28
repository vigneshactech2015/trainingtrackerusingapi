import React,{useState} from "react";
import './AddCurriculum.css';
const AddCurriculum=(props)=>{
    const[enteredcurriculumName,setEnteredcurriculumName]=useState('');
    const[enteredstartdate,setEnteredstartdate]=useState('');
    const[enteredenddate,setEnteredenddate]=useState('');
    const[enteredmodeoftraining,setEnteredmodeoftraining]=useState('');
    const[enteredstarttime,setEnteredstarttime]=useState('');
    const[enteredendtime,setEnteredendtime]=useState('');
    const[enteredattendees,setEnteredattendees]=useState('');
    const[enteredaudience,setEnteredaudience]=useState('');
    const curriculumChangeHandler=(event)=>{
      setEnteredcurriculumName(event.target.value);
    }
    const startdateChangeHandler=(event)=>{
        setEnteredstartdate(event.target.value);
    }

    const enddateChangeHandler=(event)=>{
        setEnteredenddate(event.target.value);
    }

    const modeoftrainingChangeHandler=(event)=>{
        setEnteredmodeoftraining(event.target.value);
    }

    const starttimeChangeHandler=(event)=>{
        setEnteredstarttime(event.target.value);
    }

    const endtimeChangeHandler=(event)=>{
        setEnteredendtime(event.target.value);
    }

    const attendeesChangeHandler=(event)=>{
        setEnteredattendees(event.target.value);
    }

    const audienceChangeHandler=(event)=>{
        setEnteredaudience(event.target.value);
    }

    const onSubmitHandler=(event)=>{
     event.preventDefault();
     const tabledata={
      trainingfor:enteredcurriculumName,
      startdate:enteredstartdate,
      enddate:enteredenddate,
      modeoftraining:enteredmodeoftraining,
      starttime:enteredstarttime,
      endtime:enteredendtime,
      attendees:enteredattendees,
      audience:enteredaudience
     };
        props.onAddcurriculum(tabledata);
        
        setEnteredstartdate('');
        setEnteredcurriculumName('');
        setEnteredenddate('');
        setEnteredmodeoftraining('');
        setEnteredstarttime('');
        setEnteredendtime('');
        setEnteredattendees('');
        setEnteredaudience('');
     }
    

return(
    <div>
        <form className="curriculumform" onSubmit={onSubmitHandler}>
            <br/>
            <label>Training for</label><br/>
        <input type="text" placeholder="Training for" className="trainingfor" id="trainingfor" onChange={curriculumChangeHandler} value={enteredcurriculumName} required></input><br/><br/>
        <label>Start date</label>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
        <input type="date" placeholder="start date" className="curriculumname" id="start date" onChange={startdateChangeHandler} value={enteredstartdate} required></input><br/><br/>
        <label>End date</label>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
        <input type="date" placeholder="end date" className="curriculumname" id="end date" onChange={enddateChangeHandler} value={enteredenddate} required></input><br/><br/>
        <label>Mode of training</label><br/>
        <input type="text" placeholder="Mode of training" className="modeoftraining" id="modeoftraining" onChange={modeoftrainingChangeHandler} value={enteredmodeoftraining} required></input><br/><br/>
        <label>Start time</label>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
        <input type="time" placeholder="start time" className="time" id="start time" onChange={starttimeChangeHandler} value={enteredstarttime} required></input><br/><br/>
        <label>End time</label>&nbsp;&nbsp;&nbsp;&nbsp;<br/>
        <input type="time" placeholder="end time" className="time" id="end time" onChange={endtimeChangeHandler} value={enteredendtime} required></input><br/><br/>
        <label>Number of attendees</label><br/>
        <input type="number" placeholder="number of attendees" className="curriculumname" id="attendees" onChange={attendeesChangeHandler} value={enteredattendees} required></input><br/><br/>
        <label>Type of audience</label><br/>
        <input type="text" placeholder="audience type" className="audiencetype" id="audience" onChange={audienceChangeHandler} value={enteredaudience} required></input><br/><br/>
        <button type="submit" className="submitbutton btn btn-success">Submit</button>&nbsp;&nbsp;

    </form>
    
    </div>
)
};

export default AddCurriculum;