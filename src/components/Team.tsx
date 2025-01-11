import jsonData from './Random-images.json';
import { useState, useEffect } from 'react';
import Card from './card';
interface TeamMember {
  name: string;
  description: string;
  'image-url': string;
}
function Team() {
  const [data, setData] = useState<TeamMember[]>([]);

  useEffect(() => {
    // Log the data to verify it is being loaded correctly
    console.log(jsonData);
    setData(jsonData); // Ensure jsonData matches the expected structure
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