import { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import mockDataWildCard from '../assets/mockDataWildCard.json';  // Mock data

const WildCard = () => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    // Simulate fetching WildCard data for Detroit Tigers
    const fetchWildCardData = () => {
      const detroitTigersData = mockDataWildCard.find(team => team.TeamID === 17); // Assuming "DET" teamID
      setTeamData(detroitTigersData);
    };

    fetchWildCardData();
  }, []);

  if (!teamData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex justify-center">
      <Card className="shadow-lg">
        <CardHeader className>
          <CardTitle className="text-4xl text-right font-bolder tracking-tighter mb-0">
          9-20-24
          </CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="mt-3 text-3xl tracking-tighter mb-2 font-bold">
            The Detroit Tigers are 5 games back. <br></br>
          </h1>
          <h2 className="text-2xl font-extrabold tracking-tight">
            They're 7-3 in their last 10.
          </h2>
          <h3 className="text-med text- font-bold tracking-tighter mt-10">
            It's looking like..
         </h3>
         <p className=''>PLAYOFF RUN IS COMING!!</p>
        </CardContent>
        <CardFooter className="flex justify-start">
          <Button className='font-bold w-13 h-6'
            onClick={() => window.history.back()}>stats</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default WildCard;

"mt-3 text-5xl tracking-tighter font-bold"