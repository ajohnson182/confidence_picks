import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from "../amplify/data/resource";
// import { useAuthenticator } from '@aws-amplify/ui-react';

export default function Leagues() {
  
  const client = generateClient<Schema>();
  const [myLeagues, setMyLeagues] = useState<any | null>([]);
  const [allLeagues, setAllLeagues] = useState<any | null>([]);
  const initialState = {
    league_id: '',
    name: ''
  };

  const [formState, updateFormState] = useState(initialState);
  // const { user, signOut } = useAuthenticator();
  function onChangeText(e:any) {
    e.persist();
    updateFormState(currentState => ({ ...currentState, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    async function listMyLeagues() {
        // fetch all todos
        // let user_id = "blank";
        // if(user !== undefined && user.signInDetails !== undefined && user.signInDetails.loginId !== undefined) {
        //   user_id = user_id
        // }
        const { data } = await client.models.UserLeagues.list({});
        setMyLeagues(data);
    }
    listMyLeagues();
  }, []);

  useEffect(() => {
    const sub = client.models.UserLeagues.observeQuery()
      .subscribe(({ items }) => setMyLeagues([...items]))

    return () => sub.unsubscribe()
  }, []);

  useEffect(() => {
    async function listAllLeagues() {
        // let user_id = "blank";
        // if(user !== undefined && user.signInDetails !== undefined && user.signInDetails.loginId !== undefined) {
        //   user_id = user.signInDetails.loginId;
        // }
        // fetch all todos
        const { data } = await client.models.League.list({
          
        });
        setAllLeagues(data);
    }
    listAllLeagues();
  }, []);

  useEffect(() => {
    const sub = client.models.League.observeQuery()
      .subscribe(({ items }) => setAllLeagues([...items]))

    return () => sub.unsubscribe()
  }, []);


  return (
    <main>
      <h1>Leagues</h1>
      <div>
        <input
          placeholder="league_id"
          name="league_id"
          onChange={onChangeText}
        />
        <br />
        <input
          placeholder="name"
          name="name"
          onChange={onChangeText}
        />
        <br />
        <button title="Create New League" onClick={async () => {
          // create a new League with the following attributes
          const { errors, data: newLeague } = await client.models.League.create({
            league_id: formState.league_id,
            name: formState.name,
            contest_id: "nfl_playoff_24-25"
          });
          console.log(errors, newLeague);
        }}>Create </button>
        <button title="Cancel">
          Cancel 
        </button>
      </div>
      <h1>All Leagues</h1>
      <ul>
        {allLeagues.map((league:any) => (
          <li key={league.league_id}>{JSON.stringify(league)}</li>
        ))}
      </ul>
      <h1>My Leagues</h1>
      <ul>
        {myLeagues.map((league:any) => (
          <li key={league.league_id}>{JSON.stringify(league)}</li>
        ))}
      </ul>
    </main>
  );
}
