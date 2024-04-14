const path = require("path");
const mimeTypes = require("../appModules/http-utils/mime-types");
const staticFile = require("../appModules/http-utils/static-file");

async function defaultRouterController(res, url) {
  const extname = String(path.extname(url)).toLowerCase();
  if (extname in mimeTypes) {
    staticFile(res, url, extname);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}

module.exports = defaultRouterController;
