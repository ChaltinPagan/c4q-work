rock = document.getElementById("rock");
paper = document.getElementById("paper");
scissors = document.getElementById("scissors");

user = document.getElementById("user");
comp = document.getElementById("comp");
res = document.getElementById("res");

tWin = document.getElementById("tWin");
tLose = document.getElementById("tLose");
tTie = document.getElementById("tTie");

input = document.querySelector("input");


document.addEventListener("click", (event) => {

    fetch("http://codyhess.com:9001/" + event.target.id + "/" + input.value)
    

    .then(function (response) {
        console.log(response);
        return response.json();
    })

    .then(function (myBlob) {
        console.log(myBlob);
        globalBlob = myBlob;

        obj = myBlob;

        user.innerText = "User chooses:" + " " + myBlob.user;
        comp.innerText = "Computer chooses:" + " " + myBlob.ai;
        res.innerText = "Result:" + " " + myBlob.result;

        if (input.value === "") {
            console.log("No name entered");
            return;
        } else {
            objStats = myBlob.stats;
            tWin.innerText = "Total Wins:" + " " + objStats.win;
            tLose.innerText = "Total Losses:" + " " + objStats.lose;
            tTie.innerText = "Total Ties:" + " " + objStats.tie;
        }

    })

    console.log(event.target.id);
})