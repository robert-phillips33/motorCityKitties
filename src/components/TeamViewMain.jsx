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
        <TableCaption>[DETROIT TIGERS ACTIVE ROSTER]</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-100px font-bold">NAME</TableHead>
            <TableHead className='font-medium text-left'>POSITION</TableHead>
            <TableHead className='font-medium text-left'>ERA</TableHead>
            <TableHead className='font-medium text-left'>K&apos;S</TableHead>
            <TableHead className='font-medium text-left'>IP</TableHead>
            <TableHead className='font-medium text-left'>W/L</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((filteredData) => (
            <TableRow key={filteredData.PlayerID}>
              <TableCell className='font-medium text-left'>
                {filteredData.Name}</TableCell>
              <TableCell className='font-medium text-left'
              >{filteredData.Position}</TableCell>
              <TableCell className='font-medium text-left'>
                {filteredData.EarnedRunAverage}</TableCell>
              <TableCell className='font-medium text-left'
              >{filteredData.Wins}</TableCell>
              <TableCell className='font-medium text-left'>
                {filteredData.InningsPitchedDecimal.toFixed(0)}</TableCell>
              <TableCell>{filteredData.Wins}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell></TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}

export default TeamViewMain;




