

// let firstName = "pushpendra chourasiya";
// console.log(firstName.length);
// firstName = firstName.toUpperCase();
// console.log(firstName);

// // start endex , end index
// let newString = firstName.slice(1);
// console.log(newString);
// let age = 22;
// let fName = 'harshith';
// console.log(typeof age);
// // 22 -> "22"
// // convert number to string
// age = age + "";
// console.log(typeof(age)); '22'
// // string concatenation
// let string1 = '11';
// let string2 = '10';
// let newString1 = +string1 + string2;
// console.log(typeof newString);
 
// // string indexing
// let x = "kanpurnagarutterpradesh"
// console.log(x[2]);
// console.log(x.length);
// console.log(x[x.length-21]);
// // if ealse cond
// let age1 = 10;
//  if(age1>=15){
//     console.log("User can play audio");
//  } else {
//   console.log("User can play video");
//  }
// // Iterables
// // jisme ham for of  loop laga ske 
// // string and array are iterable 
// // string - array like a objects
// const firstClass = "Radhan";
// for(let char of firstClass){
//     console.log(char)
// }
// // set
// // Has() this method to sure particular value hai or nahi
// const numbers = new Set("abc");
// numbers.add(1);
// numbers.add(2);
// numbers.add(3);
// numbers.add(['item1','item2']);
// numbers.add(['item1','item2']);
// numbers.add('item3');

// if(numbers.has(10)){
//     console.log("10 is present")
// } else {
//     console.log("10 is not present")
// }
// console.log(numbers);
// for(let number of numbers){
//     console.log(number);
// }
// const numbers1 = [1,2,3,4,5];
// const doubled = numbers1.map(x => x * 20);
// console.log(doubled);

// #################    functions  ####################
// function singHappyBirthday(){
//     console.log("Happy birthday to you ........");
// }
// singHappyBirthday()
// singHappyBirthday()

// function sumThreeNumbers(number1, number2, number3){
//     // console.log(2+4);
//     return number1 * number2 / 5;
// }
// const returnedValue = sumThreeNumbers(4,5,5);
// console.log(returnedValue);
// // dry = don't repeate yourself
// // call, invoke or run same means
// // od or even
// // input : 1 number
// // out : true , false
//  function isEven(number){
//     if(number % 2 === 1){
//         return true;
//     } else {
//         return false;
//     }
//  }
//  console.log(isEven(13));
// console.log(15 % 2 === 0);

// //   function expretion
// function lastChar(anyString){
//     return anyString[1];
// }
// console.log(lastChar("5Pc"));
// // how to change function to 
// // function experition just start function keyword 
// // and function declration when start variable then function keyword use
// //  is called function declration

// // function declration
// const firstChar = anyString => {
//     return anyString[2];
// }
// console.log(firstChar("xyz"));

// function findTarget (array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//             return i;
//         }
//     }
//     return -1
// }
// const myArray = [1,2,3,6,44,7]
// const ans = findTarget (myArray, 3)
// console.log(ans);

// function findTarget (array, target){
//     for(let i = 0; i<array.length; i++){
//         if(array[i]===target){
//         return i;
//         }
//     }
//     return -1;
// }
// const myArray1 = [2,10,3,40,1,2,3,4]
// const ans1 = findTarget(myArray,7);
// console.log(ans1);

//         //   Arro function
// const happyNewYear = () => {
//     console.log("Happpy New Year 2025....");
// } 
// happyNewYear();

// const currentTime = () => {
//     console.log("29/06/2025");
// }
// currentTime();

// const isEven1 = number => number % 5 === 0;
// console.log(isEven1(15))

  // function inside of function 
const app = () =>{
    const myFunc = () =>{
        console.log("Hello from myFunc")
    }
const addTwo = (num1, num2) =>{
    return num1 + num2;
}
    const nul = (num1,num2) => num1 * num2;
    console.log("inside app");
    myFunc();
    console.log(addTwo(3,2));
    console.log(nul(5,4));
}
app();
const web = () =>{
    const myFunction = () =>{
        console.log("Hello my web function.")
    }
    const addThree = (num1,num2,num3) =>{
        return num1 - num2 * num3;
    }
    const nul = (num1,num2) => num1 * num2;
    console.log("Inside web")
  myFunction();
  console.log(addThree(90,4,3 ));
  console.log(nul(100,40))
    
}
web();

const gameApp = () =>{
    const myFunc1 = () =>{
  console.log("Hello my game function..")
    }
    const addFour = (num1,num2,num3,num4) =>{
        return num1 + num2 / num3 * num4;
    }
    const nul = (num1,num2,num3,num4,num5) => num1 - num2 * num3 / num4 + num5;
    console.log("Inside the game")
    myFunc1();
    console.log(addFour(10,40,5,2));
    console.log(nul(100,5,2,20,3));
}
gameApp();

const game1 = () => {
    const myfunction1 = () =>{
        console.log("Hello my second game function..")
    }
    const addFour = (num1,num2,num3,num4) =>{
        return num1 / num2 * num3 - num4;
    }
    const nul = (num1,num2,num3,num4) => num1 + num2 % num3 * num4;
    console.log("Inside the game functions");

    myfunction1();
    console.log(addFour(90,2,5,-80));
    console.log(nul(20,35,4,2));
}

game1();


