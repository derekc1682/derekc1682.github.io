//Guess a number from 1-10

var number=(Math.floor(Math.random()*10)+1)
console.log("My random number is ", number);

var input=prompt("Input a number from 1-10");
console.log("Input =", input )

if(input<number){console.log("Your number is lower")} else
    {if(input>number){console.log("Your number is higher")} else

        console.log("You read my mind")}
