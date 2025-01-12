import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Link, useParams } from 'react-router-dom';
// import HomePage from "HomePage"
// import { getCurrentUser } from 'aws-amplify/auth';
import {
  // Card,
  Image,
  // Input,
  Flex,
  Text,
  // useAuthenticator
} from '@aws-amplify/ui-react';

const client = generateClient<Schema>();


function App3() {
  // const { user, signOut } = useAuthenticator();
  const [allPicks, setAllPicks] = useState<any | null>([]);
  const [allUsers, setAllUsers] = useState<any | null>([]);
  const [allTeams, setAllTeams] = useState<any | null>([]);

  const [everything, setEverything] = useState<any | null>([]);
  const ranks = [14,13,12,11,10,9,8,7,6,5,4,3,2,1];

  let { league_id } = useParams();

  useEffect(() => {
    async function listPicks() {
        // fetch all todos
        const { data } = await client.models.Pick.list({filter:{league_id: { eq: league_id}}, limit: 200});
        let picks_sorted = JSON.parse(JSON.stringify(data));
        picks_sorted = picks_sorted.sort((a:any, b:any) => b.confidence_score-a.confidence_score);
        setAllPicks(picks_sorted);
        // console.log(picks_sorted);
    }
    listPicks();
  }, [league_id]);

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
        setEverything(display());
    }
    listTeams();
  }, [allUsers,allPicks]); 

  // setEverything(display());

  function display(){
    let ret:any = [];
    for(let a=0; a < allUsers.length; a++ ) {
      let user:any = JSON.parse(JSON.stringify(allUsers[a]));
      let u:any = JSON.parse(JSON.stringify(user));
      u.picks = [];
      u.score = 0;
      // console.log(" 1." + user.user_id);
      // allPicks.map((pick:any) => {
      for(let b=0; b < allPicks.length; b++ ) {
          let pick:any = JSON.parse(JSON.stringify(allPicks[b]));
          if(pick.user_id == user.user_id) { 
            // console.log(" 2." + user.user_id + " -> " + pick.team_id);
            for(let c=0; c < allTeams.length; c++ ) {
              let team:any = JSON.parse(JSON.stringify(allTeams[c]));
              // console.log(" 3." + team.team_id);
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
      // console.log(JSON.stringify(u));
      if (u.picks.length == 14) { 
        ret.push(u);
      }
    }
    let sorted = JSON.parse(JSON.stringify(ret));
    sorted = sorted.sort((a1:any, b1:any) => b1.score-a1.score);
    return sorted
  }

  return (
     <main>
       <div id="SingleProjectContainer"> 
       <div id="headline">
       <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="flex-start"
            wrap="wrap"
            gap="xs"
          >
          <Link to="/ava">
            <button> AVA </button>
          </Link>
          <Link to="/cnutfxc">
            <button> CNU TFXC </button>
          </Link>
         
      </Flex>
         <h1> {league_id} - NFL Playoff Confidence Pick'em </h1> 
       </div>
       <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >

      {ranks.map((p:any) => (
         <Flex width="4vw" key={"header-"+p}>
          <Flex alignItems="center">
            <Text text-align="center">{p}</Text>
          </Flex>
        </Flex>
      ))}

      {everything.map((pick:any) => (
        <Flex direction="column" gap="0">       
            <Flex width="13vw"  key={pick.user_id}>
              <Flex alignItems="flex-start">
                <Flex direction="row" gap="10">       
                  <Text fontWeight="semibold"> {pick.user_id}</Text> 
                  <Flex>
                    <Text fontWeight="bold">{pick.score}</Text>
                  </Flex> 
                  
                </Flex>
              </Flex>
            </Flex>
            <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="flex-start"
            wrap="wrap"
            gap="xs"
          >
            {pick.picks.map((p:any) => (
               <Flex width="4vw" key={p.team_id + pick.user_id} opacity={p.team.dead ? "0.2" : 1}>
                  <Image src={p.team.logo_ref}
                    alt="Amplify" width="100%" />
              </Flex>
            ))}
          </Flex> 
         </Flex>
      ))}
      </Flex>
             </div>
    </main>
  );
}

export default App3;
