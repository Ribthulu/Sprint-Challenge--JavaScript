// Self Study Questions and Answers
//
// 1.	Describe the biggest difference between .forEach & .map.
// -	 .map returns a new array of elements while in turn passing each element back to the callback whereas .forEach passes back the item and index
// 2.	What is the difference between a function and a method?
// -	Functions allow us to execute some code and is protected in memory of curly braces, whereas a method is a function connected to an object
// 3.	What is closure?
// -	The ability for code inside functions to have access to the outside functional scope, but not the other way around
// 4.	Describe the four rules of the 'this' keyword.
// -	First is the global binding, where in the global scope, “this” refers to the window object. The second is implicit binding, where when we call a function that uses a preceding dot, the object to the left gets “this”.  The third is the new binding, which deals with constructor functions and includes “this” being referred to the instance of the object that is being called by the constructor function. The last rule is explicit binding, where “this” is being referred to from the call or apply methods
// 5.	Why do we need super() in an extended class?
// -	It binds objects prototypes to one another, and in a much simpler and easier to understand way compared to the object.create binding
