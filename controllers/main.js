const staticFile = require("../appModules/http-utils/static-file");

function mainRouteController(res, publicUrl, extname) {
  res.statusCode = 200;
  staticFile(res, publicUrl, extname);
}

module.exports = mainRouteController
