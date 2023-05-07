// Code your solutions in this file

for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }

function writeCards(arrayOfStringNames, eventName){
    const newArray = []
    for(let i = 0; i < arrayOfStringNames.length; i++){
        newArray.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful surprise gift!`);
    }
    return newArray;
}

function countDown(number){
    while(number >= 0){
        console.log(number--)
    }
}