
var paths = [];
var captions = [];
var currentIndex = 1;
var time = 5000;

async function MakeCarousel ()
{
	let response = await fetch ("assets/json/Carousel.json");
	let jsonObject =  await response.json(); // Convert response to JSON.
	
	var carousel = document.getElementById ("Carousel");

	for (i in jsonObject) // Itterate through all the JSON objects.
	{
		paths.push (jsonObject [i].path); // Put the stuff into the arrays.
		captions.push (jsonObject [i].caption);
	}
	
	GoLeft (); // A hack to render the Image Carousel properly.
}

function GoLeft () // Called when the Left Arrow is pressed.
{
	var link = document.getElementById ("CarouselLink"); // Reference everything.
	var image = document.getElementById ("CarouselImage");
	var caption = document.getElementById ("CarouselCaption");

	currentIndex--;
	
	if (currentIndex < 0) // Wrap round.
	{
		currentIndex = paths.length - 1;
	}
	
	image.setAttribute ("src", paths [currentIndex]);
	image.setAttribute ("alt", captions [currentIndex]);
	
	setTimeout (GoLeft, time); // Scroll automatically.
}

MakeCarousel (); // Call the function on page load.