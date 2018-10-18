console.log('functions')

var pi = Math.PI;

//formal parameters
var greetings = function(name) {
console.log('Hello', name)

};

var sum = function(a,b){
    var total = a+b;
    return(total);
}

var div = function(a,b){
    return(a/b)
}

var result=sum(3,4)
var moreresult = div(
                    sum(3,4),
                    sum(5,6))
console.log("3 + 4 = ", result);
console.log(moreresult)

//actual parameter
greetings('Fred');
greetings('Barney')
greetings('Betty')

greetings(); // undefined

