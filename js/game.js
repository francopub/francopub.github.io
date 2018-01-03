var currentRoom = "start";
var commands = ["go", "get", "look", "talk", "fight", "inventory"];
var inventory = ["sword", "shield"];

function changeRoom(dir) {
	if(rooms[currentRoom].directions[dir] !== undefined) {
		currentRoom = rooms[currentRoom].directions[dir]
		$('#game-text').prepend("<p>" + rooms[currentRoom].description + "</p>");
	} else {
		$('#game-text').prepend("<p>You start walking in that direction, but the graphics do not render, so you return</p>"); // randomize a bunch of creepy messages
	} 
}

function showHelp() {
	$('#game-text').prepend("<p>You have " + commands +  " </p>") // make this look better
}


function showInventory() {
	if(inventory.length === 0 ) {
		$('#game-text').prepend("<p>You have nothing </p>") // make this look better
		return;
		}	
	$('#game-text').prepend("<p>Here are your options: " + inventory +  " </p>") // make this look better
}

function playerInput(input) {
	var command = input.split(" ")[0];
		switch(command){
			case "go":
				var dir = input.split(" ")[1];
				changeRoom(dir);
				break;
			case "help":
				showHelp();
				break;
			case "inventory":
				showInventory();
				break;
			default: 
				$('#game-text').prepend("<p>Invalid command!</p>")
			}
}

$(document).ready(function(){
	$('#game-text').prepend("<p>" + rooms.start.description + "</p>");
	$(document).keypress(function(key){
		if(key.which === 13 && $('#user-input').is(':focus')) {
			var value = $('#user-input').val().toLowerCase();
			$('#user-input').val("");
			playerInput(value);
		
		}
	})
});
