var parties = ["Minecraft", "Fortnight", "Terraria", "Smash Ultimate"];
var votes = [154000000, 78300000, 27000000, 13810000];
var numberofseats = 5;

function calculateResult (parties, votes, totalnumberofseats) {
  let seats =  new Array(parties.length).fill(0);
  console.log(dhondtMethod(seats, votes, totalnumberofseats));
}


function dhondtMethod(seats, votes, totalnumberofseats) {
  let quotient = new Array(votes.length).fill(0);
  for (let i = 1; i <= totalnumberofseats; i++) {
    for (let index = 0; index < votes.length; index++) {
      quotient[index] = votes[index]/i / ( seats[index] + 1 );
    }
    console.log( seats);
    seats[indexOfLargest(quotient)] += 1;
  }
  return seats;
}

function addParty(partyName, partyVotes) {
  let index = parties.length;
  if (parties.length < votes.length) {
    index = votes.length;
  }
  parties[index] = partyName;
  votes[index] = partyVotes;
}

function indexOfLargest (array) {
  let maxValue = -Infinity;
  let maxIndex = -1;
  array.forEach(function (value, index) {
    if (value >= maxValue) {
      maxValue = value;
      maxIndex = index;
    }
  });
  // for (let index = 0; index < array.length; index++) {
  //   if (array[index] >= maxValue) {
  //     maxValue = array[index];
  //     maxIndex = index;
  //   }
  // }
  return maxIndex;
}

calculateResult(parties, votes, numberofseats);

//--------------------------------------------------------
// Same but using a single array of structs instead of
// 3 arrays.
//--------------------------------------------------------

function dhondtMethodForPartyStruct(parties,totalnumberofseats) {
  let quotient = new Array(parties.length).fill(0);
  for (let i = 1; i <= totalnumberofseats; i++) {
    parties.forEach(function (item, index) {
      quotient[index] = item.votes/i / ( item.seats + 1 );
    });
    parties[indexOfLargest(quotient)].seats += 1;
  }
}

const createParty = (partyName, partyVotes, partySeats) => ({name: partyName, votes: partyVotes || 0, seats: partySeats || 0});

// var structParties = {
//   addParty: function (partyName, partyVotes, partySeats) {
//     this.[partyName] = {};
  //   JSON.parse('{"'+partyName+'" : {"votes" : '+(partyVotes || 0)+', "seats" : '+(partySeats || 0)+'}}');
  // }
// };

parties = [
  createParty("Harmony Party", 2194), 
  createParty("English Democrats", 11612), 
  createParty("BNP", 18326), 
  createParty("An Independence From Europe", 21384),
  createParty("Liberal Democrat", 60773),
  createParty("Green",67066),
  createParty("Labour", 279363),
  createParty("Conservatives", 291270),
  createParty("UKIP", 368734)
];
console.log(parties);
dhondtMethodForPartyStruct(parties, numberofseats);
console.log(parties);