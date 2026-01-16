console.log("Calculator App Loaded");

let input =document.querySelector("#input");
let buttons = document.querySelectorAll("button");
let ope = document.querySelectorAll(".ope");

let string = "";
let arr =Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            string =eval(string);
            input.value = string;    
        }
       
        if (e.target.innerHTML == "Ac") {
            string = "";
            input.value = string;
        }
        if (e.target.innerHTML == "Del") {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
 string += e.target.innerHTML;
        input.value = string;
        }
        
    });
});

