const http = require('http');
const mainRouteController = require("../1/controllers/main.js");
const gameRouteController = require("../1/controllers/game.js");
const voteRouteController = require("../1/controllers/vote.js");
const express = require('express');
const mainRoute = require('./routes/main');
const gamesRouter = require('./routes/games'); 

const PORT = 3000;
const app = express();

app.use(mainRoute, gamesRouter); 

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
}) 

const server = http.createServer((req, res) => {
  const url = req.url;
  switch (url) {
    case "/":
      mainRouteController(res, "/index.html", ".html");
    break;
    case "/game":
      gameRouteController(res);
    break;
    case "/vote":
      voteRouteController(req, res);
    break;   
    default:
    defaultRouteController(res, url);
  }    
});
  
server.listen(3000);