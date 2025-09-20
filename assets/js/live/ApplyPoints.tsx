
function ApplyPoints (points)
{
    console.log (points);

    document.getElementById ("SendingLabel").innerHTML = "<b>Sending request to server...</b>";
    const request = new XMLHttpRequest ();
    var key = localStorage.getItem ("DragonQuestLiveKey");

    request.open ("PUT", host + "/api/ApplyPoints/" + key + "/" + team.value + "/" + points);
    request.setRequestHeader ( "Content-type", "application/json; charset=utf-8");
    const body = JSON.stringify ({body: "",});
    request.responseType = "json";
    request.onload = () =>
    {
        document.getElementById ("SendingLabel").innerHTML = "";

        if (request.readyState == 4 && request.status == 200)
        {
            return;
        }
        else if (request.status == 403)
        {
            alert ("Key not valid. Please authenticate your device.");
            window.location.href = "/dragonquest/live/checkout.html";
        }
        else
        {
            console.log (`Error: ${request.status}`);
            return;
        }
    };

    request.send (body);
}