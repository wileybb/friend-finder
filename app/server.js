// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Profile (DATA)
// =============================================================
var profiles = [
    {
        name: "Bob Johnson",
        age: 37,
        gender: "Male",
        1: 4,
        2: 5,
        3: 5,
        4: 3,
        5: 4
      },
  {
    name: "Sally Suthers",
    age: 27,
    gender: "Female",
    1: 4,
    2: 5,
    3: 5,
    4: 3,
    5: 4
  },
  {
    name: "Jane Doe",
    age: 32,
    gender: "Female",
    1: 8,
    2: 9,
    3: 5,
    4: 5,
    5: 6
  }
];


// Friend Matching Alogrithm ===================================

function matchFriends(profile){
    // making points array for the user's profile
    for(var i = 1; i < 6; i++){
        var pointsArray = [],
        pointsArray.push(profile[i]);
    };

    

};

function compareAnswers(userPoints, friendPoints){
    var compatibilityArray = []
    for(i = 0; x < userPoints.length; i++){
        var difference = userPoints[i] - friendPoints[i];
        compatibilityArray.push(difference);
    };
    var compatabilityScore = 0;
    for(i = 0; x < compatibilityArray.length; i++){
        compatabilityScore = compatabilityScore + compatabilityArray.i;
    };
};

function findBestMatch(array){
    var bestMatch = 0
    for(i = 0; i < array.length; i++){
        if(array.i < bestMatch){
            bestMatch = array.i
        }else{};
    };
};
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/profiles", function(req, res) {
  return res.json(profiles);
});

// Displays a single character, or returns false
app.get("/api/profiles/:profile", function(req, res) {
  var chosen = req.params.profiles;

  console.log(chosen);

  for (var i = 0; i < profiles.length; i++) {
    if (chosen === profiles[i].routeName) {
      return res.json(profiles[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/characters", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newProfile = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newProfile.routeName = newProfile.name.replace(/\s+/g, "").toLowerCase();

  console.log(newProfile);

  profiles.push(newProfile);

  res.json(newProfile);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
