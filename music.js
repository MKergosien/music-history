var rightJsDiv = document.getElementById("rightjs");

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";


var output = "";

// songs.unshift ()  -  Adds to the begenning of list
// songs.push ()     -  Adds to the end of the list

for (var i = 0; i < songs.length; i++) {
	var itemString = songs[i];
	itemString = itemString.replace(">", "-");
	itemString = itemString.replace(/\*/g, "");
	itemString = itemString.replace(/@/g, "");
	itemString = itemString.replace(/\(/g, "");
	itemString = itemString.replace(/!/g, "");
	
	output+= "<p>" + itemString + "</p>";

	console.log(songs[i]);
}

	// rightJsDiv.innerHTML = output;
	console.log (songs);

