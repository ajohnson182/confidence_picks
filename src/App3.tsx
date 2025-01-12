import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
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
  const ranks = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

  useEffect(() => {
    async function listPicks() {
        // fetch all todos
        const { data } = await client.models.Pick.list({limit: 200});
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
      console.log(JSON.stringify(u));
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
         <h1> Confidence Pick'em </h1> 
         
       
       </div>
       <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      <Flex width="8vw"  key="blank">
        <Flex alignItems="flex-start">
          <Flex direction="column" gap="0">       
            <Flex>
            </Flex> 
          </Flex>
        </Flex>
      </Flex>
      {ranks.map((p:any) => (
         <Flex width="5vw" key={"header-"+p}>
          <Flex alignItems="center">
            <Text text-align="center">{p}</Text>
          </Flex>
        </Flex>
      ))}

      {everything.map((pick:any) => (
          <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="flex-start"
            wrap="wrap"
            gap="xs"
          >
            <Flex width="5vw"  key={pick.user_id}>
              <Flex alignItems="flex-start">
                <Flex direction="column" gap="0">       
                  <Text>{pick.user_id + '-' +pick.picks[0].league_id}</Text> 
                  <Flex>
                    <h1>{pick.score}</h1>
                  </Flex> 
                  
                </Flex>
              </Flex>
            </Flex>
            {pick.picks.map((p:any) => (
               <Flex width="5vw" key={p.team_id + pick.user_id} opacity={p.team.dead ? "0.2" : 1}>
                <Flex alignItems="flex-start">
                  <Image src={p.team.logo_ref}
                    alt="Amplify" width="100%" />
                  <Flex direction="column" gap="0">       
                   
                    
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex> 
      ))}
      </Flex>
             </div>
    </main>
  );
}

export default App3;
