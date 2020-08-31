var database = [
	{
		username:"Harsha",
		password:"Student73"
	},
	{
		username:"Hariprasath",
		password:"Assistprof67"
	},
	{
		username:"Junaid",
		password:"Student85"
	}
];

var newsfeed = [
	{
		username:"Harsha",
		timeline:"Javascript is so cool!"

	},
	{
		username:"Hariprasath",
		timeline:"Java is the best!"
	},
	{
		username:"Junaid",
		timeline:"Python is the All-rounder!"
	}
];

function isUserValid(username, password){
	for (var i =0; i < database.length; i++){
		if(database[0].username ===  username &&
			database[0].password === password){
			return true;
		}
	}
	return false;
}

function signIn(username,password){
	if (isUserValid(username, password)) {
	 	console.log(newsfeed);
	}else {
	 	alert("Sorry, wrong username and password");
	}
}


var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);
