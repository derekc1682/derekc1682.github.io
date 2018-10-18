//Get inputs
var maxItems = 3; //if MAXITEMS in uppercase, it is meant to be a constant
var fruits = [];
var item = "";

//cond 1 fruits.length == 5
//cond 2 item == 'done'

//cond 1 and cond 2, (note: A || B  -->  A! &&  B!)
while ((fruits.length < maxItems) && (item != 'done')) {

//while (item != "done") {
    item = prompt('Add an item')
    if ((item != null) && (item != "")) {
        fruits.push(item);
    } //if
} //while
console.log('before pop > fruits:', fruits)
fruits.pop();
console.log('> fruits: ', fruits);