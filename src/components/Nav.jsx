import React from "react";
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';
import PropTypes from 'prop-types';

const Nav = ({ pitcherOrHitterView, setPitcherOrHitterView }) => {
  const navigate = useNavigate();

  return (
    <nav className='flex items-center justify between'>
      <Button onClick={() => navigate('/schedule')}>
        SCHEDULE
      </Button>
      <Button onClick={() => navigate('/')}>
        STATS
      </Button>

      <div className="flex items-center">
        <span>pitch</span>
        <Switch
          onCheckedChange={(checked) => setPitcherOrHitterView(checked ? 'P' : '')} 
          checked={pitcherOrHitterView === 'P'}
        />
        <span>bat</span>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  pitcherOrHitterView: PropTypes.string.isRequired,
  setPitcherOrHitterView: PropTypes.func.isRequired,
};

export default Nav;