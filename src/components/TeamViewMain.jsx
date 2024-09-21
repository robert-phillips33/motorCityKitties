import { useState } from "react";
import PropTypes from 'prop-types';
import mockData from '../assets/mockData.json';
import { filterData, sortData } from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table';

const TeamViewMain = ({ pitcherOrHitterView }) => {
  const [sortedHighToLow, setSortedHighToLow] = useState(false);
  const [sortField, setSortField] = useState(null);

  const filteredData = filterData(mockData, pitcherOrHitterView); 
  const sortedData = sortField ? sortData(filteredData, sortField, sortedHighToLow) : filteredData; 

  const handleSort = (field) => {
    setSortedHighToLow(!sortedHighToLow);
    setSortField(field);
  };
console.log(sortedData);
  return (
    <>
    
      <Table className='shadow-lg'>
        <TableCaption>[ DETROIT TIGERS 2024 ACTIVE ROSTER ]</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="font-bold">NAME</TableHead>
            <TableHead>POSITION</TableHead>
            {pitcherOrHitterView === 'P' ? (
              <>
                <TableHead className='font-bold cursor-pointer' 
                onClick={() => handleSort('EarnedRunAverage')}>ERA⇅</TableHead>
                <TableHead className='font-bold cursor-pointer' 
                onClick={() => handleSort('PitchingStrikeouts')}>K&apos;s⇅</TableHead>
                <TableHead className='font-bold cursor-pointer' 
                onClick={() => handleSort('InningsPitchedDecimal')}>IP⇅</TableHead>
                <TableHead className='font-bold cursor-pointer' 
                onClick={() => handleSort('Wins')}>W/L⇅</TableHead>
              </>
            ) : (
              <>
                <TableHead className='font-bold cursor-pointer' 
                onClick={() => handleSort('BattingAverage')}>AVG⇅</TableHead>
                <TableHead className='font-bold cursor-pointer' 
                onClick={() => handleSort('HomeRuns')}>HR⇅</TableHead>
                <TableHead className='font-bold cursor-pointer' 
                onClick={() => handleSort('RunsBattedIn')}>RBI⇅</TableHead>
                <TableHead className='font-bold cursor-pointer' 
                onClick={() => handleSort('Hits')}>Hits⇅</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedData.map((player) => (
            <TableRow key={player.PlayerID}>
              <TableCell className='font-bold text-left'>{player.Name}</TableCell>
              <TableCell>{player.Position}</TableCell>
              {pitcherOrHitterView === 'P' ? (
                <>
                  <TableCell>{player.EarnedRunAverage}</TableCell>
                  <TableCell>{player.PitchingStrikeouts}</TableCell>
                  <TableCell>{player.InningsPitchedDecimal}</TableCell>
                  <TableCell>{player.Wins}/{player.Losses}</TableCell>
                </>
              ) : (
                <>
                  <TableCell>{player.BattingAverage}</TableCell>
                  <TableCell>{player.HomeRuns}</TableCell>
                  <TableCell>{player.RunsBattedIn}</TableCell>
                  <TableCell>{player.Hits}</TableCell>
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