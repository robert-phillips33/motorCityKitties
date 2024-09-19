import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';
import PropTypes from 'prop-types';

const Nav = ({ pitcherOrHitterView, setPitcherOrHitterView }) => {
  const navigate = useNavigate();

  return (
    <nav className='flex flex-col items-center items-start mb-2 space-y-1.5 p'>
      <div className="flex items-center space-x-1.5">
        <span className={`font-bold italic 
          ${pitcherOrHitterView === 'H' ? 'line-through decoration-2' : ''}`}>
          pitch
        </span>
        <Switch
          onCheckedChange={(checked) =>
            setPitcherOrHitterView(checked ? 'P' : 'H')}
          checked={pitcherOrHitterView === 'P'}
        />
        <span className={`font-bold italic
           ${pitcherOrHitterView === 'P' ? 'line-through decoration-2' : ''}`}>
          bat
        </span>
      </div>

      {/* Buttons positioned below the switch */}
      <div className='flex items-center space-x-1'>
        <Button className='font-bold w-15 h-6' onClick={() => navigate('/schedule')}>wildcard</Button>
        <Button className='font-bold w-15 h-6' onClick={() => navigate('/')}>stats</Button>
      </div>
      <h1 className="text-3xl font-bold">[motorCityKitties]</h1>
    </nav>
  );
};

Nav.propTypes = {
  pitcherOrHitterView: PropTypes.string.isRequired,
  setPitcherOrHitterView: PropTypes.func.isRequired,
};

export default Nav;