const GOOGLE_API_KEY = "AIzaSyDv9m4nHZyzngRJNxceo_dPY4bCuve9iO4"

export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" + GOOGLE_API_KEY

export const YOUTUBE_SEARCH_API =
"https://youtube-data8.p.rapidapi.com/auto-complete/?q=";

export const OPTIONS = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
		'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST
	}
}