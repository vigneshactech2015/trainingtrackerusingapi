import React from "react";
import './ResourcesView.css';
import{Link} from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
const ResourcesView =({resources,onDeleteResources})=>{
return(
    <React.Fragment>
    <table className='table table-bordered border-primary'>
        <tbody>
<tr>
<th>S.No</th>
<th>Resources</th>
<th>Delete</th>
</tr>

{resources.map((resource,index)=>
{return(
<tr key={resource.id}>
    <td>{index+1}</td>
    <td>{resource.name}</td>
    <td><button onClick={()=>onDeleteResources(resource.id)}><Icon icon={trash}/></button></td>
</tr>)
})}
</tbody>
    </table>
    <Link to="/home"><button type="button" className="goback btn btn-danger">Go Back</button></Link>
    </React.Fragment>
)
}

export default ResourcesView;