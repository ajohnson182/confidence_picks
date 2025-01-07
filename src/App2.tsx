// import { useEffect, useState } from "react";
// import type { Schema } from "../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";
import Users from "./Users"
import Leagues from "./Leagues"
import Picks from "./Picks"
// import { getCurrentUser } from 'aws-amplify/auth';
// import {
//   // Card,
//   // Image,
//   // Input,
//   // Flex,
//   // Text,
//   // useAuthenticator
// } from '@aws-amplify/ui-react';

// const client = generateClient<Schema>();


function App2() {
  // const { user, signOut } = useAuthenticator();

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
    <Users />
    <Leagues />
    <Picks />
    </main>
  );
}

export default App2;
