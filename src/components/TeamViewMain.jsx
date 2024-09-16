import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import mockData from '../assets/mockData.json';
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
      <Table>
        <TableCaption>DETROIT TIGERS ACTIVE ROSTER</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">NAME</TableHead>
            <TableHead>POSITION</TableHead>
            <TableHead>ERA</TableHead>
            <TableHead>K&apos;S</TableHead>
            <TableHead>IP</TableHead>
            <TableHead className="text-right">W/L</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((filteredData) => (
            <TableRow key={filteredData.PlayerID}>
              <TableCell className="font-medium text-left">{filteredData.Name}</TableCell>
              <TableCell>{filteredData.Position}</TableCell>
              <TableCell>{filteredData.EarnedRunAverage}</TableCell>
              <TableCell>{filteredData.Wins}</TableCell>
              <TableCell>{filteredData.InningsPitchedDecimal.toFixed(0)}</TableCell>
              <TableCell>{filteredData.Wins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
  };
  
export default TeamViewMain;




