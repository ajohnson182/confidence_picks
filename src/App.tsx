// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
import {
  Card,
  Image,
  Input,
  Flex,
  Text,
  useAuthenticator
} from '@aws-amplify/ui-react';

// const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  const teams =
    [
        {
            "location": "Kansas City",
            "nickname": "Chiefs",
            "seed": 1,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ujshjqvmnxce8m4obmvs",
            "conference": "AFC",
            "team_id": "afc1",
            "score": null
        },
        {
            "location": "Buffalo",
            "nickname": "Bills",
            "seed": 2,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/giphcy6ie9mxbnldntsf",
            "conference": "AFC",
            "team_id": "afc2",
            "score": null
        },
        {
            "location": "Baltimore",
            "nickname": "Ravens",
            "seed": 3,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ucsdijmddsqcj1i9tddd",
            "conference": "AFC",
            "team_id": "afc3",
            "score": null
        },
        {
            "location": "Houson",
            "nickname": "Texans",
            "seed": 4,
            "logo_ref": "https://static.www.nfl.com/image/upload/f_auto/league/u6camnphqvjc6mku6u3c",
            "conference": "AFC",
            "team_id": "afc4",
            "score": null
        },
        {
            "location": "Pittsburgh",
            "nickname": "Steelers",
            "seed": 5,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/xujg9t3t4u5nmjgr54wx",
            "conference": "AFC",
            "team_id": "afc5",
            "score": null
        },
        {
            "location": "Los Angeles",
            "nickname": "Chargers",
            "seed": 6,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/dhfidtn8jrumakbogeu4",
            "conference": "AFC",
            "team_id": "afc6",
            "score": null
        },
        {
            "location": "Denver",
            "nickname": "Broncos",
            "seed": 7,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/t0p7m5cjdjy18rnzzqbx",
            "conference": "AFC",
            "team_id": "afc7",
            "score": null
        },
        {
            "location": "Detroit",
            "nickname": "Lions",
            "seed": 1,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ocvxwnapdvwevupe4tpr",
            "conference": "NFC",
            "team_id": "nfc1",
            "score": null
        },
        {
            "location": "Philidelphia",
            "nickname": "Eagles",
            "seed": 2,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/puhrqgj71gobgdkdo6uq",
            "conference": "NFC",
            "team_id": "nfc2",
            "score": null
        },
        {
            "location": "Los Angeles",
            "nickname": "Rams",
            "seed": 3,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/ayvwcmluj2ohkdlbiegi",
            "conference": "NFC",
            "team_id": "nfc3",
            "score": null
        },
        {
            "location": "Tampa Bay",
            "nickname": "Buccaneers",
            "seed": 4,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/v8uqiualryypwqgvwcih",
            "conference": "NFC",
            "team_id": "nfc4",
            "score": null
        },
        {
            "location": "Minnesota",
            "nickname": "Vikings",
            "seed": 5,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/teguylrnqqmfcwxvcmmz",
            "conference": "NFC",
            "team_id": "nfc5",
            "score": null
        },
        {
            "location": "Washington",
            "nickname": "Commanders",
            "seed": 6,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/xymxwrxtyj9fhaemhdyd",
            "conference": "NFC",
            "team_id": "nfc6",
            "score": null
        },
        {
            "location": "Green Bay",
            "nickname": "Packers",
            "seed": 7,
            "logo_ref": "https://static.www.nfl.com/image/private/f_auto/league/gppfvr7n8gljgjaqux2x",
            "conference": "NFC",
            "team_id": "nfc7",
            "score": null
        }
    ]
  let picks = JSON.parse(JSON.stringify(teams));
  // const [allUsersData, setAllUsersData] = useState([]);

  // const handleStepChange = (index, newValue) => {
    
  //   picks[index].score = newValue;
    
  // };


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
    } else { 
      alert(`Please choose a valid confidence score (1-14).`);
      event.currentTarget.value = '';
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
    for(let i=0; i<picks.length; i++) { 
      const selectedScore = parseInt(picks[i].score);
      if (!isNaN(selectedScore) && selectedScore > 0 && selectedScore < 15) {
        scores.push(selectedScore);
      } 
    }
    if(scores.length != 14){
      alert(`Please make sure your have scored all 14 teams.`);
    } 
    if (scores.filter((value, index, array) => array.indexOf(value) === index).length != 14) {
      alert(`Please make sure you have only used each confidence score once.`);
    }
      
    console.log(picks);
  };

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
      
      {/*<button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>*/}
          {/*<div>*/}
      
      <div id="SingleProjectContainer">
      <div id="headline">
        <span> Welcome, {user?.signInDetails?.loginId}. <a id="logout" onClick={signOut}>(Sign out)</a></span> 
        <h2> Confidence Pick'em </h2> 
        <ul>
          <li id="listheader">Rules</li> 
          <li>Assign all 14 playoff teams a confidence score of 1-14.</li> 
          <li>You can only use each confidence rating once.</li> 
          <li>Each time a team wins, you get the number of points you assigned.</li> 
          <li>Whoever has most points after Super Bowl wins.</li>
          <li>#1 Seeds with byes do not score until the win a game.</li>
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
      
          <Card variation="elevated" key={team.nickname}>
            <Flex alignItems="flex-start">
              <Image src={team.logo_ref}
                alt="Amplify" width="6rem"/>
              <Flex direction="column" gap="0">       
                <Text fontSize="large" fontWeight="font.tertiary">
                  {team.location}
                </Text>
                <Text fontSize="large" fontWeight="semibold">
                  {team.nickname}
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
