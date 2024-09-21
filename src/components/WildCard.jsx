import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/Card'; 
import { Button } from '@/components/ui/Button'; 
import mockDataWildCard from '../assets/mockDataWildCard.json';

const WildCard = () => {
  return (
    <div className="flex justify-center mt-8">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>So.. Are we going to the playoffs..?
          <CardTitle className="text-xl font-bold">So.. Are we going to the playoffs..?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Tigers Current WildCard Rank: 4</p>
          <p className="text-sm">Games Behind: 0.5</p>
          <p className="text-sm">Last 10 Games: 8-2</p>
          <p className="text-sm">Streak: W4</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={() => window.history.back()}>STATS</Button> 
        </CardFooter>
      </Card>
    </div>
  );
};

export default WildCard;