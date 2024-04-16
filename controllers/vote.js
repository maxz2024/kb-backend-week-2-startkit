const parseBody = require("../appModules/http-utils/parse-body");

async function voteRouteController(req, res) {
  try {
    const body = parseBody(req);
    console.log(body)
    res.statusCode = 200;
    res.end("Success!");
  } catch (error) {
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
}


module.exports = voteRouteController;
