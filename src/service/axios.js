import axios from "axios";

const BASE_URL = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const API_HOST = "free-to-play-games-database.p.rapidapi.com";
const API_KEY = "3214b07db7msh5107f3820563dc3p140b02jsn314d76de900b";

export async function fetchLiveGames() {
  const options = {
    method: "GET",
    url: BASE_URL,
    headers: {
      "X-RapidAPI-Key": API_KEY,
      "X-RapidAPI-Host": API_HOST,
    },
  };

  return axios.request(options);
}
