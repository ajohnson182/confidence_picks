import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
// import HomePage from "HomePage"
// import { getCurrentUser } from 'aws-amplify/auth';
import {
  Card,
  Image,
  // Input,
  Flex,
  // Text,
  // useAuthenticator
} from '@aws-amplify/ui-react';

const client = generateClient<Schema>();


function App3() {
  // const { user, signOut } = useAuthenticator();
  const [allPicks, setAllPicks] = useState<any | null>([]);
  const [allUsers, setAllUsers] = useState<any | null>([]);
  const [allTeams, setAllTeams] = useState<any | null>([]);
  const [everything, setEverything] = useState<any | null>([]);
  
  //useEffect(() => {
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
    // ];

    // const teams = [
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd",
    //         "name": "Washington Commanders",
    //         "owner": null,
    //         "seed": 6,
    //         "team_id": "commanders",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/giphcy6ie9mxbnldntsf",
    //         "name": "Buffalo Bills",
    //         "owner": null,
    //         "seed": 2,
    //         "team_id": "bills",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/upload/f_auto/league/u6camnphqvjc6mku6u3c",
    //         "name": "Houson Texans",
    //         "owner": null,
    //         "seed": 4,
    //         "team_id": "texans",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz",
    //         "name": "Minnesota Vikings",
    //         "owner": null,
    //         "seed": 5,
    //         "team_id": "vikings",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/gppfvr7n8gljgjaqux2x",
    //         "name": "Green Bay Packers",
    //         "owner": null,
    //         "seed": 7,
    //         "team_id": "packers",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ayvwcmluj2ohkdlbiegi",
    //         "name": "Los Angeles Rams",
    //         "owner": null,
    //         "seed": 4,
    //         "team_id": "rams",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/puhrqgj71gobgdkdo6uq",
    //         "name": "Philidelphia Eagles",
    //         "owner": null,
    //         "seed": 2,
    //         "team_id": "eagles",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih",
    //         "name": "Tampa Bay Buccaneers",
    //         "owner": null,
    //         "seed": 3,
    //         "team_id": "buccaneers",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx",
    //         "name": "Pittsburgh Steelers",
    //         "owner": null,
    //         "seed": 5,
    //         "team_id": "steelers",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ucsdijmddsqcj1i9tddd",
    //         "name": "Baltimore Ravens",
    //         "owner": null,
    //         "seed": 3,
    //         "team_id": "ravens",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr",
    //         "name": "Detroit Lions",
    //         "owner": null,
    //         "seed": 1,
    //         "team_id": "lions",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ujshjqvmnxce8m4obmvs",
    //         "name": "Kansas City Chiefs",
    //         "owner": null,
    //         "seed": 1,
    //         "team_id": "chiefs",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/dhfidtn8jrumakbogeu4",
    //         "name": "Los Angeles Chargers",
    //         "owner": null,
    //         "seed": 6,
    //         "team_id": "chargers",
    //         "score": null
    //       },
    //       {
    //         "contest_id": "nfl_playoff_24-25",
    //         "data": null,
    //         "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/t0p7m5cjdjy18rnzzqbx",
    //         "name": "Denver Broncos",
    //         "owner": null,
    //         "seed": 7,
    //         "team_id": "broncos",
    //         "score": null
    //       }
    // ];
  //   function createUsers(users:any) {
  //     for(let i=0; i<users.length; i++) { 
  //       client.models.User.create({ 
  //         user_id: users[i].user_id,
  //         name: users[i].name
  //       });
  //     }
  //   }

  //   createUsers(users);

  //   function createPicks(picks:any) {
  //     for(let i=0; i<picks.length; i++) { 
  //       client.models.Pick.create({ 
  //         team_id: picks[i].team_id,
  //         confidence_score: picks[i].confidence_score,
  //         user_id: picks[i].user_id,
  //         league_id: picks[i].league_id
  //       });
  //     }
  //   }  

    // function createTeams(team:any) {
    //   for(let i=0; i<team.length; i++) { 
    //     client.models.Team.create({ 
    //       contest_id: team[i].contest_id,
    //       logo_ref: team[i].logo_ref,
    //       name: team[i].name,
    //       seed: team[i].seed,
    //       team_id: team[i].team_id,
    //       score: team[i].score
    //     });
    //   }
    // }  

    // createTeams(teams);
  //}, []);  

  useEffect(() => {
    async function listPicks() {
        // fetch all todos
        const { data } = await client.models.Pick.list();
        let picks_sorted = JSON.parse(JSON.stringify(data));
        picks_sorted = picks_sorted.sort((a:any, b:any) => b.confidence_score-a.confidence_score);
        setAllPicks(picks_sorted);
        setEverything(display());
    }
    listPicks();
  }, []);

  useEffect(() => {
    async function listUsers() {
        // fetch all todos
        const { data } = await client.models.User.list();
        setAllUsers(data);
    }
    listUsers();

  }, []);

  useEffect(() => {
    async function listTeams() {
        // fetch all todos
        const { data } = await client.models.Team.list();
        setAllTeams(data);
    }
    listTeams();
  }, []); 

  function display(){
    let ret:any = [];
    for(let a=0; a < allUsers.length; a++ ) {
      let user:any = JSON.parse(JSON.stringify(allUsers[a]));
      let u:any = JSON.parse(JSON.stringify(user));
      u.picks = [];
      u.score = 0;
      console.log(" 1." + user.user_id);
      // allPicks.map((pick:any) => {
      for(let b=0; b < allPicks.length; b++ ) {
          let pick:any = JSON.parse(JSON.stringify(allPicks[b]));
          if(pick.user_id == user.user_id) { 
            console.log(" 2." + user.user_id + " -> " + pick.team_id);
            for(let c=0; c < allTeams.length; c++ ) {
              let team:any = JSON.parse(JSON.stringify(allTeams[c]));
              console.log(" 3." + team.team_id);
              if(team.team_id == pick.team_id) {

                let p:any = JSON.parse(JSON.stringify(pick));
                p.team = {};
                p.score = 0;
                p.score = p.confidence_score * team.score;
                u.score += p.score;
                p.team = JSON.parse(JSON.stringify(team));
                u.picks.push(p);
              }
            }
          }
      }
      if (u.picks.length == 14) { 
        ret.push(u);
      }
    }
    return ret
  }

  return (
     <main>
       <div id="SingleProjectContainer"> 
       <div id="headline">
         <h2> Confidence Pick'em </h2> 
       </div>
       <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >

      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[0].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Flex direction="column" gap="0">       
                <Flex>
                  <h2>{pick.user_id}</h2> 
                  <h1>{pick.score}</h1>
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
       <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >

      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[0].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[0].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[0].confidence_score} x {pick.picks[0].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[1].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[1].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[1].confidence_score} x {pick.picks[1].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[2].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[2].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[2].confidence_score} x {pick.picks[2].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[3].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[3].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[3].confidence_score} x {pick.picks[3].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[4].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[4].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[4].confidence_score} x {pick.picks[4].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[5].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[5].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[5].confidence_score} x {pick.picks[5].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[6].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[6].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[6].confidence_score} x {pick.picks[6].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[7].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[7].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[7].confidence_score} x {pick.picks[7].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[8].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[8].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[8].confidence_score} x {pick.picks[8].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[9].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[9].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[9].confidence_score} x {pick.picks[9].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[10].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[10].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[10].confidence_score} x {pick.picks[10].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[11].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[11].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[11].confidence_score} x {pick.picks[11].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[12].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[12].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[12].confidence_score} x {pick.picks[12].team.score}</h2> 
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {everything.map((pick:any) => (
          <Card width="13em" variation="elevated" key={pick.picks[13].team_id + pick.user_id}>
            <Flex alignItems="flex-start">
              <Image src={pick.picks[13].team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
               
                <Flex>
                  <h2>{pick.picks[13].confidence_score} (x {pick.picks[13].team.score})</h2>
                </Flex> 
              </Flex>
            </Flex>
          </Card>
      ))}
      </Flex> 
      </div>
    </main>
  );
}

export default App3;
