Code Challenge:

This repo has been configured to host the code challenge as requested by 500px.

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
