const currentDate = new Date ();
var postDate = document.getElementsByName ("LastPostDate") [0].getAttribute ("content");

if (postDate != currentDate.toISOString ().slice (0, 10))
{
	document.getElementById ("Message").remove ();
}