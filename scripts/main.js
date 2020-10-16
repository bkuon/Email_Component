const MyHeading = document.querySelector('h1');
MyHeading.textContent = "Hello World!";

let myVariable;

myVariable = "Bob";

const newHeading = document.querySelector('h2');
newHeading.textContent = multiply(20,20);


function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    MyHeading = "Mozilla is cool, " + storedName;
}

let myButton = document.querySelector('button');



function setUserName(){
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    MyHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function() {
    setUserName();
}

let myImage = document.querySelector('img');



myImage.onclick = function() {
    let Src = myImage.getAttribute('src');
    if(Src === 'images/Cover1.jpg'){
        myImage.setAttribute('src', 'images/Cover2.jpg');
    }else{
        myImage.setAttribute('src', 'images/Cover1.jpg');
    }
}
