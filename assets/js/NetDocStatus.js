/******************
* NetDocStatus.js *
*******************/

const text = document.getElementById ("StatusText");

function Success ()
{
    text.innerText = "🟢 Online";
}

function Failiure ()
{
    text.innerText = "🔴 Unavailable";
}