const inputBirthdate = document.querySelector("#birthdate");
const inputLuckyNo = document.querySelector("#luckynumber");
const checkButton = document.querySelector("#button");
const output = document.querySelector("#output");
const outputPass = `<div><h1> yippee!!You are a lucky person !</h1></div><img align="centre" src="https://gifimage.net/wp-content/uploads/2017/10/children-animated-gif-1.gif" alt="funny GIF" width="20%">`
const outputFail = `<div><h2>Oops!!Your birthday is not That Much lucky !</h2></div><img align="centre" src="https://media.giphy.com/media/8GScprF3OEvKw/giphy.gif" alt="funny GIF" width="10%"  >`

checkButton.addEventListener("click",clickHandler)

function compareValues(sum, luckyno){
    if(sum % luckyno == 0){
        output.innerHTML = outputPass;
    }else{
        output.innerHTML = outputFail;
    }
}

function clickHandler(){
    const dob = inputBirthdate.value;
    const luckyno = inputLuckyNo.value;
    const sum = calculateSum(dob);
    compareValues(sum,luckyno);
}

function calculateSum(dob){
    dob = dob.replaceAll("-","");
    var sum = 0;
    for(var i=0 ; i < dob.length; i++){
        sum = sum + Number(dob.charAt(i));
    } 
    return sum;
}