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

function Scenario2() {

  // const { user, signOut } = useAuthenticator();
  const [allPicks, setAllPicks] = useState<any | null>([]);
  const [allUsers, setAllUsers] = useState<any | null>([]);
  const [allTeams, setAllTeams] = useState<any | null>([]);
  const [nfc, setNFC] = useState<any | null>([]);
  const [afc, setAFC] = useState<any | null>([]);

  const [everything, setEverything] = useState<any | null>([]);
  const ranks = [14,13,12,11,10,9,8,7,6,5,4,3,2,1];

  const useToggle = (initialState:any) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };

  const [toggle, setToggle] = useToggle(false);
  let { league_id } = useParams();

  const bracketBase = {
    afc_round1a: ["chiefs", "texans"],
    afc_round1b: ["bills", "ravens"],
    nfc_round1a: ["lions", "commanders"],
    nfc_round1b: ["eagles", "rams"],
   // round2: ["", "", "", ""],
    afc_semifinals: ["", ""],
    nfc_semifinals: ["", ""],
    finals: ["",""],
    winner: "",
  };

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
        //   team_id: "rams",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 1,
        //   dead: false
        // });
        // client.models.Team.update({
        //   team_id: "vikings",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 0,
        //   dead: true
        // });
        // client.models.Team.update({
        //   team_id: "commanders",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 1,
        //   dead: false
        // });
        // client.models.Team.update({
        //   team_id: "buccaneers",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 0,
        //   dead: true
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
        // console.log(nfc);
        // console.log(afc);
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

  function resetScores() {
    for(let i:any=0; i<allTeams.length; i++) {
      updateScore(allTeams[i].team_id, allTeams[i].score);
    }
  }
  function resetBracket() {
    setBracket({
        afc_round1a: ["chiefs", "texans"],
        afc_round1b: ["bills", "ravens"],
        nfc_round1a: ["lions", "commanders"],
        nfc_round1b: ["eagles", "rams"],
        afc_semifinals: ["", ""],
        nfc_semifinals: ["", ""],
        finals: ["",""],
        winner: "",
    });
    resetScores();
  }

// this scenario is not deducting points when changes are made, its needs to recalc everything when something changes
  const handleSelection = (round:any, selectedTeam:any) => {
    const newBracket = { ...bracket };
    // newBracket[round][index] = selectedTeam;

    if (round === "afc_round1a" ) {
      newBracket["afc_semifinals"][0] = selectedTeam;
      newBracket["finals"][0] = "";
      newBracket["winner"] = "";
    }
    else if (round === "afc_round1b" ) {
      newBracket["afc_semifinals"][1] = selectedTeam;
      newBracket["finals"][0] = "";
      newBracket["winner"] = "";
    }
    else if (round === "nfc_round1a" ) {
      newBracket["nfc_semifinals"][0] = selectedTeam;
      newBracket["finals"][1] = "";
      newBracket["winner"] = "";
    } 
    else if (round === "nfc_round1b" ) {
      newBracket["nfc_semifinals"][1] = selectedTeam;
      newBracket["finals"][1] = "";
      newBracket["winner"] = "";
    } 
    else if (round === "afc_semifinals") {
      newBracket["finals"][0] = selectedTeam;
      newBracket["winner"] = "";
    } 
    else if (round === "nfc_semifinals") {
      newBracket["finals"][1] = selectedTeam;
      newBracket["winner"] = "";
    }
    else if (round === "finals") {
      newBracket["winner"] = selectedTeam;
    }

    resetScores();
    // for(let i:any=0; i<allTeams.length; i++) {
    //   updateScore(allTeams[i].team_id, allTeams[i].score)
    // }

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
        <button className={
          team1 == "" ? "pick" :
          round.includes("round1") 
            && ( bracket.nfc_semifinals[0] == team1 ||  bracket.nfc_semifinals[1] == team1 
              ||bracket.afc_semifinals[0] == team1 ||  bracket.afc_semifinals[1] == team1 ) ? "pick pick-selected" 
            : round.includes("semifinals") && ( bracket.finals[0] == team1 || bracket.finals[1] == team1 ) ? "pick pick-selected" 
            : round.includes("finals") && ( bracket.winner == team1) ? "pick pick-selected" : "pick"} 
            key={team1 + "-" + round + "-t1"} 
            onClick={() => handleSelection(round, team1)}>
        <img 
          className={imgs[team1 as keyof typeof imgs] ? "pick-img" : "question-mark"} 
          src={imgs[team1 as keyof typeof imgs] ? imgs[team1 as keyof typeof imgs] : "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png"}/>
        {/*{team1}*/}
        {/*{scenario_score[team1]}*/}
        </button>
        <span>vs</span>
        <button className={
          team2 == "" ? "pick" :
          round.includes("round1") 
            && ( bracket.nfc_semifinals[0] == team2 ||  bracket.nfc_semifinals[1] == team2 
              ||bracket.afc_semifinals[0] == team2 ||  bracket.afc_semifinals[1] == team2 ) ? "pick pick-selected" 
            : round.includes("semifinals") && ( bracket.finals[0] == team2 || bracket.finals[1] == team2 ) ? "pick pick-selected" 
            : round.includes("finals") && ( bracket.winner == team2) ? "pick pick-selected" : "pick"} 
              key={team2 + "-" + round + "-t2"} 
              onClick={() => handleSelection(round, team2)}>
        <img 
          className={imgs[team2 as keyof typeof imgs] ? "pick-img" : "question-mark"} 
          src={imgs[team2 as keyof typeof imgs] ? imgs[team2 as keyof typeof imgs] : "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png"}/>
        {/*{team2}*/}
        {/*{scenario_score[team2]}*/}
        </button>
      </div>
    );
  };
  const renderWinner = (team1:any, round:any) => {
    return (
      <div key={round + "-" + team1} className="matchup">
        <button className={imgs[team1 as keyof typeof imgs] ? "pick pick-selected" : "pick"} key={team1 + "-" + round}>
        <img className={imgs[team1 as keyof typeof imgs] ? "pick-img" : "question-mark"} src={imgs[team1 as keyof typeof imgs] ? imgs[team1 as keyof typeof imgs] : "https://upload.wikimedia.org/wikipedia/commons/5/5a/Black_question_mark.png"}/>
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
          <Link to="/league/ava">
            <button className={league_id == "ava" ? "selected-league" : "non-selected-league"}> AVA </button>
          </Link>
          <Link to="/league/cnutfxc">
            <button className={league_id == "cnutfxc" ? "selected-league" : "non-selected-league"}> CNU TFXC </button>
          </Link>
          <Link to="/">
            <button className={league_id ? "non-selected-league" : "selected-league"}> ALL ENTRIES </button>
          </Link>
         
      </Flex>
         
         {/*<h2 id="pageleague"> {league_id ? league_id?.toUpperCase() : "ALL ENTRIES"} </h2>*/}
         {/*<Link to={league_id ? "/league/" + league_id : "/"}>
            <h4 id="scenariolink">(back to Scoreboard)</h4>
          </Link>*/}
       {toggle && (<button onClick={setToggle}> Hide Scenarios </button>)}
       {!toggle && (<button className="non-selected-league" onClick={setToggle}> Show Scenarios </button>)}

       {toggle && afc.length == 7 && nfc.length == 7 && (
       <div className="App">
       <div id="pagetitle-scenario"> Scenario Builder </div> 
       <div key="r1" className="round">
       <div className="scenario-round">Divisional Round</div>
          {renderMatchup(bracket.afc_round1a[0], bracket.afc_round1a[1], "afc_round1a")}
          {renderMatchup(bracket.afc_round1b[0], bracket.afc_round1b[1], "afc_round1b")}
          {renderMatchup(bracket.nfc_round1a[0], bracket.nfc_round1a[1], "nfc_round1a")}
          {renderMatchup(bracket.nfc_round1b[0], bracket.nfc_round1b[1], "nfc_round1b")}
          
      </div>

      <div key="r2"  className="round">
        <div className="scenario-round">Conference Championships</div>
          {renderMatchup(bracket.afc_semifinals[0], bracket.afc_semifinals[1], "afc_semifinals")}
          {renderMatchup(bracket.nfc_semifinals[0], bracket.nfc_semifinals[1], "nfc_semifinals")}
      </div>

      <div key="r3"  className="round">
        <div className="scenario-round">Super Bowl</div>
          {renderMatchup(bracket.finals[0], bracket.finals[1], "finals")}
      </div>

      <div key="r4"  className="winner">
        <div className="scenario-round">Champion</div>
        {renderWinner(bracket.winner, "finals")}
      </div>
      <button className={JSON.stringify(bracketBase) === JSON.stringify(bracket) ? "selected-league" : "non-selected-league" } onClick={resetBracket}> Reset Scenario </button> 
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
       <h2 id="pageleague"> {league_id ? league_id?.toUpperCase() : "All Entries"} Scoreboard </h2> 
       </Flex>
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

      {everything.map((pick:any, index:any) => (
        <Flex direction="column" gap="0" key={"flex1-"+index}>       
            <div id="border-bottom" key={"div-"+index}>
              <Flex alignItems="flex-end" key={"flex2-"+index}>
                <Flex alignItems="baseline" direction="row" gap="20" key={"flex3-"+index}>       
                  <Text fontWeight="bold" key={"text1-"+index}> <span id="score">{pick.score}</span></Text>
                  <Text fontWeight="semibold" key={"text2-"+index}> {league_id ? pick.user_id : pick.user_id + ' (' + pick.picks[0].league_id.toUpperCase() + ')'}</Text>    
                  
                  
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
            key={"flex-user-wrap-"+index}
          >
            {pick.picks.map((p:any) => (
               <Flex width="5vw" key={p.team_id + pick.user_id} opacity={p.team.dead ? "0.2" : 1}>
                  <Image src={p.team.logo_ref}
                    alt="Amplify" width="100%" key={"img1-"+index}/>
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
