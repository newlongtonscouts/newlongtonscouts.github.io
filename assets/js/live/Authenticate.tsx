
function Authenticate ()
{
    var key = "";
    key += (document.getElementById ("Key1") as HTMLInputElement).value + "-";
    key += (document.getElementById ("Key2") as HTMLInputElement).value + "-";
    key += (document.getElementById ("Key3") as HTMLInputElement).value + "-";
    key += (document.getElementById ("Key4") as HTMLInputElement).value + "-";
    key += (document.getElementById ("Key5") as HTMLInputElement).value;
    key = key.toUpperCase ();

    console.log (key);

    const request = new XMLHttpRequest ();
    request.open ("GET", host + "/api/Authenticate/" + key);
    request.send ();
    request.responseType = "json";
    request.onload = () =>
    {
        if (request.readyState == 4 && request.status == 200)
        {
            const data = request.response;

            if (data == true)
            {
                localStorage.setItem ("DragonQuestLiveKey", key);
                alert ("Authentication succesful! You will now be redirected to the dashboard.");
                window.location.href = "/dragonquest/live/dashboard.html";
            }
            else
            {
                alert ("Invalid key. Please try again.");
            }
        }
        else
        {
            console.log (`Error: ${request.status}`);
        }
    };
}