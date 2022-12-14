import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoNewsHeaders = { 
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '41790d6d4dmsh3a5dafecdf4a2afp149453jsn12fdd4d197eb',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  };

  //const baseUrl = 'https://bing-news-search1.p.rapidapi.com';
  const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL}),
    endpoints: (builder) => ({
       getCryptosNews: builder.query({
         query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`), 
       }),
    }),
});
export const { useGetCryptoNewsQuery } = cryptoNewsApi;











// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '41790d6d4dmsh3a5dafecdf4a2afp149453jsn12fdd4d197eb',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };