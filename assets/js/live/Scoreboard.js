var scoreboard = document.getElementById("Scoreboard");
var key = localStorage.getItem("DragonQuestLiveKey");
const request = new XMLHttpRequest();
request.open("GET", host + "/api/CurrentStatus/" + key);
request.send();
request.responseType = "json";
request.onload = () => {
    if (request.readyState == 4 && request.status == 200) {
        const data = request.response;
        if (data.length === 0) {
            return;
        }
        else {
            document.getElementById("ErrorRow").remove();
            for (var i = 0; i < data.length; i++) {
                scoreboard.innerHTML += "<tr><td><b>" + (i + 1) + "</td><td>" + data[i].name + "</b></td><td>" + data[i].checkpoint + "</td><td>" + data[i].score + "</td></tr>";
            }
        }
    }
    else {
        console.log(`Error: ${request.status}`);
        return;
    }
};
