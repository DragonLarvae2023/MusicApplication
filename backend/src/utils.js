const crypto = require("crypto");
function generateRandomHex(length) {
  return crypto.randomBytes(length).toString("hex").slice(0, length);
}
module.exports=generateRandomHex