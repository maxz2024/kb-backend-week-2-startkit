const parseBody = require("../appModules/http-utils/parse-body");
const { createRating, updateRating } = require("../appModules/rating/calculations");
const { BASE_PATH_RATING_FILE, WEIGHT } = require("../appModules/rating/config");
const fs = require("fs").promises;

async function voteRouteController(req, res) {
  if (req.method !== "POST") {
    res.statusCode = 404;
    res.end("Not Found");
  } else {
    try {
      const body = await parseBody(req);
      const data = JSON.parse(body)
      const rating = createRating(data, WEIGHT);
      const ratingFile = await fs.readFile(BASE_PATH_RATING_FILE, "utf8");
      let ratingArray = JSON.parse(ratingFile);
      let newRating = updateRating(ratingArray, data.id, rating);
      await fs.writeFile(BASE_PATH_RATING_FILE, JSON.stringify(newRating));
      res.setHeader('Content-Type', 'application/json');
      newRating.sort((a, b) => b.rating - a.rating);
      res.end(JSON.stringify(newRating));
    } catch (error) {
      console.log(error)
      res.statusCode = 500;
      res.end("Internal Server Error");
    }
  }
}


module.exports = voteRouteController;
