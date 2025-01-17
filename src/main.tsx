import React from 'react';
import ReactDOM from "react-dom/client";
// import { Authenticator } from '@aws-amplify/ui-react';
// import { withAuthenticator } from '@aws-amplify/ui-react';
import App4 from "./App4.tsx";
import "./index.css";
import { Amplify } from 'aws-amplify';
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
// import awsconfig from './aws-exports';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
    
  <React.StrictMode>
      <App4/>
  </React.StrictMode>
);
