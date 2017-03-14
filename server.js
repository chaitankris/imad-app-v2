var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={
	'article-One':{
		title:'Article one | Chaitan Kris',
		heading:'Article one',
		date:'Mar 10 ,2017',
		content :`<p>
		This is my first article in my webapp
		</p>`

	},
	'article-Two':{
	    title:'Article two | Chaitan Kris',
		heading:'Article two',
		date:'Mar 11 ,2017',
		content :`<p>
		This is my second article in my webapp
		</p>`

	}
};

function createTemplate(data){
	var title = data.title;
	var heading = data.heading;
	var content = data.content;
	var date = data.date;

	var htmlTemplate = `
	<html>
	<head>
	
	<title> ${title}	</title>
    <meta name="viewport " content="width = device-width , intial-sacle=1"/>
        <link rel="stylesheet" type="text/css" href="/ui/style.css"/>
	</head>

	<body>

	<div class="container">
	       <div> <a href="/">Home</a> </div>
	       <hr/>

	        <div> ${heading} </div>

	        <div> ${date} </div>

            <div> ${content} </div>

    </div>	

	</body>
	</html>`;


	return htmlTemplate;
}


app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
	res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/:articleName',function(req,res){

	var articleName = req.params.articleName;
	res.send(createTemplate(articles[articleName]));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
	console.log(`IMAD course app listening on port ${port}!`);
});
