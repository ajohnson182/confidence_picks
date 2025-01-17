import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any unauthenticated user can "create", "read", "update", 
and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  User: a 
    .model({
      user_id: a.id().required(),
      name: a.string(),
      leagues: a.hasMany("UserLeagues", "user_id")
    }).identifier(["user_id"]),
  Pick: a
    .model({
      team_id: a.id().required(),
      confidence_score: a.integer(),
      user_id: a.id().required(),
      league_id: a.id().required(),
      league: a.belongsTo("League", "league_id")
    }).identifier(["user_id","league_id","team_id"]),
  League: a
    .model({
      league_id:  a.id().required(),
      name: a.string(),
      picks: a.hasMany("Pick", "league_id"),
      users: a.hasMany("UserLeagues", "league_id"),
      contest_id: a.id().required(),
      contest: a.belongsTo("Contest","contest_id")
    }).identifier(["league_id"]),
  UserLeagues: a 
    .model({
      league_id: a.id().required(),
      user_id: a.id().required(),
      league: a.belongsTo("League", "league_id"),
      user: a.belongsTo("User", "user_id"),
    }).identifier(["league_id","user_id"]),
  Contest: a
    .model({
      contest_id: a.id().required(),
      name: a.string(),
      teams: a.hasMany("Team", "contest_id"),
      leagues: a.hasMany("League", "contest_id")
    }).identifier(["contest_id"]),
  Team: a
    .model({
      team_id: a.id().required(),
      name: a.string(),
      seed: a.integer(),
      logo_ref: a.string(),
      data: a.json(),
      score: a.integer(),
      contest_id: a.id().required(),
      dead: a.boolean(),
      contest: a.belongsTo("Contest","contest_id")
    }).identifier(["team_id","contest_id"]),
  // UserLeagues: a
  //   .model({
  //     user_id:  a.id().required(),
  //     leagues: a.hasMany("League", "league_id")
  //   }).identifier(["user_id"])
}).authorization((allow) => [allow.publicApiKey()])

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
