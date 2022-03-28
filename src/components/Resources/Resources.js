import React,{useState,useEffect,useCallback} from "react";
import ResourcesView from "./ResourcesView";
import './AddResources.css';
import './Resources.css';
import AddResources from "./AddResources";
const Resources=()=>{
    const[resourcesList,setResourcesList]=useState([]);
    const[isLoading,setIsLoading]=useState(false);
const [error,setError]=useState(null);

  
const fetchResourcesHandler=useCallback(async()=>{ 
    setIsLoading(true);
      setError(null);
  
      try{
        const response=await fetch('http://localhost:3000/Resources');
        if(!response.ok){
          throw new Error('Something went wrong!');
        }
        
        const data=await response.json();
  
        const loadedResources=[];
  
        for(const key in data){
          loadedResources.push({
            id:data[key].id,
            name:data[key].name
          });
        }
    
      
        setResourcesList(loadedResources);
        setIsLoading(false);
          } catch(error){
            setError(error.message);
            setIsLoading(false);
          }
      },[]);

      useEffect(()=>{
        fetchResourcesHandler();
      },[fetchResourcesHandler]
      );

      async function addResourcesHandler(name){
        const response=await fetch('http://localhost:3000/Resources',{
          method:'POST',
          body:JSON.stringify(name),
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data=await response.json();
        fetchResourcesHandler(data);
      }
      async function deleteResourceHandler(id){
        const response = await fetch(`${'http://localhost:3000/Resources/'}${id}`,{
          method:'DELETE',
          headers:{
            'Content-Type':'application/json'
          }
        });
        const data=await response.json();
        
        return fetchResourcesHandler(data);
        }
  


return(
    <div>
        <AddResources onAddResource={addResourcesHandler}/>
        <section>
        {!isLoading&&resourcesList.length>0&&<ResourcesView resources={resourcesList} onDeleteResources={deleteResourceHandler}/>}
        {!isLoading && resourcesList.length===0 && !error && <p>Found no resources.</p>}
      {isLoading && <p>Loading...</p>}
      {!isLoading && error &&<p>{error}</p>}
        </section>
    </div>
)
};

export default Resources;