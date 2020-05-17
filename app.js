const dotenv 	=	require('dotenv');
const twit 		=	require('twit');

dotenv.config();


var Twitter = new twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});


var action = async () => {
    var params = {
        q: '#javascript',  // REQUIRED
        count:25,
        result_type: 'recent',
        lang: 'en'
    }


    await Twitter.get('search/tweets', params, async function(err, data, response) {
		if(!err){
			console.log(data.statuses.length);
		    for(let i = 0; i < data.statuses.length; i++){
		      	var tid = { id: data.statuses[i].id_str }
		      	console.log(i);
		      	console.log(tid);		      	
		      	await Twitter.post('favorites/create', tid).then((data, response) =>{
		        		console.log("Liked !!");
		        	}).catch((err) => {
		          		console.log("ALREADY LIKED OR error in liking");
		        	});


		    	await Twitter.post('statuses/retweet/:id', tid).then((data, response) =>{
		    			console.log('Retweeted');
		    		}).catch((err) => {
		    			console.log('error in retweeting OR ALREADY RETWEETED');
		    		});
		    
		    } //for loop
		} 
		else {
		    console.log(err);
		  	}
	});
}

action();
setInterval(action, 9000000);
            