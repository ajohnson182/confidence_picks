import { useEffect, useState } from "react";
import type { Schema } from "../amplify/data/resource";
import { useAuthenticator } from '@aws-amplify/ui-react';
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  // const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  // useEffect(() => {
  //   client.models.Todo.observeQuery().subscribe({
  //     next: (data) => setTodos([...data.items]),
  //   });
  // }, []);

  // function createTodo() {
  //   client.models.Todo.create({ content: window.prompt("Todo content") });
  // }

  const [teams, setTeams] = useState(Array(14).fill({ name: '', score: null }));
  const [allUsersData, setAllUsersData] = useState([]);

    const updateSelection = (index, name, score) => {
    const newTeams = [...teams];
    newTeams[index] = { name, score };
    setTeams(newTeams);
  };

  const saveSelections = async () => {
    try {
      await API.post('confidenceAPI', '/selections', {
        body: { selections: teams },
      });
      alert('Selections saved!');
    } catch (err) {
      console.error('Error saving selections', err);
    }
  };

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      {/*<button onClick={createTodo}>+ new</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>*/}
          {/*<div>*/}
      <h1>Confidence Scorer</h1>
      <h2>Your Selections</h2>
      <table>
        <thead>
          <tr>
            <th>Team</th>
            <th>Confidence Score</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>
                <input
                  type="text"
                  placeholder="Team Name"
                  value={team.name}
                  onChange={(e) => updateSelection(index, e.target.value, team.score)}
                />
              </td>
              <td>
                <select
                  value={team.score || ''}
                  onChange={(e) =>
                    updateSelection(index, team.name, parseInt(e.target.value))
                  }
                >
                  <option value="" disabled>Select Score</option>
                  {[...Array(15).keys()].slice(1).map((score) => (
                    <option key={score} value={score}>
                      {score}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={saveSelections}>Save Selections</button>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
