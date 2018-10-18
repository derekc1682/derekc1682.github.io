//add an event listener to button #anotherLine
var anotherLine = document.querySelector('#anotherLine');
anotherLine.addEventListener(
    'click', 
    function() { 
        document.body.appendChild(mkBottles(beer));
        beer-=1; 
    }
);

var mkBottle = function() {
    var imgElem = document.createElement('img');
    imgElem.src = 'images/beer.png';
    return (imgElem);
}

var mkBottles = function(num) {
    //create the div
    var divElem = document.createElement('div');
    while (num > 0) {
        num -= 1;
        var beerImg = mkBottle();
        divElem.appendChild(beerImg);
    }
    return (divElem);
}

var beer = 99;

/*while (beer >= 1) {
    var bottles = mkBottles(beer);
    document.body.appendChild(bottles);
    beer -= 1;
}


