function checkDriverAge() {
    var userAge = prompt("What is your age?");
    if (Number(userAge) < 18){
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if(Number(userAge) === 18){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else if(Number(userAge) > 18){
        alert("Powering On. Enjoy the ride!")
    }
}
checkDriverAge();
var checkDriverAge2 = function() {
    var userAge = prompt("What is your age?");
    if (Number(userAge) < 18){
        alert("Sorry, you are too young to drive this car. Powering off");
    }
    else if(Number(userAge) === 18){
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
    else if(Number(userAge) > 18){
        alert("Powering On. Enjoy the ride!")
    }
}
checkDriverAge2();
function checkDriverAge3(userAge) {
    if (Number(userAge) < 18) {
        return "Sorry, you are too yound to drive this car. Powering off";
    } else if (Number(userAge) > 18) {
        return "Powering On. Enjoy the ride!";
    } else if (Number(userAge) === 18) {
        return "Congratulations on your first year of driving. Enjoy the ride!";
    }
}
checkDriverAge3(92);
