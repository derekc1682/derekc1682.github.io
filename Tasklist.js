// Task

var mklist = function(task, priority, Duedate){
//create <li><li>
var liElem = document.createElement('li');
// <li>a task - due date<li>
liElem.textContent = `${task} - ${Duedate}`;
// <li class = 'list-group-item'> a task - duedate </li>
liElem.classList.add('list-group-item');
return (liElem);
}


var addbtn = document.querySelector('#addbtn');
addbtn.addEventListener(
    'click',  
    function() {
        var task = document.querySelector('#task');    
        var priority = document.querySelector('#priority'); 
        var Duedate = document.querySelector('#Duedate'); 
        var listElem = mklist(task.value, priority.value, Duedate.value)
        var listgroupElem = document.querySelector('#listgroup');
        listgroupElem.appendChild(listElem)


    })

        
    var clearbtn = document.querySelector('#clearbtn');
    clearbtn.addEventListener(
        'click',  
        function() {
            task.value = null;
            
    
    
        })   
              
    








