import React,{useState,useEffect,useCallback} from "react";
import View from "./View";
import AddTrainer from "./AddTrainer";
import './Trainer.css';
const Trainer=()=>{
    const[trainersList,setTrainersList]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
    const [error,setError]=useState(null);
    

    const fetchTrainersHandler=useCallback(async()=>{ 
        setIsLoading(true);
          setError(null);
      
          try{
            const response=await fetch('http://localhost:3000/Trainer');
            if(!response.ok){
              throw new Error('Something went wrong!');
            }
            //string to json conversion
            const data=await response.json();
      
            const loadedTrainers=[];
      
            for(const key in data){
              loadedTrainers.push({
                id:data[key].id,
                name:data[key].name,
              });
            }
        
          
            setTrainersList(loadedTrainers);
            setIsLoading(false);
              } catch(error){
                setError(error.message);
                setIsLoading(false);
              }
          },[]);
    
          useEffect(()=>{
            fetchTrainersHandler();
          },[fetchTrainersHandler]
          );


          async function addTrainerHandler(name){
            const response=await fetch('http://localhost:3000/Trainer',{
              method:'POST',
              body:JSON.stringify(name),
              headers:{
                'Content-Type':'application/json'
              }
            });
            const data=await response.json();
            fetchTrainersHandler(data);
          }


          async function deleteTrainerHandler(id){
            const response = await fetch(`${'http://localhost:3000/Trainer/'}${id}`,{
              method:'DELETE',
              headers:{
                'Content-Type':'application/json'
              }
            });
            const data=await response.json();
            
            return fetchTrainersHandler(data);
            }
    //const deleteTrainerHandler=(id)=>{
        //const filteredtrainer=trainersList.filter((element,index)=>{
            //return element.id!==id
        //})
        //setTrainersList(filteredtrainer);
    //}

    
    async function UpdateTrainerHandler(trainer){
      const response=await fetch(`${'http://localhost:3000/Trainer/'}${trainer.id}`,{
        method:'PUT',
        body:JSON.stringify(trainer),
        headers:{
          'Content-Type':'application/json'
        }
      });
      const data=await response.json();
      return fetchTrainersHandler(data);
    }


return(
    <div>
        <AddTrainer onAddTrainer={addTrainerHandler}/>
        <section>
        {!isLoading&&trainersList.length>0&&<View trainers={trainersList} onDeleteTrainer={deleteTrainerHandler} onUpdateTrainer={UpdateTrainerHandler}/>}
        {!isLoading && trainersList.length===0 && !error && <p>Found no trainer.</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error &&<p>{error}</p>}
        </section>
    </div>
)
};

export default Trainer;