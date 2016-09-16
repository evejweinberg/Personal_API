//add one key:value pair to an object
pet.bestfriend = "Zoe"

pet['bestfriend'] = "Zoe";

//delete a key:value pair to an object
//this deletes children too
delete pet['bestfriend']

delete pet.bestFriend;

//change a string to a number
var a = parseInt("10")
var b = parseFloat("10.5")

//reset an object
//empty it ('no value has been set yet')
object = undefined
//null = nothing is there



// ========================??//
function describePet(name, age, gender){

    var genderPronoun = "she";
    if(gender=="male") genderPronoun = "he";
    console.log("This is " +name+ " and "+genderPronoun+" is "+age+" years old.")
    var humanYears = age*7;
    return "In human years, that's like "+humanYears+" years";

}

var Joetstat = describePet("Joey", 7, "male");
var Jillstat = describePet("Jill", 4, "female");




//+++=====================================++++//


var message1 = createMessage("Jack", "Jill", "Let's get some water?");
var message2 = createMessage("Kanye", "Taylor", "Imma let you finish, but");

console.log(message1) // prints the message1 object
console.log(message2) // prints the message2 object

function createMessage(person1, person2, subject){

    var msgToReturn = {
        from: person1,
        to: person2,
        subject: subject,
        date : new Date()
    }

    return msgToReturn;
}


//==============================================??//
//=========SWITCH CASES========================//


switch(expression) {
  case n:
      // code goes here
      break;
  case n:
      // code goes here
      break;
  default:
      default code block
}

// example with a string

var message = computeMessage("happy");

console.log(message); // prints hooray

function computeMessage(mood){

    switch(mood) {
      //in the case that the case is hungry
        case "hungry":
            return "need food"
            break;
        case "sad":
            return "boohoo";
            break;
        case "happy":
            return "hooray";
            break;
        default:
            return "here's just a default message";
    }

}


///=========================///
///bind functions to events
