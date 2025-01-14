// import * as React from 'react';
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Link, useParams } from 'react-router-dom';
// import Bracket from './Bracket';
// import HomePage from "HomePage"
// import { getCurrentUser } from 'aws-amplify/auth';
import { 
  // Radio, 
  // RadioGroupField, 
  // Table,
  // TableBody,
  // TableCell,
  // TableHead,
  // TableRow,
  Card,
  Image,
  // Input,
  // StepperField,
  // ThemeProvider,
  // Badge,
  Flex,
  Text,
  // useAuthenticator
} from '@aws-amplify/ui-react';

const client = generateClient<Schema>();
let scenario_score = {
    "texans": 0,
    "steelers": 0,
    "rams": 0,
    "eagles": 0,
    "packers": 0,
    "commanders": 0,
    "chargers": 0,
    "broncos": 0,
    "bills": 0,
    "buccaneers": 0,
    "vikings": 0,
    "lions": 0,
    "chiefs": 0,
    "ravens": 0
  };

const NFC = "rams eagles packers commanders buccaneers vikings lions";
const AFC = "texans steelers chargers broncos bills chiefs ravens";
  
// const theme = {
//   name: 'stepper-theme',
//   tokens: {
//     components: {
//       stepperfield: {
//         input: {
//           fontSize: { value: '10px' },
//         },
//       },
//     },
//   },
// };



function Scenario2() {

  // const { user, signOut } = useAuthenticator();
  const [allPicks, setAllPicks] = useState<any | null>([]);
  const [allUsers, setAllUsers] = useState<any | null>([]);
  const [allTeams, setAllTeams] = useState<any | null>([]);
  const [nfc, setNFC] = useState<any | null>([]);
  const [afc, setAFC] = useState<any | null>([]);

  // const [texansVal, setTexansVal] = React.useState<number>(0);
  // const [steelersVal, setSteelersVal] = React.useState<number>(0);
  // const [ramsVal, setRamsVal] = React.useState<number>(0);
  // const [eaglesVal, setEaglesVal] = React.useState<number>(0);
  // const [packersVal, setPackersVal] = React.useState<number>(0);
  // const [commandersVal, setCommandersVal] = React.useState<number>(0);
  // const [chargersVal, setChargersVal] = React.useState<number>(0);
  // const [broncosVal, setBroncosVal] = React.useState<number>(0);
  // const [billsVal, setBillsVal] = React.useState<number>(0);
  // const [buccaneersVal, setBuccaneersVal] = React.useState<number>(0);
  // const [vikingsVal, setVikingsVal] = React.useState<number>(0);
  // const [lionsVal, setLionsVal] = React.useState<number>(0);
  // const [chiefsVal, setChiefsVal] = React.useState<number>(0);
  // const [ravensVal, setRavensVal] = React.useState<number>(0);

  const [everything, setEverything] = useState<any | null>([]);
  const ranks = [14,13,12,11,10,9,8,7,6,5,4,3,2,1];

  const useToggle = (initialState:any) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };

  const [toggle, setToggle] = useToggle(true);
  let { league_id } = useParams();

  const [bracket, setBracket] = useState({
    afc_round1a: ["chiefs", "texans"],
    afc_round1b: ["bills", "ravens"],
    nfc_round1a: ["lions", "commanders"],
    nfc_round1b: ["eagles", "rams"],
   // round2: ["", "", "", ""],
    afc_semifinals: ["", ""],
    nfc_semifinals: ["", ""],
    finals: ["",""],
    winner: "",
  });
  // let nfc = [];
  // let afc = [];

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
        // let dat = await client.models.Team.list({filter: {
        //   score: {gt: -1}
        // }
        // });
        // console.log(dat);
        // client.models.Team.update({
        //   team_id: "eagles",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 1,
        //   dead: false
        // });
        // client.models.Team.update({
        //   team_id: "chiefs",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 0,
        //   dead: false
        // });
        // client.models.Team.update({
        //   team_id: "lions",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 0,
        //   dead: false
        // });
        // client.models.Team.update({
        //   team_id: "chiefs",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 0,
        //   dead: false
        // });
        const { data } = await client.models.Team.list();
        let teams_sorted = JSON.parse(JSON.stringify(data));
        teams_sorted = teams_sorted.sort((a:any, b:any) => a.seed-b.seed);
        let nfc1 = teams_sorted.filter((team:any) => NFC.includes(team.team_id));
        let afc1 = teams_sorted.filter((team:any) => AFC.includes(team.team_id));
        console.log(nfc);
        console.log(afc);
        setNFC(nfc1);
        setAFC(afc1);
        setAllTeams(teams_sorted);
        setEverything(display());
        
        for(let i=0; i<teams_sorted.length; i++) {
        
          scenario_score[teams_sorted[i].team_id as keyof typeof scenario_score] = teams_sorted[i].score;
          if(teams_sorted[i].team_id == "texans") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setTexansVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "steelers") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setSteelersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "rams") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setRamsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "eagles") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setEaglesVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "packers") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setPackersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "commanders") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setCommandersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "chargers") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setChargersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "broncos") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setBroncosVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "bills") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setBillsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "buccaneers") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setBuccaneersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "vikings") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setVikingsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "lions") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setLionsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "chiefs") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setChiefsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "ravens") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            // setRavensVal(teams_sorted[i].score);
          }
          
        }
    }
    listTeams();
  }, [allUsers,allPicks]); 

  // const handleTexansOnStepChange = (newValue: number) => {
  //   setTexansVal(newValue);
  //   updateScore('texans',newValue);
  // };
  // const handleSteelersOnStepChange = (newValue: number) => {
  //   setSteelersVal(newValue);
  //   updateScore('steelers',newValue);
  // };
  // const handleRamsOnStepChange = (newValue: number) => {
  //   setRamsVal(newValue);
  //   updateScore('rams',newValue);
  // };
  // const handleEaglesOnStepChange = (newValue: number) => {
  //   setEaglesVal(newValue);
  //   updateScore('eagles',newValue);
  // };
  // const handlePackersOnStepChange = (newValue: number) => {
  //   setPackersVal(newValue);
  //   updateScore('packers',newValue);
  // };
  // const handleCommandersOnStepChange = (newValue: number) => {
  //   setCommandersVal(newValue);
  //   updateScore('commanders',newValue);
  // };
  // const handleChargersOnStepChange = (newValue: number) => {
  //   setChargersVal(newValue);
  //   updateScore('chargers',newValue);
  // };
  // const handleBroncosOnStepChange = (newValue: number) => {
  //   setBroncosVal(newValue);
  //   updateScore('broncos',newValue);
  // };
  // const handleBillsOnStepChange = (newValue: number) => {
  //   setBillsVal(newValue);
  //   updateScore('bills',newValue);
  // };
  // const handleBuccaneersOnStepChange = (newValue: number) => {
  //   setBuccaneersVal(newValue);
  //   updateScore('buccaneers',newValue);
  // };
  // const handleVikingsOnStepChange = (newValue: number) => {
  //   setVikingsVal(newValue);
  //   updateScore('vikings',newValue);
  // };
  // const handleLionsOnStepChange = (newValue: number) => {
  //   setLionsVal(newValue);
  //   updateScore('lions',newValue);
  // };
  // const handleChiefsOnStepChange = (newValue: number) => {
  //   setChiefsVal(newValue);
  //   updateScore('chiefs',newValue);
  // };
  // const handleRavensOnStepChange = (newValue: number) => {
  //   setRavensVal(newValue);
  //   updateScore('ravens',newValue);
  // };

  function updateScore(team:string,score:any){
    // console.log("setting " + team + " score to " + score);
    
    scenario_score[team as keyof typeof scenario_score] = parseInt(score);
    setEverything(display());
    // console.log(JSON.stringify(scenario_score));
  }

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
                p.score = p.confidence_score * scenario_score[team.team_id as keyof typeof scenario_score];
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
   
  const imgs = {
    "chiefs":"https://static.www.nfl.com/image/private/f_auto/league/ujshjqvmnxce8m4obmvs",
    "bills":"https://static.www.nfl.com/image/private/f_auto/league/giphcy6ie9mxbnldntsf",
    "ravens":"https://static.www.nfl.com/image/private/f_auto/league/ucsdijmddsqcj1i9tddd",
    "texans":"https://static.www.nfl.com/image/upload/f_auto/league/u6camnphqvjc6mku6u3c",
    "steelers":"https://static.www.nfl.com/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx",
    "chargers":"https://static.www.nfl.com/image/private/f_auto/league/dhfidtn8jrumakbogeu4",
    "broncos":"https://static.www.nfl.com/image/private/f_auto/league/t0p7m5cjdjy18rnzzqbx",
    "lions":"https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr",
    "eagles":"https://static.www.nfl.com/image/private/f_auto/league/puhrqgj71gobgdkdo6uq",
    "buccaneers":"https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih",
    "rams":"https://static.www.nfl.com/image/private/f_auto/league/ayvwcmluj2ohkdlbiegi",
    "vikings":"https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz",
    "commanders":"https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd",
    "packers":"https://static.www.nfl.com/image/private/f_auto/league/gppfvr7n8gljgjaqux2x"
  };

  const handleSelection = (round:any, selectedTeam:any) => {
    const newBracket = { ...bracket };
    // newBracket[round][index] = selectedTeam;

    if (round === "afc_round1a" ) {
      newBracket["afc_semifinals"][0] = selectedTeam;
      newBracket["finals"][0] = "";
      newBracket["winner"] = "";
      if(selectedTeam === "chiefs" || selectedTeam === "lions") {
        updateScore(selectedTeam, 1)
      } else {
        updateScore(selectedTeam, 2)
      }
    }
    else if (round === "afc_round1b" ) {
      newBracket["afc_semifinals"][1] = selectedTeam;
      newBracket["finals"][0] = "";
      newBracket["winner"] = "";
      if(selectedTeam === "chiefs" || selectedTeam === "lions") {
        updateScore(selectedTeam, 1)
      } else {
        updateScore(selectedTeam, 2)
      }
    }
    else if (round === "nfc_round1a" ) {
      newBracket["nfc_semifinals"][0] = selectedTeam;
      newBracket["finals"][1] = "";
      newBracket["winner"] = "";
      if(selectedTeam === "chiefs" || selectedTeam === "lions") {
        updateScore(selectedTeam, 1)
      } else {
        updateScore(selectedTeam, 2)
      }
    } 
    else if (round === "nfc_round1b" ) {
      newBracket["nfc_semifinals"][1] = selectedTeam;
      newBracket["finals"][1] = "";
      newBracket["winner"] = "";
      if(selectedTeam === "chiefs" || selectedTeam === "lions") {
        updateScore(selectedTeam, 1)
      } else {
        updateScore(selectedTeam, 2)
      }
    } 
    else if (round === "afc_semifinals") {
      newBracket["finals"][0] = selectedTeam;
      newBracket["winner"] = "";
      if(selectedTeam === "chiefs" || selectedTeam === "lions") {
        updateScore(selectedTeam, 2)
      } else {
        updateScore(selectedTeam, 3)
      }
    } 
    else if (round === "nfc_semifinals") {
      newBracket["finals"][1] = selectedTeam;
      newBracket["winner"] = "";
      if(selectedTeam === "chiefs" || selectedTeam === "lions") {
        updateScore(selectedTeam, 2)
      } else {
        updateScore(selectedTeam, 3)
      }
    }
    else if (round === "finals") {
      newBracket["winner"] = selectedTeam;
      if(selectedTeam === "chiefs" || selectedTeam === "lions") {
        updateScore(selectedTeam, 3)
      } else {
        updateScore(selectedTeam, 4)
      }
    }

    for(let i:any=0; i<newBracket.afc_semifinals.length; i++){
      if(newBracket.afc_semifinals[i] === "chiefs" || newBracket.afc_semifinals[i] === "lions") {
        updateScore(newBracket.afc_semifinals[i], 1)
      } else {
        updateScore(newBracket.afc_semifinals[i], 2)
      }
    }
    for(let i:any=0; i<newBracket.nfc_semifinals.length; i++){
      if(newBracket.nfc_semifinals[i] === "chiefs" || newBracket.nfc_semifinals[i] === "lions") {
        updateScore(newBracket.nfc_semifinals[i], 1)
      } else {
        updateScore(newBracket.nfc_semifinals[i], 2)
      }
    }
    for(let i:any=0; i<newBracket.finals.length; i++){
      if(newBracket.finals[i] === "chiefs" || newBracket.finals[i] === "lions") {
        updateScore(newBracket.finals[i], 2)
      } else {
        updateScore(newBracket.finals[i], 3)
      }
    }
    if(newBracket.winner === "chiefs" || newBracket.winner === "lions") {
        updateScore(newBracket.winner, 3)
    } else {
      updateScore(newBracket.winner, 4)
    }
    setBracket(newBracket);
  };

  const renderMatchup = (team1:any, team2:any, round:any) => {
    return (
      <div key={round + "-" + team1 + "-" + team2} className="matchup">
        <button className="pick" key={team1 + "-" + round} onClick={() => handleSelection(round, team1)}>
        <img src={imgs[team1 as keyof typeof imgs] ? imgs[team1 as keyof typeof imgs] : "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png"} width="30px"/>
        {/*{team1}*/}
        {/*{scenario_score[team1]}*/}
        </button>
        <span>vs</span>
        <button className="pick" key={team2 + "-" + round} onClick={() => handleSelection(round, team2)}>
        <img src={imgs[team2 as keyof typeof imgs] ? imgs[team2 as keyof typeof imgs] : "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png"} width="30px"/>
        {/*{team2}*/}
        {/*{scenario_score[team2]}*/}
        </button>
      </div>
    );
  };
  const renderWinner = (team1:any, round:any) => {
    return (
      <div key={round + "-" + team1} className="matchup">
        <button className="pick" key={team1 + "-" + round}>
        <img src={imgs[team1 as keyof typeof imgs] ? imgs[team1 as keyof typeof imgs] : "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png"} width="30px"/>
        {/*{team1}*/}
        {/*{scenario_score[team1]}*/}
        </button>
      </div>
    );
  };
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
          <Link to="/scenario/ava">
            <button> AVA </button>
          </Link>
          <Link to="/scenario/cnutfxc">
            <button> CNU TFXC </button>
          </Link>
          <Link to="/scenario">
            <button> ALL ENTRIES </button>
          </Link>
         
      </Flex>
         <h1 id="pagetitle-scenario"> Scenario Builder </h1> 
         <h2 id="pageleague"> {league_id?.toUpperCase()} </h2>
         <Link to={league_id ? "/league/" + league_id : "/"}>
            <h4 id="scenariolink">(back to Scoreboard)</h4>
          </Link>
       <button onClick={setToggle}> Toggle Scenario Inputs </button>
       {toggle && afc.length == 7 && nfc.length == 7 && (
       <div className="App">
      <div key="r1" className="round">
        <div>Divisional</div>
          {renderMatchup(bracket.afc_round1a[0], bracket.afc_round1a[1], "afc_round1a")}
          {renderMatchup(bracket.afc_round1b[0], bracket.afc_round1b[1], "afc_round1b")}
          {renderMatchup(bracket.nfc_round1a[0], bracket.nfc_round1a[1], "nfc_round1a")}
          {renderMatchup(bracket.nfc_round1b[0], bracket.nfc_round1b[1], "nfc_round1b")}
          
      </div>

      <div key="r2"  className="round">
        <div>Conference</div>
          {renderMatchup(bracket.afc_semifinals[0], bracket.afc_semifinals[1], "afc_semifinals")}
          {renderMatchup(bracket.nfc_semifinals[0], bracket.nfc_semifinals[1], "nfc_semifinals")}
      </div>

      <div key="r3"  className="round">
        <div>Super Bowl</div>
          {renderMatchup(bracket.finals[0], bracket.finals[1], "finals")}
      </div>

      <div key="r4"  className="winner">
        <div>Champion</div>
        {renderWinner(bracket.winner, "finals")}
      </div>
    </div>
       
       
      )}
      </div>

       <Flex
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="flex-start"
        wrap="wrap"
        gap="xs"
        key="mainFlexWrap"
      >

      {ranks.map((p:any) => (
         <Flex width="5vw" justifyContent="center" alignItems="center" key={"header-"+p}>
            <Text text-align="center">{p}</Text>
        </Flex>
      ))}

      {everything.map((pick:any) => (
        <Flex direction="column" gap="0">       
            <div id="border-bottom">
              <Flex alignItems="flex-end">
                <Flex alignItems="baseline" direction="row" gap="20">       
                  <Text fontWeight="bold"> <span id="score">{pick.score}</span></Text>
                  <Text fontWeight="semibold"> {league_id ? pick.user_id : pick.user_id + ' (' + pick.picks[0].league_id.toUpperCase() + ')'}</Text>    
                  
                  
                </Flex>
              </Flex>
            </div>
            

            <Flex
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="flex-start"
            wrap="wrap"
            gap="xs"
          >
            {pick.picks.map((p:any) => (
               <Flex width="5vw" key={p.team_id + pick.user_id} opacity={p.team.dead ? "0.2" : 1}>
                  <Image src={p.team.logo_ref}
                    alt="Amplify" width="100%" />
              </Flex>
            ))}
          </Flex> 
         </Flex>
      ))}
      </Flex>
      <Card>...</Card>
     </div>
    </main>
  );
}

export default Scenario2;