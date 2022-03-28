import React,{useState,useEffect,useCallback} from "react";
import View from "./View";
import AddTrainer from "./AddPrerequisite";
import './Prerequisite.css';
const PreRequisite=()=>{
    const[trainersList,setTrainersList]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    

    const fetchPrerequisiteHandler=useCallback(async()=>{ 
        setIsLoading(true);
          setError(null);
      
          try{
            const response=await fetch('http://localhost:3000/Prerequisite');
            if(!response.ok){
              throw new Error('Something went wrong!');
            }
            
            const data=await response.json();
      
            const loadedPrerequisite=[];
      
            for(const key in data){
              loadedPrerequisite.push({
                id:data[key].id,
                name:data[key].name,
              });
            }
        
          
            setTrainersList(loadedPrerequisite);
            setIsLoading(false);
              } catch(error){
                setError(error.message);
                setIsLoading(false);
              }
          },[]);
    
          useEffect(()=>{
            fetchPrerequisiteHandler();
          },[fetchPrerequisiteHandler]
          );


          async function addTrainerHandler(name){
            const response=await fetch('http://localhost:3000/Prerequisite',{
              method:'POST',
              body:JSON.stringify(name),
              headers:{
                'Content-Type':'application/json'
              }
            });
            const data=await response.json();
            fetchPrerequisiteHandler(data);
          }
    
          async function deleteTrainerHandler(id){
            const response = await fetch(`${'http://localhost:3000/Prerequisite/'}${id}`,{
              method:'DELETE',
              headers:{
                'Content-Type':'application/json'
              }
            });
            const data=await response.json();
            
            return fetchPrerequisiteHandler(data);
            }


return(
    <div>
        <AddTrainer onAddTrainer={addTrainerHandler}/>
        <section>
        {!isLoading&&trainersList.length>0&&<View trainers={trainersList} onDeleteTrainer={deleteTrainerHandler}/>}
        {!isLoading && trainersList.length===0 && !error && <p>Found no requirement.</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error &&<p>{error}</p>}
        </section>
    </div>
)
};

export default PreRequisite;