var currentRoom = "a1";
var commands = ["go", "get", "look", "talk", "fight", "inventory"];
var inventory = ["sword", "shield"];

function changeRoom(dir) {
	if(rooms[currentRoom].directions[dir] !== undefined) {
		currentRoom = rooms[currentRoom].directions[dir]
		$('#game-text').prepend("<p>" + rooms[currentRoom].description + "</p>");
	} else {
		$('#game-text').prepend("<p>You walk into the wall, but you do not pass through. You do not know this spell yet. You take 3 points of bludgeoning damage.</p>"); // randomize a bunch of creepy messages
	} 
}

function showHelp() {
	$('#game-text').prepend("<p>You have " + commands.join("\n") +  " </p>") // make this look better
}


function showInventory() {
	if(inventory.length === 0 ) {
		$('#game-text').prepend("<p>You have nothing </p>") // make this look better
		return;
		}	
	$('#game-text').prepend("<p>Here are your options: " + inventory.join("\n") +  " </p>") // make this look better
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
	$('#game-text').prepend("<p>" + rooms.a1.description + "</p>");
	$(document).keypress(function(key){
		if(key.which === 13 && $('#user-input').is(':focus')) {
			var value = $('#user-input').val().toLowerCase();
			$('#user-input').val("");
			playerInput(value);
		
		}
	})
});
