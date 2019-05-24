## SET UP ENVIRONMENT
[] yarn init (set up files)
[x] yarn install (node modules)
[] yarn add express, helmet, morgan 
[] yarn add nodemon --dev (for deployment)
[x] yarn add dotenv
[x] yarn add knex sqlite3
[] yarn add bcryptjs
[x] add script: 
 "scripts": {
    "server": "nodemon index.js", (auto updates server)
    "start": "node index.js"
  },
[] install yarn add express-session (cookies)
[] yarn add connect-session-knex 
[] yarn add cors (to connect to react app)
[] yarn add jsonwebtoken
[] npx gitignore node (to create a gitignore file)

## ORGANIZATION
[] server file 
[] index file 
[] routes folder
    [] routes files
    [] models
[] migrations
[] knex file
[] seeds files 
[] data folder
[] dbConfig file 
[]  env file

## CREATING REACT APP IS SAME FOLDER
[] yarn install (outside of app for node modules, optional)
[] yarn create react-app name
    [] cd into react folder
    [] yarn start 
[] cd into folder 
[] yarn add react-router-dom
[] update index.js by importing router and wrapping app in router 
[] yarn add axios 
[] Write Login component
[] Add NavLink and Route for Login in App.js
[]MAKE SURE YOU ARR USING A REGISTERED USER & THAT YOU LOGGED IN WITH REGISTERED USER ON POSTMAN
[] to check for token...click application and when you click login you should see a token on your localStorage 
[] create HOC so client can make requests to backend 

##MIGRATIONS (way to recreate your database to particular point in time)

- `npx knex` or  shows command list 
- run `npx  knex init` or ``yarn knex init ` to generate `knexfile.js`
- modify `knexfile.js` to config our db connections
- remove staging and production configs from `knexfile.js`
- run `npx knex migrate:make create_name_of_table` 
- make a migration for each db schema change 
- run `npx knex migrate:latest` to update changes made to table 
- SAVE FILES AND CHECK YOUR SERVER
- need to create a migration for every changes made, i.e. adding email or creating another table, etc
- `npx knex migrate:rollback` deletes last migration added 


##TO SEED

- `npx knex seed:make name of table 
- can add numbers to order seeds
- `npx knex seed: run`

## TESTING ENVIRONMENT


[x] add to packacke.json: (for the env file)
 "jest": {
    "testEnvironment": "node"
  }
[] yarn start server 
[] need cross env for testing for node (installed already)
[] create .env file:
[x] add  to package.json
“Jest”; {
“devEnvironment”: node, 
}

OR 

Jest —init
	- override: yes
	- can be: no or yes 
	-testing environment: node
	- Coverage reports: yes
	- auto clear mock calls: no

^^^ takes the jest key out of the package.json and goes to jest  config file 

[]  knex migrate:latest --env=testing (how you pass migrations and seeds in diff environment, not always necessary to run) NEEDED FOR TESTING DB FOLDER 
    - creates test database 
    - can add --env=testing to seed command to create testing seeds 

[x] yarn add supertest — dev
[] yarn add jest-dom --dev
[x] yarn add cross-env and add to scripts 