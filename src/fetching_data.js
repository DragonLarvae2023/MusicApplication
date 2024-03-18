import { Buffer } from "buffer";
// import crypto from 'crypto';
// const authorizeSpotify = async () => {

//   const authorizationEndpoint = "https://accounts.spotify.com/authorize";
//   const responseType = "code";
//   const clientId = "cff8a4effe144e5c8bc9651446a32444";
//   const scope = "user-read-private user-read-email";
//   const redirectUri = "http://localhost:1234/";
//   const state = crypto.randomBytes(16).toString('hex');

//   const queryParams = new URLSearchParams({
//     response_type: responseType,
//     client_id: clientId,
//     scope: scope,
//     redirect_uri: redirectUri,
//     state: state,
//   });

//   const authorizationUrl = `${authorizationEndpoint}?${queryParams.toString()}`;

//   try {
//     const response = await fetch("https://corsproxy.org/?" + authorizationUrl);

//     // Handle the response, e.g., check for success, handle errors, etc.
//     // For example:
//     if (response.ok) {
//       const responseData = await response.json();
//       console.log("Authorization successful:", responseData);
//     } else {
//       console.error("Authorization failed:", response.statusText);
//     }
//   } catch (error) {
//     console.error("Error during authorization:", error);
//   }
// };

// // Call the function to initiate the authorization
// authorizeSpotify();

//Specify the URL
const url = "https://accounts.spotify.com/api/token";

// Specify the form data as a URL-encoded string
const formData = new URLSearchParams();
formData.append("grant_type", "client_credentials");
formData.append(
  "scope",
  "user-read-private user-modify-playback-state user-read-playback-state"
);

const userCredentials = Buffer.from(
  `${"945891137e5c466c94d879ed8de8f01d"}:${"4768904910b349359d301b49c7de3b6b"}`,
  "utf-8"
).toString("base64");
console.log(`User Credentials ${userCredentials}`);
fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${userCredentials}`,
  },
  body: formData,
})
  .then((response) => response.text())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
const SCOPES = ['user-read-private', 'user-modify-playback-state', 'user-read-playback-state'];

console.log(Buffer.from("hi this is how its done", "utf-8").toString("base64"));
const authUrl = `${"https://accounts.spotify.com/api/token"}?client_id=${"945891137e5c466c94d879ed8de8f01d"}&redirect_uri=${"http://localhost:1234"}&scope=${SCOPES.join(
  "%20"
)}&response_type=code`;
window.location.href=authUrl;

async function getToken(){
     const authOptions = {
       url: "https://accounts.spotify.com/api/token",
       form: {
         code: code,
         redirect_uri: redirect_uri,
         grant_type: "authorization_code",
       },
       headers: {
         "content-type": "application/x-www-form-urlencoded",
         Authorization:
           "Basic " +
           new Buffer.from(client_id + ":" + client_secret).toString("base64"),
       },
       json: true,
     };
     fetch(authOptions.url,{

     })
}