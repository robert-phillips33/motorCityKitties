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
    <div className="flex justify-center">
      <Card className="shadow-lg">
        <CardHeader>
          <h1 className="text-3xl ml-10 mr-10 tracking-tighter font-bold">
            [motorCityKitties]
          </h1>
        </CardHeader>
        <CardContent>
          <h2 className='relative b-10 mt-3 rounded bg-muted italic px-[0.3rem]
            py-[0.2rem] font-mono text-left text-lg '>
            &apos;You cannot measure <br></br>
            a ballplayer&apos;s heart<br></br>
            with a stat sheet.&apos;<br></br>
            - Bill James 
          </h2>
        </CardContent>
        <CardFooter className="flex flex-col items-center">
          <Button className='font-bold w-40 h-8'
            onClick={() => navigate('TeamViewMain')}>
            View Stats
          </Button>
          <h3 className='text-xl tracking-tighter font-bold'>↑↑ we disagree.</h3>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Home;