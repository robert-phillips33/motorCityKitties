import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';
import PropTypes from 'prop-types';

const Nav = ({ pitcherOrHitterView, setPitcherOrHitterView }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className='flex justify-between items-center p-4'>
      <div className="flex flex-col items-start">
        <div className="flex items-center space-x-1">
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
        <h1 className="text-2xl font-bold">motorCityKitties.</h1>
      </div>

      {location.pathname !== '/wildcard' && (
        <Button className='font-bold w-13 h-6' 
        onClick={() => navigate('/wildcard')}>
          wildcard
        </Button>
      )}
    </nav>
  );
};

Nav.propTypes = {
  pitcherOrHitterView: PropTypes.string.isRequired,
  setPitcherOrHitterView: PropTypes.func.isRequired,
};

export default Nav;