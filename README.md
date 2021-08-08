# noteapp-api

This was a simple API portfolio that use Hapi (a Node Js framework).

## Install nodemon 
To keep the server running even if the code has changed

`npm install nodemon --save-dev`

## Execute the code

`cd noteapp-api`
`npm run start`

## Install ESLint for javascript styling

`npm install eslint --save-dev`

`npx eslint --init`

Execute ESLint with

`npm run lint`

Some of javascript styling in ESLint:
1. https://google.github.io/styleguide/jsguide.html
2. https://github.com/airbnb/javascript#arrow-functions
3. https://standardjs.com/

For better styling in VSCode, we can also donwload ESLint extension in VSCode

## Install Nanoid (String id handle and crate unique id number in API)

`npm install nanoid`
Then check package.json

## Install Hapi (Node Js Framework)

`npm install @hapi/hapi`
Then check package.json
`npm run start`

## Execute the code

`cd noteapp-api`
`npm run start`

## Check the output at Postman or browser at :
1. localhost:5000/notes for HTTP Request GET and POST
2. localhost: 5000/notes/{id} to HTTP Request PUT and Delete or GET note data by specific id.

Reference: https://www.dicoding.com/academies/261/tutorials
