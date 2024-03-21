// import json server 
const jsonServer = require("json-server");

// create a server application using json-server
const restserver = jsonServer.create();

// setup path for db.json
const router = jsonServer.router('db.json');

// return a middleware instance used by json-server
const middleware = jsonServer.defaults();

// setup port for db.json 
const port = 3001;

// use middleware in server
restserver.use(middleware);
restserver.use(router);

// to run the server
restserver.listen(port, () => {
    console.log("rest server listening on port " + port);
});
