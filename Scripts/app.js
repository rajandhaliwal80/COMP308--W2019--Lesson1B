"use strict";
//self-executing anonymous funstion
// IIFE -- Immediately Invoked Function Expression
(function(){

function Start(){
    let myLocalVariable = 0;
    console.log(`%c App Started...`, "font-size:20 px; color:blue;");
}
window.addEventListener("load", Start);
})();