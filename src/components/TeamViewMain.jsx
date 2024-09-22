import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import {
  filterData,
  sortData,
  formatBattingAverage,
  formatStat
} from "@/lib/utils";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from '@/components/ui/table';
import {
  ScrollArea,
  ScrollBar
} from '@/components/ui/Scroll-Area';

const TeamViewMain = ({ pitcherOrHitterView }) => {
  const [data, setData] = useState([]);
  const [sortedHighToLow, setSortedHighToLow] = useState(false);
  const [sortField, setSortField] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.sportsdata.io/v3/mlb/stats/json/PlayerSeasonStatsByTeam/2024/DET?key=${import.meta.env.VITE_API_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response failed!');
        }
        return response.json();
      })
      .then((jsonData) => setData(jsonData))
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(true);
      });
  }, []);

  if (error) {
    return <p>Sorry champ, couldn&apos;t get
      your data.. Check back later.</p>;
  };

  const filteredData = filterData(data, pitcherOrHitterView);
  const sortedData = sortField ?
    sortData(filteredData, sortField, sortedHighToLow) : filteredData;

  const handleSort = (field) => {
    setSortedHighToLow(!sortedHighToLow);
    setSortField(field);
  };

  return (
    <>
      <ScrollArea className="w-full h-[450px] sm-w[650px] "> 
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
                    <TableCell>{formatBattingAverage(player.BattingAverage)}</TableCell>
                    <TableCell>{formatStat(player.HomeRuns)}</TableCell>
                    <TableCell>{formatStat(player.RunsBattedIn)}</TableCell>
                    <TableCell>{formatStat(player.Hits)}</TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar />
      </ScrollArea>
    </>
  );
};

TeamViewMain.propTypes = {
  pitcherOrHitterView: PropTypes.string.isRequired,
};

export default TeamViewMain;