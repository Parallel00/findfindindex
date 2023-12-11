function findUserByUsername(usernames, screenname){
	return usernames.find(function(user){
		return user.screenname === screenname;
	})
}

function removeUser(usernames, screenname){
	let indx = usernames.findIndex(function(user){
		return user.screenname === screenname;
	});
	if(indx === -1) return;
	
	return usernames.splice(indx,1)[0];
}