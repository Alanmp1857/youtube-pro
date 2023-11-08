const GOOGLE_API_KEY = "AIzaSyAjBGSrlbM7MnYzvwGSiMN_QZ4dSFJ8gVY";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// export const YOUTUBE_SEARCH_API =
//   "https://clients1.google.com/complete/search?client=youtube&q=";

// export const YOUTUBE_SEARCH_API = `https://www.googleapis.com/youtube/v3/search?key=${GOOGLE_API_KEY}&part=snippet&maxResults=10&q=`;
