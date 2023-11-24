var database = [
  {
    username: "andrei",
    password: "supersecret",
  },
];

var newsFeed = [
  {
    username: "Bobby",
    timeline: "Its so boirinf",
  },
  {
    username: "Lily",
    timeline: "Its so boirinf",
  },
];

let userNamePrompt = prompt("Whats your username?");

let passwordPrompt = prompt("Whats your password?");

function signIn(user, pass) {
  if (user === database[0].username && pass === database[0].password) {
    console.log(newsFeed);
  } else {
    alert("sorry, you are wrong!");
  }
}
signIn(userNamePrompt, passwordPrompt);
