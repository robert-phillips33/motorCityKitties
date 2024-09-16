import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import mockData from '../assets/dummyData.json';
import { filterByPosition } from "@/lib/utils";
import { Button } from '@/components/ui/Button';
import { Switch } from '@/components/ui/Switch';
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

const TeamViewMain = () => {
  const [pitcherOrHitterView, setPitcherOrHitterView] = useState('Pitcher');
  const navigate = useNavigate();

  const filteredData = filterByPosition(mockData, pitcherOrHitterView);
  console.log(filteredData);
  
  return (
    <div>
      <h1>Detroit Tigers Team Stats</h1>

      {/* Switch to toggle between Pitcher and Position Player stats */}
      <div>
        <span>[pitch]</span>
        <Switch
          onCheckedChange={(checked) => setPitcherOrHitterView(checked ? 'PositionPlayer' : 'Pitcher')}
        />
        <span>[hit]</span>
      </div>

      {/* Table to display the filtered data */}
      <Table>
        <TableCaption>
          {pitcherOrHitterView === 'Pitcher'
            ? 'List of Pitcher Stats'
            : 'List of Position Player Stats'}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Position</TableHead>
            <TableHead className="w-[100px]">{pitcherOrHitterView === 'Pitcher' ? 'ERA' : 'AVG'}</TableHead>
            <TableHead>{pitcherOrHitterView === 'Pitcher' ? 'Strikeouts' : 'HR'}</TableHead>
            <TableHead className="text-right">{pitcherOrHitterView === 'Pitcher' ? 'W/L' : 'RBIs'}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((player) => (
            <TableRow key={player.PlayerID}>
              <TableCell className="font-medium">{player.Name}</TableCell>
              <TableCell>{player.Position}</TableCell>
              {pitcherOrHitterView === 'Pitcher' ? (
                <>
                  <TableCell>{player.EarnedRunAverage}</TableCell>
                  <TableCell>{player.PitchingStrikeouts}</TableCell>
                  <TableCell className="text-right">{player.Wins}/{player.Losses}</TableCell>
                </>
              ) : (
                <>
                  <TableCell>{player.BattingAverage}</TableCell>
                  <TableCell>{player.HomeRuns}</TableCell>
                  <TableCell className="text-right">{player.RunsBattedIn}</TableCell>
                </>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default TeamViewMain;




