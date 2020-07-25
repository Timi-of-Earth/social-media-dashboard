function toggleDark() {
    if (document.getElementById("toggle").checked) {
        document.getElementById("broad").style.backgroundColor = "hsl(225, 100%, 98%)";
        document.getElementById("box1").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box2").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box3").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box4").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box5").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box6").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box7").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box8").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box9").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box10").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box11").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("box12").style.backgroundColor = "hsl(227, 47%, 96%)";
        document.getElementById("smd").style.color="hsl(230, 17%, 14%)";
        document.getElementById("container").style.backgroundColor="white";
    } else {
        document.getElementById("broad").style.backgroundColor = "hsl(232, 19%, 15%)";
        document.getElementById("box1").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box2").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box3").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box4").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box5").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box6").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box7").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box8").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box9").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box10").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box11").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("box12").style.backgroundColor = "hsl(228, 28%, 20%)";
        document.getElementById("smd").style.color="hsl(0, 0%, 100%)";
        document.getElementById("container").style.backgroundColor="hsl(230, 17%, 14%)";
    }
};