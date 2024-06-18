/**************
* CakeGame.js *
***************/

const body = document.body;
var maxHeight;
const maxCakes = 56;
const speed = 1;
const gamespeed = 2;
const cakeSize = 32;
var isPlaying = false;
var score = 0;
const chomp = new Audio ("/assets/audio/Chomp.wav");
const boom = new Audio ("/assets/audio/Boom.wav");
var interval;

window.onload = function ()
{
    maxHeight = Math.max (
        body.scrollHeight, 
        body.clientHeight, 
        body.offsetHeight, 
        document.documentElement.scrollHeight, 
        document.documentElement.offsetHeight, 
        document.documentElement.clientHeight
    );
};

function CakeGame ()
{
    if (isPlaying)
    {
        return;
    }

    body.innerHTML += `
    <style type = "text/css">

        .CakeGame_Cake
        {
            display: inline-block;
            position: absolute;
            font-size: ` + cakeSize.toString () + `px;
            z-index: 110;
            transition: scale 0.1s;
        }

        .CakeGame_Cake:hover
        {
            scale: 2;
        }

        .CakeGame_Cake, img, button, h1, h2, h3, p, a, span
        {
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }

    </style>`;

    isPlaying = true;
    score = 0;

    alert ("Catch as many cakes as you can while avoiding the bombs!");

    for (var i = 0; i < maxCakes; i++)
    {
        SpawnCake ();
    }

    requestAnimationFrame (function () {interval = setInterval (MainLoop, gamespeed)});
}

function MainLoop ()
{
    var cakes = document.getElementsByClassName ("CakeGame_Cake");

    for (var i = 0; i < cakes.length; i++)
    {
        var currentHeight = parseInt (cakes [i].style.top, 10);
        cakes [i].style.top = (currentHeight + speed) + "px";

        if (currentHeight > maxHeight)
        {
            ResetCake (cakes [i]);
        }
    }

    document.getElementById ("CakeGame_Score").innerHTML = score.toString ();
}

function OnCakeClick (cake)
{
    if (!isPlaying)
    {
        return;
    }

    var isBomb = cake.getAttribute ("bomb");

    if (isBomb == "true")
    {
        cake.innerHTML = "💥";

        var cakes = document.getElementsByClassName ("CakeGame_Cake");

        for (var i = 0; i < cakes.length; i++)
        {
            if (cakes [i] != cake)
            {
                cakes [i].remove ();
            }
        }

        boom.play ();
        isPlaying = false;
        clearInterval (interval);

        boom.onended = function ()
        {
            alert ("Game Over!\n\nScore: " + score.toString ());
            window.location.reload ();
        };
    }
    else
    {
        chomp.play ();
        score = score + 1;
        ResetCake (cake);
    }
}

function SpawnCake ()
{
    var positionX = Math.random () * (body.offsetWidth - cakeSize);
    var positionY = Math.random () * (maxCakes * (2 * cakeSize)) * -1;
    body.innerHTML += "<span class = 'CakeGame_Cake' onmousedown = 'OnCakeClick (this)' style = 'top: " + positionY.toString () + "px; left:" + positionX.toString () + "px;'>🎂</span>";
}

function ResetCake (cake)
{
    cake.style.left = Math.random () * (body.offsetWidth - cakeSize) + "px";

    if (Math.random () >= 0.9)
    {
        cake.setAttribute ("bomb", "true");
        cake.innerHTML = "💣";
    }
    else
    {
        cake.setAttribute ("bomb", "false");
        cake.innerHTML = "🎂";
    }

    cake.style.top = "0px";
}