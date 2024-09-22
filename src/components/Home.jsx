import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-4 sm:p-8 lg:p-12">
      <Card className="shadow-lg max-w-xs sm:max-w-md lg:max-w-lg">
        <CardHeader className="text-2xl sm:text-3xl ml-4 
        sm:ml-8 mr-4 sm:mr-8 tracking-tighter font-bold">
          [motorCityKitties]
        </CardHeader>
        <CardContent>
          <h2 className='relative b-10 mt-3 rounded
           bg-muted italic px-1 sm:px-[0.3rem]
            py-[0.2rem] font-mono text-base sm:text-lg'>
            &apos;You cannot measure
            <br></br>
            a ballplayer&apos;s heart
            <br></br>
            with a stat sheet.&apos;
            <br></br> - Bill James
          </h2>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="font-bold w-32 sm:w-40 h-8"
            onClick={() => navigate('TeamViewMain')}>
            View Stats
          </Button>
          <h3 className="text-xs sm:text-sm text-muted-foreground
           tracking-tighter font-light"
          >we disagree.</h3>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;