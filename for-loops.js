

for (var counter = 5; counter < 120; counter +=10) {
console.log("conter value", counter);
}



for (var counter = 4096; counter >= 1; counter=counter/2) {
	console.log("counter value:",counter);
}

var arr =["George Washington", "John Adams", "Thomas Jefferson"];
 for (var i = 0; i < arr.length; i++) {
 	console.log("names of American Presidents:", arr[i]);
 }

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

var listOfAntSpecies = [];


for(var species in antSpecies){
  listOfAntSpecies.push(species);
}
 
 console.log(listOfAntSpecies);




