import React,{useState,useEffect,useCallback} from "react";
import AddCurriculum from "./AddCurriculum";
import CurriculumView from "./CurriculumView";
import './Curriculum.css';
const Curriculum=()=>{
    const[curriculumList,setcurriculumList]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
const [error,setError]=useState(null);

const fetchCurriculumHandler=useCallback(async()=>{ 
    setIsLoading(true);
      setError(null);
  
      try{
        const response=await fetch('http://localhost:3000/Curriculum');
        if(!response.ok){
          throw new Error('Something went wrong!');
        }
        
        const data=await response.json();
  
        const loadedCurriculum=[];
  
        for(const key in data){
          loadedCurriculum.push({
            id:data[key].id,
            trainingfor:data[key].trainingfor,
            startdate:data[key].startdate,
            enddate:data[key].enddate,
            modeoftraining:data[key].modeoftraining,
            starttime:data[key].starttime,
            endtime:data[key].endtime,
            attendees:data[key].attendees,
            audience:data[key].audience
          });
        }
    
      
        setcurriculumList(loadedCurriculum);
        setIsLoading(false);
          } catch(error){
            setError(error.message);
            setIsLoading(false);
          }
      },[]);

      useEffect(()=>{
        fetchCurriculumHandler();
      },[fetchCurriculumHandler]
      );
    
      async function addcurriculumHandler(name){
        const response=await fetch('http://localhost:3000/Curriculum',{
          method:'POST',
          body:JSON.stringify(name),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data=await response.json();
        fetchCurriculumHandler(data);
      }
 
      async function deletecurriculumHandler(id){
        const response = await fetch(`${'http://localhost:3000/Curriculum/'}${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data=await response.json();
        
        return fetchCurriculumHandler(data);
        }

return(
    <div>
        <AddCurriculum onAddcurriculum={addcurriculumHandler}/>
        <div className="curriculumtable">
       {!isLoading &&curriculumList.length>0&& <CurriculumView curriculum={curriculumList} deleteCurriculum={deletecurriculumHandler}/>}
       {!isLoading && curriculumList.length===0 && !error && <p>Found no data.</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error &&<p>{error}</p>}
        </div>
    </div>
)
};

export default Curriculum;