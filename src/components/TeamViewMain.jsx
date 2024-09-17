import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
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

const TeamViewMain = ({ pitcherOrHitterView }) => {

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
            {pitcherOrHitterView === 'P' ? (
              <>
                <TableHead className='font-medium text-left'>ERA</TableHead>
                <TableHead className='font-medium text-left'>K&apos;S</TableHead>
                <TableHead className='font-medium text-left'>IP</TableHead>
                <TableHead className='font-medium text-left'>W/L</TableHead>
              </>
            ) : (
              <>
                <TableHead className='font-medium text-left'>AVG</TableHead>
                <TableHead className='font-medium text-left'>HR</TableHead>
                <TableHead className='font-medium text-left'>RBIs</TableHead>
                <TableHead className='font-medium text-left'>SB</TableHead>
              </>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((player) => (
            <TableRow key={player.PlayerID}>
              <TableCell className='font-medium text-left'>
                {player.Name}
              </TableCell>
              <TableCell className='font-medium text-left'>
                {player.Position}
              </TableCell>
              {pitcherOrHitterView === 'P' ? (
                <>
                  <TableCell className='font-medium text-left'>
                    {player.EarnedRunAverage}
                  </TableCell>
                  <TableCell className='font-medium text-left'>
                    {player.PitchingStrikeouts}
                  </TableCell>
                  <TableCell className='font-medium text-left'>
                    {player.InningsPitchedDecimal.toFixed(0)}
                  </TableCell>
                  <TableCell className='font-medium text-left'>
                    {player.Wins}/{player.Losses}
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell className='font-medium text-left'>
                    {player.BattingAverage}
                  </TableCell>
                  <TableCell className='font-medium text-left'>
                    {player.HomeRuns}
                  </TableCell>
                  <TableCell className='font-medium text-left'>
                    {player.RunsBattedIn}
                  </TableCell>
                  <TableCell className='font-medium text-left'>
                    {player.StolenBases}
                  </TableCell>
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




