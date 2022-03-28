import React from "react";
import './AudienceView.css';
import{Link} from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
const AudienceView =({audiences,onDeleteAudience})=>{
return(
    <React.Fragment>
    <table className='table table-bordered border-primary'>
        <tbody>
<tr>
<th>S.No</th>
<th>Audience</th>
<th>Delete</th>
</tr>

{audiences.map((audience,index)=>
{return(
<tr key={audience.id}>
    <td>{index+1}</td>
    <td>{audience.name}</td>
    <td><button onClick={()=>onDeleteAudience(audience.id)}><Icon icon={trash}/></button></td>
</tr>)
})}
</tbody>
    </table>
    <Link to="/home"><button type="button" className="goback btn btn-danger">Go Back</button></Link>
    </React.Fragment>
)
}

export default AudienceView;