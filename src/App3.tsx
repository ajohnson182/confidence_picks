import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
// import HomePage from "HomePage"
// import { getCurrentUser } from 'aws-amplify/auth';
import {
  // Card,
  // Image,
  // Input,
  // Flex,
  // Text,
  // useAuthenticator
} from '@aws-amplify/ui-react';

const client = generateClient<Schema>();


function App3() {
  // const { user, signOut } = useAuthenticator();
  const [allPicks, setAllPicks] = useState<any | null>([]);
  const [allUsers, setAllUsers] = useState<any | null>([]);
  const [allTeams, setAllTeams] = useState<any | null>([]);
  
  // useEffect(() => {
  //   const picks = [
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "texans",
  //         "confidence_score": 1,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "steelers",
  //         "confidence_score": 2,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "rams",
  //         "confidence_score": 3,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "eagles",
  //         "confidence_score": 4,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "packers",
  //         "confidence_score": 5,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "commanders",
  //         "confidence_score": 6,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "chargers",
  //         "confidence_score": 7,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "broncos",
  //         "confidence_score": 8,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "bills",
  //         "confidence_score": 9,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "buccaneers",
  //         "confidence_score": 10,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "vikings",
  //         "confidence_score": 11,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "lions",
  //         "confidence_score": 12,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "chiefs",
  //         "confidence_score": 13,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Michelle",
  //         "team_id": "ravens",
  //         "confidence_score": 14,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "broncos",
  //         "confidence_score": 1,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "texans",
  //         "confidence_score": 2,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "vikings",
  //         "confidence_score": 3,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "steelers",
  //         "confidence_score": 4,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "packers",
  //         "confidence_score": 5,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "buccaneers",
  //         "confidence_score": 6,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "chargers",
  //         "confidence_score": 7,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "rams",
  //         "confidence_score": 8,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "commanders",
  //         "confidence_score": 9,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "eagles",
  //         "confidence_score": 10,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "chiefs",
  //         "confidence_score": 11,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "bills",
  //         "confidence_score": 12,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "lions",
  //         "confidence_score": 13,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "AJ",
  //         "team_id": "ravens",
  //         "confidence_score": 14,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "texans",
  //         "confidence_score": 1,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "steelers",
  //         "confidence_score": 2,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "broncos",
  //         "confidence_score": 3,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "packers",
  //         "confidence_score": 4,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "chargers",
  //         "confidence_score": 5,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "commanders",
  //         "confidence_score": 6,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "buccaneers",
  //         "confidence_score": 7,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "rams",
  //         "confidence_score": 8,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "vikings",
  //         "confidence_score": 9,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "chiefs",
  //         "confidence_score": 10,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "bills",
  //         "confidence_score": 11,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "eagles",
  //         "confidence_score": 12,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "ravens",
  //         "confidence_score": 13,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Brad b",
  //         "team_id": "lions",
  //         "confidence_score": 14,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "steelers",
  //         "confidence_score": 1,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "broncos",
  //         "confidence_score": 2,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "texans",
  //         "confidence_score": 3,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "commanders",
  //         "confidence_score": 4,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "packers",
  //         "confidence_score": 5,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "rams",
  //         "confidence_score": 6,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "vikings",
  //         "confidence_score": 7,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "chiefs",
  //         "confidence_score": 8,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "chargers",
  //         "confidence_score": 9,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "ravens",
  //         "confidence_score": 10,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "buccaneers",
  //         "confidence_score": 11,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "eagles",
  //         "confidence_score": 12,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "bills",
  //         "confidence_score": 13,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Laser Armcannon",
  //         "team_id": "lions",
  //         "confidence_score": 14,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "broncos",
  //         "confidence_score": 1,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "texans",
  //         "confidence_score": 2,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "steelers",
  //         "confidence_score": 3,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "buccaneers",
  //         "confidence_score": 4,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "packers",
  //         "confidence_score": 5,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "rams",
  //         "confidence_score": 6,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "chargers",
  //         "confidence_score": 7,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "commanders",
  //         "confidence_score": 8,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "vikings",
  //         "confidence_score": 9,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "chiefs",
  //         "confidence_score": 10,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "lions",
  //         "confidence_score": 11,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "ravens",
  //         "confidence_score": 12,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "eagles",
  //         "confidence_score": 13,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Better Brad",
  //         "team_id": "bills",
  //         "confidence_score": 14,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "rams",
  //         "confidence_score": 1,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "texans",
  //         "confidence_score": 2,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "steelers",
  //         "confidence_score": 3,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "broncos",
  //         "confidence_score": 4,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "buccaneers",
  //         "confidence_score": 5,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "chargers",
  //         "confidence_score": 6,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "commanders",
  //         "confidence_score": 7,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "packers",
  //         "confidence_score": 8,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "chiefs",
  //         "confidence_score": 9,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "vikings",
  //         "confidence_score": 10,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "eagles",
  //         "confidence_score": 11,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "bills",
  //         "confidence_score": 12,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "lions",
  //         "confidence_score": 13,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Sam",
  //         "team_id": "ravens",
  //         "confidence_score": 14,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "broncos",
  //         "confidence_score": 1,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "steelers",
  //         "confidence_score": 2,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "packers",
  //         "confidence_score": 3,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "texans",
  //         "confidence_score": 4,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "buccaneers",
  //         "confidence_score": 5,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "rams",
  //         "confidence_score": 6,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "commanders",
  //         "confidence_score": 7,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "chargers",
  //         "confidence_score": 8,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "vikings",
  //         "confidence_score": 9,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "ravens",
  //         "confidence_score": 10,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "lions",
  //         "confidence_score": 11,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "chiefs",
  //         "confidence_score": 12,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "eagles",
  //         "confidence_score": 13,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "Danny",
  //         "team_id": "bills",
  //         "confidence_score": 14,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "broncos",
  //         "confidence_score": 1,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "packers",
  //         "confidence_score": 2,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "texans",
  //         "confidence_score": 3,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "steelers",
  //         "confidence_score": 4,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "eagles",
  //         "confidence_score": 5,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "buccaneers",
  //         "confidence_score": 6,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "ravens",
  //         "confidence_score": 7,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "vikings",
  //         "confidence_score": 8,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "rams",
  //         "confidence_score": 9,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "chiefs",
  //         "confidence_score": 10,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "commanders",
  //         "confidence_score": 11,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "chargers",
  //         "confidence_score": 12,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "bills",
  //         "confidence_score": 13,
  //         "league_id": "ava"
  //     },
  //     {
  //         "user_id": "gemdizzle",
  //         "team_id": "lions",
  //         "confidence_score": 14,
  //         "league_id": "ava"
  //     },
  //         {
  //         "user_id": "Mac",
  //         "team_id": "texans",
  //         "confidence_score": 1,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "steelers",
  //         "confidence_score": 2,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "broncos",
  //         "confidence_score": 3,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "buccaneers",
  //         "confidence_score": 4,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "commanders",
  //         "confidence_score": 5,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "packers",
  //         "confidence_score": 6,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "chargers",
  //         "confidence_score": 7,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "rams",
  //         "confidence_score": 8,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "eagles",
  //         "confidence_score": 9,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "vikings",
  //         "confidence_score": 10,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "chiefs",
  //         "confidence_score": 11,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "ravens",
  //         "confidence_score": 12,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "bills",
  //         "confidence_score": 13,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Mac",
  //         "team_id": "lions",
  //         "confidence_score": 14,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "broncos",
  //         "confidence_score": 1,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "commanders",
  //         "confidence_score": 2,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "texans",
  //         "confidence_score": 3,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "steelers",
  //         "confidence_score": 4,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "packers",
  //         "confidence_score": 5,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "vikings",
  //         "confidence_score": 6,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "buccaneers",
  //         "confidence_score": 7,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "rams",
  //         "confidence_score": 8,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "chargers",
  //         "confidence_score": 9,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "chiefs",
  //         "confidence_score": 10,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "eagles",
  //         "confidence_score": 11,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "ravens",
  //         "confidence_score": 12,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "bills",
  //         "confidence_score": 13,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Dmac",
  //         "team_id": "lions",
  //         "confidence_score": 14,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "steelers",
  //         "confidence_score": 1,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "texans",
  //         "confidence_score": 2,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "broncos",
  //         "confidence_score": 3,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "buccaneers",
  //         "confidence_score": 4,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "rams",
  //         "confidence_score": 5,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "commanders",
  //         "confidence_score": 6,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "vikings",
  //         "confidence_score": 7,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "chargers",
  //         "confidence_score": 8,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "packers",
  //         "confidence_score": 9,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "chiefs",
  //         "confidence_score": 10,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "lions",
  //         "confidence_score": 11,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "bills",
  //         "confidence_score": 12,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "eagles",
  //         "confidence_score": 13,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Andrew",
  //         "team_id": "ravens",
  //         "confidence_score": 14,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "steelers",
  //         "confidence_score": 1,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "texans",
  //         "confidence_score": 2,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "buccaneers",
  //         "confidence_score": 3,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "broncos",
  //         "confidence_score": 4,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "vikings",
  //         "confidence_score": 5,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "rams",
  //         "confidence_score": 6,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "packers",
  //         "confidence_score": 7,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "chiefs",
  //         "confidence_score": 8,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "lions",
  //         "confidence_score": 9,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "eagles",
  //         "confidence_score": 10,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "chargers",
  //         "confidence_score": 11,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "commanders",
  //         "confidence_score": 12,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "ravens",
  //         "confidence_score": 13,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Snorey",
  //         "team_id": "bills",
  //         "confidence_score": 14,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "steelers",
  //         "confidence_score": 1,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "texans",
  //         "confidence_score": 2,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "rams",
  //         "confidence_score": 3,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "broncos",
  //         "confidence_score": 4,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "commanders",
  //         "confidence_score": 5,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "buccaneers",
  //         "confidence_score": 6,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "chargers",
  //         "confidence_score": 7,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "eagles",
  //         "confidence_score": 8,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "packers",
  //         "confidence_score": 9,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "ravens",
  //         "confidence_score": 10,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "bills",
  //         "confidence_score": 11,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "chiefs",
  //         "confidence_score": 12,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "vikings",
  //         "confidence_score": 13,
  //         "league_id": "cnutfxc"
  //     },
  //     {
  //         "user_id": "Jack",
  //         "team_id": "lions",
  //         "confidence_score": 14,
  //         "league_id": "cnutfxc"
  //     }
  //   ];

  //   const users = [
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "Michelle",
  //       "name": "Michelle"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "AJ",
  //       "name": "AJ"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Brad b",
  //       "name": "Brad b"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Laser Armcannon",
  //       "name": "Laser Armcannon"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Better Brad",
  //       "name": "Better Brad"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Sam",
  //       "name": "Sam"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "Danny",
  //       "name": "Danny"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //   {
  //       "user_id": "gemdizzle",
  //       "name": "gemdizzle"
  //   },
  //       {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Mac",
  //       "name": "Mac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Dmac",
  //       "name": "Dmac"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Andrew",
  //       "name": "Andrew"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Snorey",
  //       "name": "Snorey"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   },
  //   {
  //       "user_id": "Jack",
  //       "name": "Jack"
  //   }
  //   ];

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

  //   createPicks(picks);
  // }, []);

  useEffect(() => {
    async function listPicks() {
        // fetch all todos
        const { data } = await client.models.Pick.list();
        let picks_sorted = JSON.parse(JSON.stringify(data));
        picks_sorted = picks_sorted.sort((a:any, b:any) => b.confidence_score-a.confidence_score);
        setAllPicks(picks_sorted);
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
    allUsers.map((user:any) => {
      let u:any = JSON.parse(JSON.stringify(user));
      u.picks = [];
      allPicks.map((pick:any) => {
          if(pick.user_id == user.user_id) { 
            allTeams.map((team:any) => {
              if(team.team_id == pick.team_id) {
                let p:any = JSON.parse(JSON.stringify(pick));
                p.team = {};
                p.team = team;
                u.picks.push(p);
              }
            })
          }
      });
      ret.push(u);
    });
    return ret
  }

  return (
     <main>
       <div id="SingleProjectContainer">
       <div id="headline">
         <h2> Confidence Pick'em </h2> 
       </div>
        {display().map((pick:any) => (
          <li key={pick.user_id + pick.team_id}>{JSON.stringify(pick)}</li>
        ))}
      </div>
    </main>
  );
}

export default App3;
