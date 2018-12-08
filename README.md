Code Challenge:

This repo has been configured to host the code challenge as requested by 500px.

To setup the project clone the repo to your local machine and run the below commands from the root project
directory in your console.

```
npm install
```

or 

```
yarn
```

I will supply a file separately with the appropriate consumer key. Please store the consumer.js file a
in the src folder.

In order to launch the development build please run the following command from the root project directory 
in your console.

```
npm start
```
or 
```
yarn start
```

Please note, that any calls to the 500px api will fail without a valid consumer.js file. If you are 
meant to view this information a valid file will be supplied to you.

Unit Tests:

for all unit testing jest has been integrated. The focus has been on snapshot tests to ensure the 
correct html structures are returned given an appropriate input.

In order to test the development build please run the following command from the root project directory 
in your console.  

```
npm test
```
or
```
yarn test
```
