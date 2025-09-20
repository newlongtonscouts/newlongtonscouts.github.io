function GetTeams() {
    team.innerHTML = "";
    const request = new XMLHttpRequest();
    request.open("GET", host + "/api/GetTeams");
    request.send();
    request.responseType = "json";
    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = request.response;
            if (data.length === 0) {
                return;
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    team.innerHTML += "<option value = '" + data[i] + "'>" + data[i] + "</option>";
                }
            }
        }
        else {
            console.log(`Error: ${request.status}`);
            return;
        }
    };
}
function GetCheckpoints() {
    checkpoint.innerHTML = "";
    const request = new XMLHttpRequest();
    request.open("GET", host + "/api/GetCheckpoints");
    request.send();
    request.responseType = "json";
    request.onload = () => {
        if (request.readyState == 4 && request.status == 200) {
            const data = request.response;
            if (data.length === 0) {
                return;
            }
            else {
                for (var i = 0; i < data.length; i++) {
                    if (data[i] != "Start" && data[i] != "Finish") {
                        checkpoint.innerHTML += "<option value = '" + data[i] + "'>" + data[i] + "</option>";
                    }
                }
            }
        }
        else {
            console.log(`Error: ${request.status}`);
            return;
        }
    };
}
