import Artists from "../components/Artists";

async function getArtists(id) {
  const token = `BQAmBVbnlUQbvNtFahhw90z8JieOqO30zjwhGGV4MtAi_DUCwBj5Mcjz_bR2j6dJ4SZx3RtfJK6SZJypaFK-JgYkwmM1catG3sSAqiCLON6reD409oW6vwvzAtHMdul84JzddjSEbepVjmE1cZ9d5Np33fdVgrJtXwrGcXTth5u1u8brOsefVuISFIZigiyi7_zKTzBoBp7L0XCuXSqhPBHDoUguYqcs`;
const headers = new Headers({
  Authorization: `Bearer ${token}`,
  // Add other headers if needed
  "Content-Type": "application/json",
});
const url = `https://api.spotify.com/v1/browse/featured-playlists?locale=sv_SE&limit=10&offset=5`;
const options={
  method:'GET',
  headers
}
const data=await (fetch(url,options).then((data)=>data.json()).catch(err=>err))
console.log(data)
}
export default getArtists