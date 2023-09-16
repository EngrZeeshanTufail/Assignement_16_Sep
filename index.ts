import { textSpanContainsPosition } from "typescript"

/*Personal Message: Store a person’s name in a variable, and print a message to that person. 
Your message should be simple, 
such as, “Hello Eric, would you like to learn some Python today?*/
let MyName: string = "Zeeshan"


console.log(`"Hello ${MyName}", would you like to learn some Python today?`)
//-------------------------------------------------------------------//
// Name Cases: Store a person’s name in a variable, 
// and then print that person’s name in lowercase, uppercase, and titlecase.

let MyName1: string = "Zeeshan TUfail"
console.log(MyName1.toLowerCase)
console.log(MyName1.toLocaleUpperCase)
console.log(MyName1.toLocaleUpperCase)
//----------------------------------------------------------------//
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author.
//  Your output should look something like the following, including the quotation marks:
//Albert Einstein once said, “A person who never made a mistake never tried anything new.”
console.log(`Albert Einstein once said, “A person who never m a mistake never tried anything new".`)
//-----------------------------------------------------------------///
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
// Then compose your message and store it in a new variable called message. Print your message.
let famous_person: string = "Albert Einestien";
let new_msg: string = `"A person who never m a mistake never tried anything new"`
console.log(famous_person + "  said that  " + new_msg)
//-----------------------------------------------------------------//
// Stripping Names: Store a person’s name, and include 
// some whitespace characters at the beginning and end of the name.
//  Make sure you use each character combination,
//   "\t" and "\n", at least once. Print the name once,
//    so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let Student = "\tZeeshan\n\tTufail";
console.log(Student);
const NewName = Student.trim();
console.log(NewName);
//--------------------------------------//


// Number Eight: Write addition, subtraction, multiplication,
//  and division operations that each result in the number 8.
//  Be sure to enclose your operations in print statements to see the result
console.log("Addition", 6 + 2)
console.log("Subtraction ", 10 - 2)
console.log("Multiply", 4 * 2)
console.log("Division", 16 / 2)

//------------------------------------------//

// Favorite Number: Store your favorite number in a variable.
//  Then, using that variable,
//   create a message that reveals your favorite number. Print that message.
let my_fav_numb: string = `"5"`
let my_message: string = `My fav number is ${my_fav_numb}`
console.log(my_message)
///-------------------------------------------//
// Adding Comments: Choose two of the programs you’ve written,
//  and add at least one comment to each. If you don’t have 
//  anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.
let a: number = 5 // Zeeshan Tufail
let b: number = 89// Date 14 July
console.log(a * b)// Multiplying two variable

//--------------------------------//
// Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.
let names_of_friends: string[] = ["Kashif", "Juniad", "Haroon"]
console.log(names_of_friends[0]);
console.log(names_of_friends[1]);
console.log(names_of_friends[2]);
//----------------------------------///
// Greetings: Start with the array you used in Exercise 11,
//  but instead of just printing each person’s name, print a message to them. 
//  The text of each message should be the same,
// but each message should be personalized with the person’s name.
for (let i = 0; i < names_of_friends.length; i++) {
    console.log(names_of_friends[i], "Kasa ha jani?")
}
///-----------------------///
// Your Own Array: Think of your favorite mode of transportation,
//  such as a motorcycle or a car, and make a list that stores several examples.
//   Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
let fav_Vehical: string[] = ["Honda Vazel", "Toyta Vitz", " Kia sportage"]
for (let i = 0; i < fav_Vehical.length; i++) {
    if (fav_Vehical[i] === "Honda Vazel") {
        console.log(fav_Vehical[i], " I like Honda Cars")
    }
    else if (fav_Vehical[i] === "Kia sportage") {
        console.log(fav_Vehical[i], " I like kia SUV")
    }
    else if (fav_Vehical[i] === "Toyta Vitz") {
        console.log(fav_Vehical[i], " I own This car")
    }
}
///---------------------------------------///
// Guest List: If you could invite anyone, living or deceased, to dinner, who would
// you invite? Make a list that includes at least three people you’d like to invite to
// dinner. Then use your list to print a message to each person, inviting them to
// dinner.
let inivition: string[] = ["Khurram", "Faisal", "Faize", "Kashif", "Mirha"]
for (let i = 0; i < inivition.length; i++) {
    console.log(inivition[i], "You are invited for tonight Dinner at 8 PM")
}
///-----------------------------------///
// changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations.
//  You’ll have to think of someone else to invite.
inivition.splice(3, 1, "Ali")
for (let i = 0; i < inivition.length; i++) {

    console.log(inivition[i], "You are invited for tonight Dinner at 8 PM")
}

//----------------------------------///
// Start with your program from Exercise 14.
//  Add a print statement at the end of your program stating 
//  the name of the guest who can’t make it.

console.log("KAshif cant Make it")
//Modify your list, replacing the name of the guest
// who can’t make it with the name of the new person you are inviting.
inivition.splice(3, 1, "Hamza")
//Print a second set of invitation messages, one for each person who is still in your list.

for (let i = 0; i < inivition.length; i++) {
    console.log(inivition[i], "We will be waitinf for you on tonight dinner")
}

// More Guests: You just found a bigger dinner table, so now more space is available.
//  Think of three more guests to invite to dinner.
inivition.push("Nasir ", "Zafar", "Sheraz")


// Start with your program from Exercise 15. 
// Add a print statement to the end of your program
//  informing people that you found a bigger dinner table.
for (let i = 0; i < inivition.length; i++)
    console.log(inivition[i], "We found bigger dinning table dinner")

// Add one new guest to the beginning of your array

inivition.unshift("Jhon")
// Add one new guest to the middle of your array. •
// • Print a new set of invitation messages, one for each person in your list.
inivition.splice(inivition.length / 2, 0, "Adeel")
//  Use append() to add one new guest to the end of your list. 
inivition.push("Sir Zia")
// • Print a new set of invitation messages, one for each person in your list.
for (let i = 0; i < inivition.length; i++)
    console.log(inivition[i], "Yaro Aj rat di roti mere ghur a k pario :)")

//Shrinking Guest List: You just found out that your new dinner table won’t arrive 
//in time for the dinner, and you have space for only two guests.

// Start with your program from Exercise 16.
// //  Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person 
// letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list.
//  Print your list to make sure you actually have an empty list at the end of your program.

for (let i = inivition.length; i > 2; i--)
    if (i > 2) {
        let remove_guest = inivition.pop()
        console.log(remove_guest, "Sorry due to space issue tonight party is canceld")
    }
for (let i = 0; i < inivition.length; i++) {
    console.log(inivition[i], "you are still invited")
}

for (let i = inivition.length; i > 0; i--) {
    inivition.pop()

}
console.log(inivition)


//---------------------------------------------------------------------------------------///


// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
let Fav_place: string[] = ["Holand", "Ziarat", "Naran", "Muree"]
//  Print your array in its original order.
console.log(Fav_place)
// • Print your array in alphabetical order without modifying the actual list.
Fav_place.sort();
console.log(Fav_place)

// Print your array in reverse alphabetical order without changing the order of the original list
Fav_place.reverse()

console.log(Fav_place)


// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed
Fav_place.reverse()
console.log(Fav_place)
Fav_place.sort()
Fav_place.reverse()
///----------------------------------------------------------------------///
// Dinner Guests: Working with one of the programs from Exercises 14 through 18,
//  print a message indicating the number of people you are inviting to dinner.
console.log(inivition.length)





