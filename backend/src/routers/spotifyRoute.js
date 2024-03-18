const Express = require("express");

const querystring = require("querystring");
const url = require("url");
const generateRandomHex = require("../utils.js");
const router = Express.Router();
const response_type = "code";
const scope = process.env.SCOPE;

const redirect_uri = process.env.redirect_uri;
const client_id = process.env.client_id;
const client_secret = process.env.client_secret;
router.use(Express.json())
router.route("/login").get(async function (req, res) {
  const state = generateRandomHex(24);
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type,
        client_id,
        scope,
        redirect_uri,
        state,
      })
  );
});
router.route("/callback").get(async function (req, res) {
  console.log("hiii")
  let code = req.query.code || null;
  let state = req.query.state || null;
  const form =new URLSearchParams();
  form.append('grant_type',"authorization_code");
   form.append("code", `${code}`);
   form.append("redirect_uri", `${redirect_uri}`);
   const authOptions={
    method:"POST",
    headers:{
        "content-type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${Buffer.from(
        `${client_id}:${client_secret}`,
        "utf-8"
      ).toString("base64")}`,
    },
    body:form,
    }
    const token = await fetch("https://accounts.spotify.com/api/token",authOptions)
    .then((data)=>data.json())
    .catch((err)=>
    console.log(err));
    res.send(token)
   }
   
);

router.post("/refresh_token/", async function (req, res) {
 if(!req?.body?.token)
 return
   const url = "https://accounts.spotify.com/api/token";
console.log(req.body?.token)
    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'refresh_token',
        refresh_token: req.body?.token,
        client_id: client_id
      }),
    }
    const body = await fetch(url, payload);


 
})

module.exports = router;
