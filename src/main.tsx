import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom/client";
import { Authenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import App from "./App.tsx";
import "./index.css";
import { Amplify, Auth, API } from 'aws-amplify';
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';

Amplify.configure(outputs);

ReactDOM.createRoot(document.getElementById("root")!).render(
    
  <React.StrictMode>
    <Authenticator>
      <App />
    </Authenticator>
  </React.StrictMode>
);
