// var  n = function cal(a, b, sol) {
//     // var a= Number(prompt("enter"))
//     // var b= Number(prompt("enter"))
//     return sol(a, b);
// }
// var add = (a, b) => a + b;
// var sub = (a, b) => a - b;
// var mul = (a, b) => a * b;
// var divi = (a, b) => a / b;

// document.write(n(10, 20, mul));

let result=document.getElementById("screen")

function calculate(number){
    result.value += number;
}

function clr(){
    result.value="";
}
function del(){
    result.value=result.value.slice(0,-1)
}
function total(){
    try{
        result.value=eval(result.value)
    }
    catch{
        alert("Expression error!!!!")

    }
}