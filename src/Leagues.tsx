import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from "../amplify/data/resource";


export default function Leagues() {
  
  const client = generateClient<Schema>();
  const [leagues, setLeagues] = useState<any | null>(null);
  const initialState = {
    league_id: '',
    name: ''
  };

  const [formState, updateFormState] = useState(initialState);

  function onChangeText(e:any) {
    e.persist();
    updateFormState(currentState => ({ ...currentState, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    async function listLeagues() {
        // fetch all todos
        const { data } = await client.models.League.list();
        setLeagues(data);
    }
    listLeagues();
  }, []);

  useEffect(() => {
    const sub = client.models.League.observeQuery()
      .subscribe(({ items }) => setLeagues([...items]))

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
        <button title="Create New Post" onClick={async () => {
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

      <ul>
        {leagues.map((league:any) => (
          <li key={league.league_id}>{league.name}</li>
        ))}
      </ul>
    </main>
  );
}
