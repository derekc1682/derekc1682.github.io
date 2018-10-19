//Add an event listner to anotherLine button

var anotherLine = document.querySelector('#anotherLine');

var beer = 3;

anotherLine.addEventListener(
    'click',  
    function() {
        var bottles = mkBottles(beer);
        document.body.appendChild(bottles);
        var Lyric = mkLyric(beer);
        document.body.appendChild(Lyric);
        var Lyric1 = mkLyric1(beer);
        document.body.appendChild(Lyric1)
        beer -= 1;}    
                )

var mkBottle = function(){
    var imgbottle = document.createElement('img');
    imgbottle.src = 'images/beer.png';
    return (imgbottle)};

var mkBottles = function(beer) {
    //create the div
    var divElem = document.createElement('div');
    while (beer > 0) {
        beer -= 1;
        var beerImg = mkBottle();
        divElem.appendChild(beerImg);
    }
    return (divElem);
}


var mkLyric = function(text) {
    var LyricElem = document.createElement('p');
    LyricElem.textContent = line1(beer);
    return (LyricElem);

}

var mkLyric1 = function(num) {
    var Lyric1Elem = document.createElement('p');
    Lyric1Elem.textContent = line2(beer);
    return (Lyric1Elem);
    

}

var line1 = function(bottles) {
    return (`${beer} bottles of beer on the wall, ${beer} bottles of beer.`);
}
var line2 = function(bottles) {
    return (`Take one down and pass it around, ${beer - 1} bottles of beer on the wall.`);
}