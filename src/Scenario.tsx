import * as React from 'react';
import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Link, useParams } from 'react-router-dom';
// import HomePage from "HomePage"
// import { getCurrentUser } from 'aws-amplify/auth';
import { 
  // Radio, 
  // RadioGroupField, 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Card,
  Image,
  // Input,
  StepperField,
  ThemeProvider,
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

const theme = {
  name: 'stepper-theme',
  tokens: {
    components: {
      stepperfield: {
        input: {
          fontSize: { value: '10px' },
        },
      },
    },
  },
};

function Scenario() {
  // const { user, signOut } = useAuthenticator();
  const [allPicks, setAllPicks] = useState<any | null>([]);
  const [allUsers, setAllUsers] = useState<any | null>([]);
  const [allTeams, setAllTeams] = useState<any | null>([]);
  const [nfc, setNFC] = useState<any | null>([]);
  const [afc, setAFC] = useState<any | null>([]);

  const [texansVal, setTexansVal] = React.useState<number>(0);
  const [steelersVal, setSteelersVal] = React.useState<number>(0);
  const [ramsVal, setRamsVal] = React.useState<number>(0);
  const [eaglesVal, setEaglesVal] = React.useState<number>(0);
  const [packersVal, setPackersVal] = React.useState<number>(0);
  const [commandersVal, setCommandersVal] = React.useState<number>(0);
  const [chargersVal, setChargersVal] = React.useState<number>(0);
  const [broncosVal, setBroncosVal] = React.useState<number>(0);
  const [billsVal, setBillsVal] = React.useState<number>(0);
  const [buccaneersVal, setBuccaneersVal] = React.useState<number>(0);
  const [vikingsVal, setVikingsVal] = React.useState<number>(0);
  const [lionsVal, setLionsVal] = React.useState<number>(0);
  const [chiefsVal, setChiefsVal] = React.useState<number>(0);
  const [ravensVal, setRavensVal] = React.useState<number>(0);

  const [everything, setEverything] = useState<any | null>([]);
  const ranks = [14,13,12,11,10,9,8,7,6,5,4,3,2,1];

  const useToggle = (initialState:any) => {
    const [toggleValue, setToggleValue] = useState(initialState);

    const toggler = () => { setToggleValue(!toggleValue) };
    return [toggleValue, toggler]
  };

  const [toggle, setToggle] = useToggle(true);
  let { league_id } = useParams();

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
        // client.models.Team.update({
        //   team_id: "eagles",
        //   contest_id: "nfl_playoff_24-25",
        //   score: 1
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

        setNFC(nfc1);
        setAFC(afc1);
        setAllTeams(teams_sorted);
        setEverything(display());
        
        for(let i=0; i<teams_sorted.length; i++) {
        
          scenario_score[teams_sorted[i].team_id as keyof typeof scenario_score] = teams_sorted[i].score;
          if(teams_sorted[i].team_id == "texans") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setTexansVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "steelers") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setSteelersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "rams") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setRamsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "eagles") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setEaglesVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "packers") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setPackersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "commanders") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setCommandersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "chargers") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setChargersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "broncos") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setBroncosVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "bills") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setBillsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "buccaneers") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setBuccaneersVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "vikings") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setVikingsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "lions") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setLionsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "chiefs") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setChiefsVal(teams_sorted[i].score);
          }
          if(teams_sorted[i].team_id == "ravens") { 
            updateScore(teams_sorted[i].team_id, teams_sorted[i].score);
            setRavensVal(teams_sorted[i].score);
          }
          
        }
    }
    listTeams();
  }, [allUsers,allPicks]); 

  const handleTexansOnStepChange = (newValue: number) => {
    setTexansVal(newValue);
    updateScore('texans',newValue);
  };
  const handleSteelersOnStepChange = (newValue: number) => {
    setSteelersVal(newValue);
    updateScore('steelers',newValue);
  };
  const handleRamsOnStepChange = (newValue: number) => {
    setRamsVal(newValue);
    updateScore('rams',newValue);
  };
  const handleEaglesOnStepChange = (newValue: number) => {
    setEaglesVal(newValue);
    updateScore('eagles',newValue);
  };
  const handlePackersOnStepChange = (newValue: number) => {
    setPackersVal(newValue);
    updateScore('packers',newValue);
  };
  const handleCommandersOnStepChange = (newValue: number) => {
    setCommandersVal(newValue);
    updateScore('commanders',newValue);
  };
  const handleChargersOnStepChange = (newValue: number) => {
    setChargersVal(newValue);
    updateScore('chargers',newValue);
  };
  const handleBroncosOnStepChange = (newValue: number) => {
    setBroncosVal(newValue);
    updateScore('broncos',newValue);
  };
  const handleBillsOnStepChange = (newValue: number) => {
    setBillsVal(newValue);
    updateScore('bills',newValue);
  };
  const handleBuccaneersOnStepChange = (newValue: number) => {
    setBuccaneersVal(newValue);
    updateScore('buccaneers',newValue);
  };
  const handleVikingsOnStepChange = (newValue: number) => {
    setVikingsVal(newValue);
    updateScore('vikings',newValue);
  };
  const handleLionsOnStepChange = (newValue: number) => {
    setLionsVal(newValue);
    updateScore('lions',newValue);
  };
  const handleChiefsOnStepChange = (newValue: number) => {
    setChiefsVal(newValue);
    updateScore('chiefs',newValue);
  };
  const handleRavensOnStepChange = (newValue: number) => {
    setRavensVal(newValue);
    updateScore('ravens',newValue);
  };

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
       {toggle && (
       <Table title="Scenarios">
        <TableHead>
          <TableRow>
            <TableCell className="cntr" as="th">AFC</TableCell>
            <TableCell className="cntr" as="th">NFC</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={afc[0]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={afc[0]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={afc[0]?.dead}
                        padding={0}
                        min={scenario_score[afc[0]?.team_id as keyof typeof scenario_score]}
                        max={3}
                        label={afc[0]?.team_id}
                        value={chiefsVal}
                        labelHidden
                        onStepChange={handleChiefsOnStepChange}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={nfc[0]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={nfc[0]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={nfc[0]?.dead}
                        padding={0}
                        min={scenario_score[nfc[0]?.team_id as keyof typeof scenario_score]}
                        max={3}
                        label={nfc[0]?.team_id}
                        value={lionsVal}
                        labelHidden
                        onStepChange={handleLionsOnStepChange}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={afc[1]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={afc[1]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={afc[1]?.dead}
                        padding={0}
                        label={afc[1]?.team_id}
                        value={billsVal}
                        labelHidden
                        onStepChange={handleBillsOnStepChange}
                        min={scenario_score[afc[1]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={nfc[1]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={nfc[1]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={nfc[1]?.dead}
                        padding={0}
                        label={nfc[1]?.team_id}
                        value={eaglesVal}
                        labelHidden
                        onStepChange={handleEaglesOnStepChange}
                        min={scenario_score[nfc[1]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={afc[2]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={afc[2]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={afc[2]?.dead}
                        padding={0}
                        label={afc[2]?.team_id}
                        value={ravensVal}
                        labelHidden
                        onStepChange={handleRavensOnStepChange}
                        min={scenario_score[afc[2]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={nfc[2]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={nfc[2]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={nfc[2]?.dead}
                        padding={0}
                        label={nfc[2]?.team_id}
                        value={buccaneersVal}
                        labelHidden
                        onStepChange={handleBuccaneersOnStepChange}
                        min={scenario_score[nfc[2]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
            </TableRow>
            <TableRow>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={afc[3]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={afc[3]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={afc[3]?.dead}
                        padding={0}
                        label={afc[3]?.team_id}
                        value={texansVal}
                        labelHidden
                        onStepChange={handleTexansOnStepChange}
                        min={scenario_score[afc[3]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={nfc[3]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={nfc[3]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={nfc[3]?.dead}
                        padding={0}
                        label={nfc[3]?.team_id}
                        value={ramsVal}
                        labelHidden
                        onStepChange={handleRamsOnStepChange}
                        min={scenario_score[nfc[3]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={afc[4]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={afc[4]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={afc[4]?.dead}
                        padding={0}
                        label={afc[4]?.team_id}
                        value={steelersVal}
                        labelHidden
                        onStepChange={handleSteelersOnStepChange}
                        min={scenario_score[afc[4]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={nfc[4]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={nfc[4]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={nfc[4]?.dead}
                        padding={0}
                        label={nfc[4]?.team_id}
                        value={vikingsVal}
                        labelHidden
                        onStepChange={handleVikingsOnStepChange}
                        min={scenario_score[nfc[4]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={afc[5]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={afc[5]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={afc[5]?.dead}
                        padding={0}
                        label={afc[5]?.team_id}
                        value={chargersVal}
                        labelHidden
                        onStepChange={handleChargersOnStepChange}
                        min={scenario_score[afc[5]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={nfc[5]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={nfc[5]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={nfc[5]?.dead}
                        padding={0}
                        label={nfc[5]?.team_id}
                        value={commandersVal}
                        labelHidden
                        onStepChange={handleCommandersOnStepChange}
                        min={scenario_score[nfc[5]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={afc[6]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={afc[6]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={afc[6]?.dead}
                        padding={0}
                        label={afc[6]?.team_id}
                        value={broncosVal}
                        labelHidden
                        onStepChange={handleBroncosOnStepChange}
                        min={scenario_score[afc[6]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
            <TableCell className="cntr" padding={0}>
              {/*<Card variation="elevated" key={afc[6]?.team_id} padding={0} margin={0}>*/}
                <Flex direction="column" alignItems="center" margin={0} padding={0}>
                  <div className="cntr-img">
                  <Image src={nfc[6]?.logo_ref}
                    alt="Amplify" width="5vw"/>
                    </div>
                      <ThemeProvider theme={theme} colorMode="light">
                      <StepperField
                        isDisabled={nfc[6]?.dead}
                        padding={0}
                        label={nfc[6]?.team_id}
                        value={packersVal}
                        labelHidden
                        onStepChange={handlePackersOnStepChange}
                        min={scenario_score[nfc[6]?.team_id as keyof typeof scenario_score]}
                        max={4}
                      />
                      </ThemeProvider>
                </Flex>
              {/*</Card>*/}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
                  <Text fontWeight="semibold"> {pick.user_id}</Text>   
                  
                  
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

export default Scenario;
