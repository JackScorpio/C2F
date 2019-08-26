// function isNotANumber(tTemp) { 
//     　　//isNaN(inputData)不能判断空串或一个空格 
//     　　//如果是一个空串或是一个空格，而isNaN是做为数字0进行处理的，而parseInt与parseFloat是返回一个错误消息，这个isNaN检查不严密而导致的。 
//     　　if (parseFloat(tTemp).toString() == "NaN") { 
//     　　　　//alert(“请输入数字……”); 
//     　　　　return false; 
//     　　} else { 
//     　　　　return true; 
//     　　} 
//     }
function tempC2F() {
    let tTemp = prompt("Input the temperature in Celsius:");
    // let tTemp = prompt("Input the temperature in Celsius:");
    // alert (parseFloat(tTemp).toString());
    // if (isNotANumber(tTemp)){
    //     alert ("Please input Number:");
    //     tempC2F;
    // }
    // console.log(isNaN((parseFloat(tTemp))));
    console.log (tTemp);
    if (tTemp===null) {
    }
      else if (isNaN((parseFloat(tTemp)))) {
            //   if (tTemp === null) {
            //     alert("Canceled");
            //   } else {
                alert("Please input a number!");
                tempC2F();
              }
             else {
                let fTemp = ((parseFloat(tTemp)) * 9 / 5 + 32);
                alert(tTemp + " in Celsius is " + fTemp + " in Fahrenheit");
                // document.write (cTemp+" in Celsius is "+fTemp+" in Fahrenheit");
            }
    }
   




function tempF2C() {
    let tTemp = prompt("Input the temperature in Fahrenheit");
  if (tTemp === null) {
  }
    else if (isNaN((parseFloat(tTemp)))) {
        alert("Please input a number!");
        tempF2C();
    } else {
        let cTemp = (((parseFloat(tTemp)) - 32) * 5 / 9);
        alert(tTemp + " in Fahrenheit is " + cTemp + " in Celsius");
        // document.write (fTemp+" in Fahrenheit is "+cTemp+" in Celsius");
    }
}

function tempC(c=0) {
  
  alert (c * 9 / 5 + 32);
}
