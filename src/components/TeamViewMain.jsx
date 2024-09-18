import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import mockData from '../assets/mockData.json';
import {
  filterAndSortData,  // Consolidated utility function
} from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

const TeamViewMain = ({ pitcherOrHitterView }) => {
  const [data, setData] = useState(mockData);
  const [sortedHighToLow, setSortedHighToLow] = useState(false);
  const [sortField, setSortField] = useState(null);

  // Effect to re-filter data whenever pitcherOrHitterView or sortField changes
  useEffect(() => {
    const filteredSortedData = filterAndSortData(mockData, pitcherOrHitterView, sortField, sortedHighToLow);
    setData(filteredSortedData);
  }, [pitcherOrHitterView, sortField, sortedHighToLow]);

  const handleSort = (field) => {
    setSortedHighToLow(!sortedHighToLow);
    setSortField(field);
  };

  return (
    <>
      <p className="mb-8 pl-8 italic text-right ml-5 font-sm">
        &apos;As a baseball fan, I really needed an app that doesn&apos;t
        <br></br> display a bunch of sh*tty stats
        that literally nobody cares about.&apos; <br></br>
        - <span className='font-bold'>Baseball Fans</span>
      </p>
      <h1 className=" mb-5 scroll-m-20 text-2xl font-bold 
    tracking-tight lg:text-3xl text-right">
        motorCityKitties.
      </h1>
      <Table>
        <TableCaption>[ DETROIT TIGERS 2024 ACTIVE ROSTER ]</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className='w-100px font-bold'>
              NAME
            </TableHead>
            <TableHead className='font-medium text-left'>
              POSITION
            </TableHead>
            {pitcherOrHitterView === 'P' ? (
              <>
                <TableHead className='font-medium text-left cursor-pointer 
                transition-colors hover:bg-muted/50' onClick={() => handleSort('EarnedRunAverage')}>
                  ERA⇅
                </TableHead>
                <TableHead className='font-medium text-left cursor-pointer 
                transition-colors hover:bg-muted/50' onClick={() => handleSort('PitchingStrikeouts')}>
                  K&apos;S⇅
                </TableHead>
                <TableHead className='font-medium text-left cursor-pointer 
                transition-colors hover:bg-muted/50' onClick={() => handleSort('InningsPitchedDecimal')}>
                  IP⇅
                </TableHead>
                <TableHead className='font-medium text-left cursor-pointer 
                transition-colors hover:bg-muted/50' onClick={() => handleSort('Wins')}>
                  W/L⇅
                </TableHead>
              </>
            ) : (
              <>
                <TableHead className='font-medium text-left cursor-pointer 
                transition-colors hover:bg-muted/50' onClick={() => handleSort('BattingAverage')}>
                  AVG⇅
                </TableHead>
                <TableHead className='font-medium text-left cursor-pointer 
                transition-colors hover:bg-muted/50' onClick={() => handleSort('HomeRuns')}>
                  HR⇅
                </TableHead>
                <TableHead className='font-medium text-left cursor-pointer 
                transition-colors hover:bg-muted/50' onClick={() => handleSort('RunsBattedIn')}>
                  RBI⇅
                </TableHead>
                <TableHead className='font-medium text-left cursor-pointer 
                transition-colors hover:bg-muted/50' onClick={() => handleSort('Hits')}>
                  HITS⇅
                </TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((player) => (
            <TableRow key={player.PlayerID}>
              <TableCell className='font-medium text-left'>{player.Name}</TableCell>
              <TableCell className='font-medium text-left'>{player.Position}</TableCell>
              {pitcherOrHitterView === 'P' ? (
                <>
                  <TableCell className='font-medium text-left'>{player.EarnedRunAverage}</TableCell>
                  <TableCell className='font-medium text-left'>{player.PitchingStrikeouts}</TableCell>
                  <TableCell className='font-medium text-left'>{player.InningsPitchedDecimal}</TableCell>
                  <TableCell className='font-medium text-left'>{player.Wins}/{player.Losses}</TableCell>
                </>
              ) : (
                <>
                  <TableCell className='font-medium text-left'>{player.BattingAverage}</TableCell>
                  <TableCell className='font-medium text-left'>{player.HomeRuns}</TableCell>
                  <TableCell className='font-medium text-left'>{player.RunsBattedIn}</TableCell>
                  <TableCell className='font-medium text-left'>{player.Hits}</TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

TeamViewMain.propTypes = {
  pitcherOrHitterView: PropTypes.string.isRequired,
};

export default TeamViewMain;