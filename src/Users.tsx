import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from "../amplify/data/resource";


export default function HomePage() {
  
  const client = generateClient<Schema>();
  const [users, setUsers] = useState<any | null>(null);
  const initialState = {
    user_id: '',
    name: ''
  };

  const [formState, updateFormState] = useState(initialState);

  function onChangeText(e:any) {
    e.persist();
    updateFormState(currentState => ({ ...currentState, [e.target.name]: e.target.value }));
  }

  useEffect(() => {
    async function listUsers() {
        // fetch all todos
        const { data } = await client.models.User.list();
        setUsers(data);
    }
    listUsers();
  }, []);

  useEffect(() => {
    const sub = client.models.User.observeQuery()
      .subscribe(({ items }) => setUsers([...items]))

    return () => sub.unsubscribe()
  }, []);

  return (
    <main>
      <h1>Users</h1>
      <div>
        <input
          placeholder="user_id"
          name="user_id"
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
          // create a new User with the following attributes
          const { errors, data: newUser } = await client.models.User.create({
            user_id: formState.user_id,
            name: formState.name
          });
          console.log(errors, newUser);
        }}>Create </button>
        <button title="Cancel" >
          Cancel 
        </button>
      </div>

      <ul>
        {users.map((user:any) => (
          <li key={user.user_id}>{user.name}</li>
        ))}
      </ul>
    </main>
  );
}
