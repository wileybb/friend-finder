// Star Wars Characters (DATA)
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