/*I need to generate three different numbers 10 , 40 and 39 using different arithmetic operators 
I am going to keep it basic and use addition subtraction and multiplication Psuedo code below
1. get 10 by having 5 + 5
2. get 40 by having 50 - 10
3. get 39 by having 3 * 39
4. Combine all the information in as a message and have popup as an alert*/

//Find value of 10 by using adition
const variable10 = 5+5;

//Find value of 40 using subtraction
const variable40 = 50-10;

//find value of 39 using multiplication
const variable39 = 3*13;

//Define the message we want to prefix the code number with 
let message = ' You have received this message because you have been chosen to open an important vault. Here is the secret combination:';


alert(`${message} ${variable10} ${variable40} ${variable39}` );