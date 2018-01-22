# Minddoc Backend

Backend skeleton for Node.js Express written in Typescript with Jest for testing

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

* Follow instructions to install NodeJS from the following link - https://nodejs.org/en/download/
* Follow instructions to install npm from the following link - https://www.npmjs.com/package/npm
* Follow instructions to install Express from the following link - https://expressjs.com/en/starter/installing.html

### Installing

The following steps will enable you to setup your development environment :

* Clone the repository from here : ```https://gitlab.com/mind-doc/takeshi```
* Install the node_modules in the root folder : ```npm install```
* Build the project : ```npm run build```
* Run the application on port 3000 : ```npm start```
* Run tests : ```npm run test```

## Directory Structure and Important Files

```
dist/                   // distribution folder for the app
node_modules/           // npm modules
src/                    // source folder
-- config/              // all application config files
-- controllers/         // controllers containing app logic
---- home               // test controller -- to be removed later
---- mailer             // mailer controller to send email to support team
-- models               // all future db + application models
-- app.ts               // instantiate application and register all routes
-- server.ts            // express server config
test/                   // test files
-- .eslintrc.yaml       // config file for lint
-- jest.config.js       // config file for jest
-- packages.json        // application definition file
-- tsconfig.json        // config file for typescript
```