const { getRandomGame } = require("../appModules/api");
const { config } = require("../appModules/rating");

const fs = require("fs").promises;
async function gameRouteController(res) {

  try {
    const ratingFile = await fs.readFile(config.BASE_PATH_RATING_FILE);
    const data = JSON.parse(ratingFile);
    const game = getRandomGame(data);
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(game));
  } catch {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}

module.exports = gameRouteController;
