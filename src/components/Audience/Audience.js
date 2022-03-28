import React,{useState,useEffect,useCallback} from "react";
import AudienceView from "./AudienceView";
import AddAudience from "./AddAudience";
import './Audience.css';
const Audience=()=>{
    const[AudienceList,setAudienceList]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
const [error,setError]=useState(null);

const fetchAudienceHandler=useCallback(async()=>{ 
    setIsLoading(true);
      setError(null);
  
      try{
        const response=await fetch('http://localhost:3000/Audience');
        if(!response.ok){
          throw new Error('Something went wrong!');
        }
        
        const data=await response.json();
  
        const loadedAudience=[];
  
        for(const key in data){
          loadedAudience.push({
            id:data[key].id,
            name:data[key].name
          });
        }
    
      
        setAudienceList(loadedAudience);
        setIsLoading(false);
          } catch(error){
            setError(error.message);
            setIsLoading(false);
          }
      },[]);

      useEffect(()=>{
        fetchAudienceHandler();
      },[fetchAudienceHandler]
      );


      async function addAudienceHandler(name){
        const response=await fetch('http://localhost:3000/Audience',{
          method:'POST',
          body:JSON.stringify(name),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data=await response.json();
        return fetchAudienceHandler(data);
      }
    

      async function deleteAudienceHandler(id){
        console.log(id);
        const response = await fetch(`${'http://localhost:3000/Audience/'}${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data=await response.json();
        
        return fetchAudienceHandler(data);
        }
  
    //const deleteAudienceHandler=(id)=>{
      
        //const filteredaudience=AudienceList.filter((element,index)=>{
            //return element.id!==id
        //})
        //setAudienceList(filteredaudience);
    //}


return(
    <div>
        <AddAudience onAddAudience={addAudienceHandler}/>
        <section>
        {!isLoading&&AudienceList.length>0&&<AudienceView audiences={AudienceList} onDeleteAudience={deleteAudienceHandler}/>}
        {!isLoading && AudienceList.length===0 && !error && <p>Found no audience.</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error &&<p>{error}</p>}
        </section>
    </div>
)
};

export default Audience;