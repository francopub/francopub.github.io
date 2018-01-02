var rooms =  {
	"room0": "<p>You are in a dark cold place and you see a light to the <b>north</b> and you hear the sound of running water to the <b>west</b>.</p>"
}



$(document).ready(function(){
	$('#game-text').prepend(rooms['room0']);
	$(document).keypress(function(key){
		if(key.which === 13 && $('#user-input').is(':focus')) {
			var value = $('#user-input').val();
			alert(value);
		}
		


	})

});