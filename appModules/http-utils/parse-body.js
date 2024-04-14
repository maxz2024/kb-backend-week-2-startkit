function parseBody(req, callback) {
  let data = " ";

  req.on("data", (chunk) => {
    data += chunk;
  });

  req.on("end", () => {
    callback(null, data);
  });

  req.on("error", (error) => {
    callback(error, null);
  });
}

module.exports = parseBody