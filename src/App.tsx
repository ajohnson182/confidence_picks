// import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
// import HomePage from "HomePage"
// import { getCurrentUser } from 'aws-amplify/auth';
import {
  Card,
  Image,
  Input,
  Flex,
  Text,
  useAuthenticator
} from '@aws-amplify/ui-react';

const client = generateClient<Schema>();


function App() {
  const { user, signOut } = useAuthenticator();

  const teams = [
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd",
          "name": "Washington Commanders",
          "owner": null,
          "seed": 6,
          "team_id": "commanders",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/giphcy6ie9mxbnldntsf",
          "name": "Buffalo Bills",
          "owner": null,
          "seed": 2,
          "team_id": "bills",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/upload/f_auto/league/u6camnphqvjc6mku6u3c",
          "name": "Houson Texans",
          "owner": null,
          "seed": 4,
          "team_id": "texans",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz",
          "name": "Minnesota Vikings",
          "owner": null,
          "seed": 5,
          "team_id": "vikings",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/gppfvr7n8gljgjaqux2x",
          "name": "Green Bay Packers",
          "owner": null,
          "seed": 7,
          "team_id": "packers",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ayvwcmluj2ohkdlbiegi",
          "name": "Los Angeles Rams",
          "owner": null,
          "seed": 4,
          "team_id": "rams",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/puhrqgj71gobgdkdo6uq",
          "name": "Philidelphia Eagles",
          "owner": null,
          "seed": 2,
          "team_id": "eagles",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih",
          "name": "Tampa Bay Buccaneers",
          "owner": null,
          "seed": 3,
          "team_id": "buccaneers",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx",
          "name": "Pittsburgh Steelers",
          "owner": null,
          "seed": 5,
          "team_id": "steelers",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ucsdijmddsqcj1i9tddd",
          "name": "Baltimore Ravens",
          "owner": null,
          "seed": 3,
          "team_id": "ravens",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr",
          "name": "Detroit Lions",
          "owner": null,
          "seed": 1,
          "team_id": "lions",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ujshjqvmnxce8m4obmvs",
          "name": "Kansas City Chiefs",
          "owner": null,
          "seed": 1,
          "team_id": "chiefs",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/dhfidtn8jrumakbogeu4",
          "name": "Los Angeles Chargers",
          "owner": null,
          "seed": 6,
          "team_id": "chargers",
          "score": null
        },
        {
          "contest_id": "nfl_playoff_24-25",
          "data": null,
          "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/t0p7m5cjdjy18rnzzqbx",
          "name": "Denver Broncos",
          "owner": null,
          "seed": 7,
          "team_id": "broncos",
          "score": null
        }
  ];


  function createPicks(picks:any) {
    let user_id = "blank";
    if(user !== undefined && user.signInDetails !== undefined && user.signInDetails.loginId !== undefined) {
      user_id = user.signInDetails.loginId;
    }
    for(let i=0; i<picks.length; i++) { 
      client.models.Pick.create({ 
        team_id: picks[i].team_id,
        confidence_score: picks[i].score,
        user_id: user_id,
        league_id: "1"
      });
      client.models.Pick.update({ 
        team_id: picks[i].team_id,
        confidence_score: picks[i].score,
        user_id: user_id,
        league_id: "1"
      });
    }
  }

  let picks = JSON.parse(JSON.stringify(teams));


  function validateScore(event:any) {
    // const scoresAssigned = new Set();
    const select = event.currentTarget;
    const selectedScore = parseInt(select.value);
    let errors = 0;
    let unique = 0;
    picks = JSON.parse(JSON.stringify(teams));
    console.log(select);

    if (!isNaN(selectedScore) && selectedScore > 0 && selectedScore < 15) {
      console.log(selectedScore);
    } 
    
    for(let i=0; i<teams.length; i++) { 
      let el:any = document.getElementById(teams[i].team_id);  
      { 
        if(select.id != teams[i].team_id && selectedScore === el.value) {
          // @ts-ignore: Object is possibly 'null'.
          // select.hasError = "true";
          // el.hasError = true;
          errors=errors+1;
        } 
        else {
          unique=unique+1;
        }
      }
    }

    if(errors == 0 && unique == 14) {
      for(let i=0; i<teams.length; i++) { 
        let el:any = document.getElementById(teams[i].team_id);
        let val:any = el!.value;
        picks[i].score = val;
      }
    }
  }

  const validateScores = () => {
    let scores = [];
    for(let i=0; i<teams.length; i++) { 
      let el:any = document.getElementById(teams[i].team_id);
      let val:any = el!.value;
      picks[i].score = val;
    }
    for(let i=0; i<picks.length; i++) { 
      const selectedScore = parseInt(picks[i].score);
      if (!isNaN(selectedScore) && selectedScore > 0 && selectedScore < 15) {
        scores.push(selectedScore);
      } 
    }
    if(scores.length != 14){
      alert(`Please make sure your have scored all 14 teams.`);
      return
    } 
    if (scores.filter((value, index, array) => array.indexOf(value) === index).length != 14) {
      alert(`Please make sure you have only used each confidence score once.`);
      return
    }
      
    createPicks(picks);
  };

  return (
    <main>
        
      <div id="SingleProjectContainer">
      <div id="headline">
        <span> Welcome, {user?.signInDetails?.loginId}. <a id="logout" onClick={signOut}>(Sign out)</a></span> 
        <h2> Confidence Pick'em </h2> 
        <ul>
          <li id="listheader">Rules</li> 
          <li>Assign all 14 playoff teams a confidence score of 1-{teams.length}.</li> 
          <li>You can only use each confidence rating once.</li> 
          <li>Each time a team wins, you get the number of points you assigned.</li> 
          <li>Whoever has most points after the Super Bowl wins.</li>
          <li>Teams with byes do not score until they win a game.</li>
        </ul>
      </div>
      <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
      >
      {teams.map((team, index) => (
      
          <Card variation="elevated" key={team.name}>
            <Flex alignItems="flex-start">
              <Image src={team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
                <Text fontSize="large" fontWeight="semibold">
                  {team.name}
                </Text>
                <Flex>
                  <Input id={team.team_id} placeholder={String(14-index)} name="confidence" onChange={validateScore}/>
                </Flex>
              </Flex>
            </Flex>
          </Card>
      ))}
      
      </Flex>
    <button onClick={validateScores}>Save Selections</button>      
    </div>
    </main>
  );
}

export default App;
