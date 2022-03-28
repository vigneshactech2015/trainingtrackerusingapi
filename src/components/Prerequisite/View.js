import React from "react";
import './View.css';
import{Link} from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
const View =({trainers,onDeleteTrainer})=>{
return(
    <React.Fragment>
    <table className='table table-bordered border-primary'>
        <tbody>
<tr>
<th>S.No</th>
<th>Requirement</th>
<th>Delete</th>
</tr>

{trainers.map((trainer,index)=>
{return(
<tr key={trainer.id}>
    <td>{index+1}</td>
    <td>{trainer.name}</td>
    <td><button onClick={()=>onDeleteTrainer(trainer.id)}><Icon icon={trash}/></button></td>
</tr>)
})}
</tbody>
    </table>
    <Link to="/home"><button type="button" className="goback btn btn-danger">Go Back</button></Link>
    </React.Fragment>
)
}

export default View;