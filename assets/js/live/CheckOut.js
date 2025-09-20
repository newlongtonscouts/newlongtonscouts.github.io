function CheckOut() {
    var points = 0;
    points += parseInt(document.getElementById("ArrivingTogether").value);
    points += parseInt(document.getElementById("ArrivingRightDirection").value);
    points += parseInt(document.getElementById("NextLeg").value);
    points += parseInt(document.getElementById("Behaviour").value);
    points += parseInt(document.getElementById("Challenge").value);
    ApplyPoints(points);
    document.getElementById("SendingLabel").innerHTML = "<b>Sending request to server...</b>";
    const request = new XMLHttpRequest();
    var key = localStorage.getItem("DragonQuestLiveKey");
    request.open("PUT", host + "/api/CheckOut/" + key + "/" + team.value + "/" + checkpoint.value);
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    const body = JSON.stringify({ body: "", });
    request.responseType = "json";
    request.onload = () => {
        document.getElementById("SendingLabel").innerHTML = "";
        if (request.readyState == 4 && request.status == 200) {
            alert(team.value + " are now checked out of " + checkpoint.value + "! You will now be redirected to the dashboard.");
            window.location.href = "/dragonquest/live/dashboard.html";
        }
        else if (request.status == 403) {
            alert("Key not valid. Please authenticate your device.");
        }
        else {
            console.log(`Error: ${request.status}`);
            return;
        }
    };
    request.send(body);
}
var team = document.getElementById("Team");
var checkpoint = document.getElementById("Checkpoint");
GetTeams();
GetCheckpoints();
