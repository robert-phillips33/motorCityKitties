import { Switch } from '@/components/ui/Switch';
import PropTypes from 'prop-types';

const Nav = ({ pitcherOrHitterView, setPitcherOrHitterView }) => {


  return (
    <nav className='items-center mt-10 mb-3'>
      <div className="flex flex-col items-center">
        <div className="flex items-center mr-2.5 space-x-1">
          <span className={`font-bold italic 
            ${pitcherOrHitterView === 'H' ? 
            'line-through decoration-2' : ''}`}>
            pitch
          </span>
          <Switch
            onCheckedChange={(checked) =>
              setPitcherOrHitterView(checked ? 'P' : 'H')}
            checked={pitcherOrHitterView === 'P'}
          />
          <span className={`font-bold italic 
            ${pitcherOrHitterView === 'P' ? 
            'line-through decoration-2' : ''}`}>
            bat
          </span>
        </div>
        <h1 className="text-3xl tracking-tighter 
        font-bold">[motorCityKitties]</h1>
      </div>
    </nav>
  );
};


Nav.propTypes = {
  pitcherOrHitterView: PropTypes.string.isRequired,
  setPitcherOrHitterView: PropTypes.func.isRequired,
};

export default Nav;