import React from "react";
import './sideBar.css';
import{Link} from 'react-router-dom';
const SideBar=()=>{
    return(
        <React.Fragment>
        <div className="router">
      <Link to="/trainer" className="trainer">Trainer</Link><br/>
      <Link to="/resources" className="resources">Resources</Link><br/>
      <Link to="/audience" className="audience">Audience</Link><br/>
      <Link to="/prerequisite" className="curriculum">PreRequisite</Link><br/>
      <Link to="/curriculum" className="curriculum">Curriculum</Link><br/>
      
      </div>
    </React.Fragment>
    )
}

export default SideBar;