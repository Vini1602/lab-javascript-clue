// ITERATION 1

// Suspects Array


// Define suspectsArray
const suspectsArray = [
  {
    firstName: "Jacob",
    lastName: "Green",
    occupation: "Entrepreneur",
    age: 45,
    description: "He has a lot of connections",
    image: "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
    color: "green"
  },
  {
    firstName: "Doctor",
    lastName: "Orchid",
    occupation: "Scientist",
    age: 26,
    description: "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
    image: "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "white"
  },
  {
    firstName: "Victor",
    lastName: "Plum",
    occupation: "Designer",
    age: 22,
    description: "Billionaire video game designer",
    image: "https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg",
    color: "purple"
  },
  {
    firstName: "Kasandra",
    lastName: "Scarlet",
    occupation: "Actor",
    age: 31,
    description: "A-list movie star with a dark past",
    image: "https://www.radiotimes.com/uploads/images/Original/111967.jpg",
    color: "red"
  },
  {
    firstName: "Eleanor",
    lastName: "Peacock",
    occupation: "Socialité",
    age: 36,
    description: "From a wealthy family, uses status and money to earn popularity",
    image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
    color: "blue"
  },
  {
    firstName: "Jack",
    lastName: "Mustard",
    occupation: "Retired Football player",
    age: 62,
    description: "Former football player trying to get by on former glory",
    image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg",
    color: "yellow"
  }
];


// Rooms Array

const roomsArray = [
  
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" }
  ];

// Weapons Array

const weaponsArray = [
  {name: "rope ---", weight: 10},
  {name: "knif ---e", weight: 8},
  {name: "candlestick ---", weight: 2},
  {name: "dumbbell ---", weight: 30},
  {name: "poison ---", weight: 2},
  {name: "axe ---", weight: 15},
  {name: "bat ---", weight: 13},
  {name: "trophy ---", weight: 25},
  {name: "pistol ---", weight: 20}
];


// ITERATION 2

function selectRandom(cardStack) {

  if(cardStack.length=== 0) return undefined
  if (cardStack.length === 0) {
    return null; // Return null for an empty array
  }

  // Generate a random index within the array length
  const randomIndex = Math.floor(Math.random() * cardStack.length);

  // Return the randomly selected element
  return cardStack[randomIndex];
}

function pickMystery() {

  const totalObject = 
  { 
    suspect: selectRandom(suspectsArray), 
    weapon: selectRandom(weaponsArray),
    room: selectRandom(roomsArray)
  
  }
  
  
  return totalObject



}


// ITERATION 3
/*

const envelopeObject= pickMystery()
function revealMystery(envelopeObject) {
  
  return `${(envelopeObject.suspect.firstName).toUpperCase()} ${(envelopeObject.suspect.lastName).toUpperCase()} killed Mr. Boddy using the ${(envelopeObject.weapon.name).toUpperCase} in the ${(envelopeObject.room.name).toUpperCase}! `

}*/



function revealMystery() {
  const envelope= pickMystery()
  const firstName = envelope.suspect.firstName;
  const lastName = envelope.suspect.lastName;
  const weapon = envelope.weapon.name;
  const room = envelope.room.name;

  const message = `${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`;

  return message;
}

