// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
// import Users from "./Users"
import Leagues from "./Leagues"
import Picks from "./Picks"
// import { getCurrentUser } from 'aws-amplify/auth';
import {
//   // Card,
//   // Image,
//   // Input,
//   // Flex,
//   // Text,
 // useAuthenticator
} from '@aws-amplify/ui-react';

// const client = generateClient<Schema>();


function App2() {
  // const { user, signOut } = useAuthenticator();

  // console.log('render');
  // const picks = [
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "texans",
  //       "confidence_score": 1,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "steelers",
  //       "confidence_score": 2,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "rams",
  //       "confidence_score": 3,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "eagles",
  //       "confidence_score": 4,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "packers",
  //       "confidence_score": 5,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "commanders",
  //       "confidence_score": 6,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "chargers",
  //       "confidence_score": 7,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "broncos",
  //       "confidence_score": 8,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "bills",
  //       "confidence_score": 9,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "buccaneers",
  //       "confidence_score": 10,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "vikings",
  //       "confidence_score": 11,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "lions",
  //       "confidence_score": 12,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "chiefs",
  //       "confidence_score": 13,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "team_id": "ravens",
  //       "confidence_score": 14,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "broncos",
  //       "confidence_score": 1,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "texans",
  //       "confidence_score": 2,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "vikings",
  //       "confidence_score": 3,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "steelers",
  //       "confidence_score": 4,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "packers",
  //       "confidence_score": 5,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "buccaneers",
  //       "confidence_score": 6,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "chargers",
  //       "confidence_score": 7,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "rams",
  //       "confidence_score": 8,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "commanders",
  //       "confidence_score": 9,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "eagles",
  //       "confidence_score": 10,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "chiefs",
  //       "confidence_score": 11,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "bills",
  //       "confidence_score": 12,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "lions",
  //       "confidence_score": 13,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "team_id": "ravens",
  //       "confidence_score": 14,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "texans",
  //       "confidence_score": 1,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "steelers",
  //       "confidence_score": 2,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "broncos",
  //       "confidence_score": 3,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "packers",
  //       "confidence_score": 4,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "chargers",
  //       "confidence_score": 5,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "commanders",
  //       "confidence_score": 6,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "buccaneers",
  //       "confidence_score": 7,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "rams",
  //       "confidence_score": 8,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "vikings",
  //       "confidence_score": 9,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "chiefs",
  //       "confidence_score": 10,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "bills",
  //       "confidence_score": 11,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "eagles",
  //       "confidence_score": 12,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "ravens",
  //       "confidence_score": 13,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "team_id": "lions",
  //       "confidence_score": 14,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "steelers",
  //       "confidence_score": 1,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "broncos",
  //       "confidence_score": 2,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "texans",
  //       "confidence_score": 3,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "commanders",
  //       "confidence_score": 4,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "packers",
  //       "confidence_score": 5,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "rams",
  //       "confidence_score": 6,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "vikings",
  //       "confidence_score": 7,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "chiefs",
  //       "confidence_score": 8,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "chargers",
  //       "confidence_score": 9,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "ravens",
  //       "confidence_score": 10,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "buccaneers",
  //       "confidence_score": 11,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "eagles",
  //       "confidence_score": 12,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "bills",
  //       "confidence_score": 13,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "team_id": "lions",
  //       "confidence_score": 14,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "broncos",
  //       "confidence_score": 1,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "texans",
  //       "confidence_score": 2,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "steelers",
  //       "confidence_score": 3,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "buccaneers",
  //       "confidence_score": 4,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "packers",
  //       "confidence_score": 5,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "rams",
  //       "confidence_score": 6,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "chargers",
  //       "confidence_score": 7,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "commanders",
  //       "confidence_score": 8,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "vikings",
  //       "confidence_score": 9,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "chiefs",
  //       "confidence_score": 10,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "lions",
  //       "confidence_score": 11,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "ravens",
  //       "confidence_score": 12,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "eagles",
  //       "confidence_score": 13,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "team_id": "bills",
  //       "confidence_score": 14,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "rams",
  //       "confidence_score": 1,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "texans",
  //       "confidence_score": 2,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "steelers",
  //       "confidence_score": 3,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "broncos",
  //       "confidence_score": 4,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "buccaneers",
  //       "confidence_score": 5,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "chargers",
  //       "confidence_score": 6,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "commanders",
  //       "confidence_score": 7,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "packers",
  //       "confidence_score": 8,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "chiefs",
  //       "confidence_score": 9,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "vikings",
  //       "confidence_score": 10,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "eagles",
  //       "confidence_score": 11,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "bills",
  //       "confidence_score": 12,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "lions",
  //       "confidence_score": 13,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "team_id": "ravens",
  //       "confidence_score": 14,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "broncos",
  //       "confidence_score": 1,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "steelers",
  //       "confidence_score": 2,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "packers",
  //       "confidence_score": 3,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "texans",
  //       "confidence_score": 4,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "buccaneers",
  //       "confidence_score": 5,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "rams",
  //       "confidence_score": 6,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "commanders",
  //       "confidence_score": 7,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "chargers",
  //       "confidence_score": 8,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "vikings",
  //       "confidence_score": 9,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "ravens",
  //       "confidence_score": 10,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "lions",
  //       "confidence_score": 11,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "chiefs",
  //       "confidence_score": 12,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "eagles",
  //       "confidence_score": 13,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "team_id": "bills",
  //       "confidence_score": 14,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "broncos",
  //       "confidence_score": 1,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "packers",
  //       "confidence_score": 2,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "texans",
  //       "confidence_score": 3,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "steelers",
  //       "confidence_score": 4,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "eagles",
  //       "confidence_score": 5,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "buccaneers",
  //       "confidence_score": 6,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "ravens",
  //       "confidence_score": 7,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "vikings",
  //       "confidence_score": 8,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "rams",
  //       "confidence_score": 9,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "chiefs",
  //       "confidence_score": 10,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "commanders",
  //       "confidence_score": 11,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "chargers",
  //       "confidence_score": 12,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "bills",
  //       "confidence_score": 13,
  //       "league_id": "ava"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "team_id": "lions",
  //       "confidence_score": 14,
  //       "league_id": "ava"
  //   },
  //       {
  //       "user_id": "Mac",
  //       "team_id": "texans",
  //       "confidence_score": 1,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "steelers",
  //       "confidence_score": 2,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "broncos",
  //       "confidence_score": 3,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "buccaneers",
  //       "confidence_score": 4,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "commanders",
  //       "confidence_score": 5,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "packers",
  //       "confidence_score": 6,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "chargers",
  //       "confidence_score": 7,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "rams",
  //       "confidence_score": 8,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "eagles",
  //       "confidence_score": 9,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "vikings",
  //       "confidence_score": 10,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "chiefs",
  //       "confidence_score": 11,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "ravens",
  //       "confidence_score": 12,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "bills",
  //       "confidence_score": 13,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "team_id": "lions",
  //       "confidence_score": 14,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "broncos",
  //       "confidence_score": 1,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "commanders",
  //       "confidence_score": 2,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "texans",
  //       "confidence_score": 3,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "steelers",
  //       "confidence_score": 4,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "packers",
  //       "confidence_score": 5,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "vikings",
  //       "confidence_score": 6,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "buccaneers",
  //       "confidence_score": 7,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "rams",
  //       "confidence_score": 8,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "chargers",
  //       "confidence_score": 9,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "chiefs",
  //       "confidence_score": 10,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "eagles",
  //       "confidence_score": 11,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "ravens",
  //       "confidence_score": 12,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "bills",
  //       "confidence_score": 13,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "team_id": "lions",
  //       "confidence_score": 14,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "steelers",
  //       "confidence_score": 1,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "texans",
  //       "confidence_score": 2,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "broncos",
  //       "confidence_score": 3,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "buccaneers",
  //       "confidence_score": 4,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "rams",
  //       "confidence_score": 5,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "commanders",
  //       "confidence_score": 6,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "vikings",
  //       "confidence_score": 7,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "chargers",
  //       "confidence_score": 8,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "packers",
  //       "confidence_score": 9,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "chiefs",
  //       "confidence_score": 10,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "lions",
  //       "confidence_score": 11,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "bills",
  //       "confidence_score": 12,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "eagles",
  //       "confidence_score": 13,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "team_id": "ravens",
  //       "confidence_score": 14,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "steelers",
  //       "confidence_score": 1,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "texans",
  //       "confidence_score": 2,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "buccaneers",
  //       "confidence_score": 3,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "broncos",
  //       "confidence_score": 4,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "vikings",
  //       "confidence_score": 5,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "rams",
  //       "confidence_score": 6,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "packers",
  //       "confidence_score": 7,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "chiefs",
  //       "confidence_score": 8,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "lions",
  //       "confidence_score": 9,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "eagles",
  //       "confidence_score": 10,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "chargers",
  //       "confidence_score": 11,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "commanders",
  //       "confidence_score": 12,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "ravens",
  //       "confidence_score": 13,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "team_id": "bills",
  //       "confidence_score": 14,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "steelers",
  //       "confidence_score": 1,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "texans",
  //       "confidence_score": 2,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "rams",
  //       "confidence_score": 3,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "broncos",
  //       "confidence_score": 4,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "commanders",
  //       "confidence_score": 5,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "buccaneers",
  //       "confidence_score": 6,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "chargers",
  //       "confidence_score": 7,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "eagles",
  //       "confidence_score": 8,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "packers",
  //       "confidence_score": 9,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "ravens",
  //       "confidence_score": 10,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "bills",
  //       "confidence_score": 11,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "chiefs",
  //       "confidence_score": 12,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "vikings",
  //       "confidence_score": 13,
  //       "league_id": "cnutfxc"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "team_id": "lions",
  //       "confidence_score": 14,
  //       "league_id": "cnutfxc"
  //   }
  // ]
  // for(let i=0; i<picks.length; i++) { 
  //     client.models.Pick.create({ 
  //       team_id: picks[i].team_id,
  //       confidence_score: picks[i].confidence_score,
  //       user_id: picks[i].user_id,
  //       league_id: picks[i].league_id
  //     });
      // client.models.Pick.update({ 
      //   team_id: picks[i].team_id,
      //   confidence_score: picks[i].score,
      //   user_id: user_id,
      //   league_id: "1"
      // });
  // const saveSelections = async () => {
  //   try {
  //     await API.post('confidenceAPI', '/selections', {
  //       body: { selections: teams },
  //     });
  //     alert('Selections saved!');
  //   } catch (err) {
  //     console.error('Error saving selections', err);
  //   }
  // };

  return (
    <main>
    <div id="SingleProjectContainer">
    <Leagues />
    <Picks />
    {/*<a id="logout" onClick={signOut}>(Sign out)</a>*/}
    </div>
    </main>
  );
}

export default App2;
