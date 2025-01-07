import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from "../amplify/data/resource";

export default function Picks() {
  
  const client = generateClient<Schema>();
  const [picks, setPicks] = useState<any | null>(null); // useState<Schema['Pick'][]>([]);

  // const initialState = {
  //   league_id: '',
  //   team: '',
  // };

  // const [formState, updateFormState] = useState(initialState);

  // function onChangeText(e:any) {
  //   e.persist();
  //   updateFormState(currentState => ({ ...currentState, [e.target.name]: e.target.value }));
  // }

  useEffect(() => {
    async function listPicks() {
        // fetch all todos
        const { data } = await client.models.Pick.list();
        setPicks(data);
        console.log(data);
    }
    listPicks();
  }, []);

  useEffect(() => {
    const sub = client.models.Pick.observeQuery()
      .subscribe(({ items }) => setPicks([...items]))

    return () => sub.unsubscribe()
  }, []);

  return (
    <main>
      <h1>Picks</h1>
      <ul>
        {picks.map((pick:any) => (
          <li key={pick.user_id}>{JSON.stringify(pick)}</li>
        ))}
      </ul>
    </main>
  );
}