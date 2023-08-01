import axios from "axios";

const BASE_URL = 'https://youtube-search-results.p.rapidapi.com/youtube-search/'
const options = {
    params: {q: 'justin+bieber'},
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
    }
  };

  export const fetchDataFromApi = async(url) =>{
     const {data} = await axios.get(`${BASE_URL}/${url}`,options)
     console.log(data);
     return data;
  }