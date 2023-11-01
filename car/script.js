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
