## Add an .env file to the root will look like:

`REACT_APP_RAPIDAPI_KEY =  '42ccd991a2mshe570b7059ff36ebp1ce37bjsnd4c52d0de59a'`

`REACT_APP_CRYPTO_API_URL = 'https://coinranking1.p.rapidapi.com'`

 `REACT_APP_NEWS_API_URL = 'https://bing-news-search1.p.rapidapi.com'`

 `REACT_APP_NEWS_RAPIDAPI_HOST = 'bing-news-search1.p.rapidapi.com'`

` REACT_APP_CRYPTO_RAPIDAPI_HOST ='coinranking1.p.rapidapi.com'`

# How to run this project

As this project has both server and UI sides together you need to do "npm run dev" to run both of them at the same time.

P.S. Don't forget to run "npm install" in both main root and server folder.

# RAPIDAPI NOTE
That REACT_APP_RAPIDAPI_KEY has a daily limit as I used the free version, it's very unlikely that one can exceed that limit in a day, but if you see errors in the network tab, that could be related to this mater.
