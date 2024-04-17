const http = require('http');
const mainRouteController = require("../1/controllers/main.js");
const gameRouteController = require("../1/controllers/game.js");
const voteRouteController = require("../1/controllers/vote.js");

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