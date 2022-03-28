import React from "react";
import './CurriculumView.css';
import{Link} from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
const CurriculumView =({curriculum,deleteCurriculum})=>{
return(
    <React.Fragment>
    <table className='table table-bordered'>
        <tbody>
<tr>
<th>S.No</th>
<th>Training for</th>
<th>Start date</th>
<th>End date</th>
<th>Mode of training</th>
<th>Start time</th>
<th>End time</th>
<th>Number of attendees</th>
<th>Audience</th>
<th>Delete</th>
</tr>

{curriculum.map((curriculum,index)=>
{return(
<tr key={curriculum.id}>
    <td>{index+1}</td>
    <td>{curriculum.trainingfor}</td>
    <td>{curriculum.startdate}</td>
    <td>{curriculum.enddate}</td>
    <td>{curriculum.modeoftraining}</td>
    <td>{curriculum.starttime}</td>
    <td>{curriculum.endtime}</td>
    <td>{curriculum.attendees}</td>
    <td>{curriculum.audience}</td>
    <td><button onClick={()=>deleteCurriculum(curriculum.id)}><Icon icon={trash}/></button></td>
</tr>)
})}
</tbody>
    </table>
    <Link to="/home"><button type="button" className="goback btn btn-danger">Go Back</button></Link>
    </React.Fragment>
)
}

export default CurriculumView;
