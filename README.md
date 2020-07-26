# twitter_bot
A twitter bot build using twitter official API and twit npm package that favorites and retweet tweet who uses **#javascript**

# Notes :

In **app.js** file, line 7 to 12 , 
```
var Twitter = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
```

please insert your own config credentials.

## Run 
``` node app.js ```
