const currentDate = new Date ();
var postDate = document.getElementsByName ("LastPostDate") [0].getAttribute ("content");
var persistent = document.getElementsByName ("Persistent") [0].getAttribute ("content");

if (postDate == currentDate.toISOString ().slice (0, 10) || persistent === "true")
{
	document.getElementById ("Message").style.display = "block";
}