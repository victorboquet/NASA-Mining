var data;

function preload(){
	data = loadJSON("/data/colours.json");
	// data = loadJSON( "http://www.colourlovers.com/api/palettes/top?format=json&numResults=100" );
}

function setup(){
	createCanvas( windowWidth, windowHeight );
}

function draw(){
	for (var i = 0; i < data.length; i++) {
		var colors = data[ i ].colors;
		for (var i = 0; i < colors.length; i++) {
			fill( unhex( [ 
				colors[ i ].substring( 0, 2 ),
				colors[ i ].substring( 2, 4 ),
				colors[ i ].substring( 4, 6 )
			] ) );
			noStroke();
			rect( i * width / colors.length, 0, width / colors.length, height / data.length );
		}
	}
}

function windowResized(){
	resizeCanvas( windowWidth, windowHeight );
}

function mouseMoved(){
	var h1 = document.getElementById( "grosTitre" );
	h1.innerHTML = data[ mouseY / ( windowHeight / data.length ) ].title;
}