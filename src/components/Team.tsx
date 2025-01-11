import jsonData from './Random-images.json';
import { useState, useEffect } from 'react';
import Card from './card';

function Team() {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      // Log the data to verify it is being loaded correctly
      console.log(jsonData);
      setData(jsonData);
    }, []);
  
    return (
      <>
      
      <div  className="card-containers">
        <Card data={data} />
        </div>
       
      </>
     
    );
  }
  

  export default Team;