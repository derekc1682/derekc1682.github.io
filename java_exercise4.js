var arrfruits=[];
var item="";

while(item!="done")
    {item=prompt("Add an item: ")
        if(item!="null" && item!=""){
            arrfruits.push(item)
        }}

arrfruits.pop(item);

console.log("The contents of your cart are: ")
var count=0;
var size=arrfruits.length;


while(count<size){console.log(`${count+=1}. ${arrfruits[count-1]}`)}

while(count<size){console.log(count+=1,arrfruits[count-1])}

