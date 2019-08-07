jQuery(document).ready(function($) {
	var text = [ 
		"hello.",
		"i'm Mikhail...",
		"a freelance developer and designer...",
		"from Russia",
		"in love with minimalism.",
		"I also like to explore...",
		"new things and Kamchatka.",
		"I work with vector...",
		"and raster graphics",
		"HTML5 / CSS3 / JS",
		"if you need something...",
		"write me an e-mail.",
		"all the info are in the footer.",
		"please see my portfolio... bye."
	];

var htmlElement = document.getElementById("text");

var realisticTypewriter = new RealisticTypewriter();

// 10% typo rate
realisticTypewriter.accuracy = 95; 

// typing speed will be from 5 to 10 characters per second.
realisticTypewriter.minimumCharactersPerSecond = 5;
realisticTypewriter.maximumCharactersPerSecond = 10;

// waits at least 0.5 second and at most 1 second before it starts typing
realisticTypewriter.minimumInitialDelay = 500;
realisticTypewriter.maximumInitialDelay = 1200;

function writeText (counter) {
	realisticTypewriter.type(text[counter], htmlElement, function () {
		
		if (counter < (text.length - 1)) {
			
			setTimeout(function() {
				counter++;
				document.getElementById('text').innerHTML = '';
				writeText(counter);
			}, 1500); } 
		else {
			console.log('done');
		}
	});
}

writeText(0);
});




