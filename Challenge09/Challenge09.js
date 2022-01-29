'use strict';

// Important Note:
// Kindly use forEach loop instead of for in all of your solutions

// Resource:
// forEach: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

// 1) ---------------------
// 
//  using the (arrInc) function; increase the provided array values by 10
//  
//  EX:
//  [20, 54, 89, 41] ==> [30, 64, 99, 51]
//  
// ------------------------

const arrInc = (arr) => {
    let result = [];
    arr.forEach(element => {
       element +=10 
        result.push(element)
    });
    return result;
}


// 2) ---------------------
// 
//  using the (roundDecimals) function; given an array of decimals round every value to the closest value
//  
//  EX:
//  [5.4, 5.5 ,6.7, 6.8] ==> [5, 6, 7, 7]
// 
// ------------------------
const roundDecimals = (arr) => {
    let result=[]
    let o =0;
    arr.forEach(elemnt => {
        let i = 0
     i= elemnt.toFixed()
     o=parseInt(i)
        result.push(o)
    })
return result
}


// 3) ---------------------
// 
//  An owner of a factory want to give bounce 100$ for the employee of production department who worked *More than* 8 hours
//  and 50$ for those who worked less, given their data increase their salary and return the data back again 
//  
//  EX:
// let data = [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3000$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4000$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10,
//         salary: "4500$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3200$"
//     }
// ]
// 
//  ==>
//
// [
//     {
//         name: "Robert",
//         section: "Transport",
//         workHours: 8,
//         salary: "3050$"
//     },
//     {
//         name: "Richard",
//         section: "HR",
//         workHours: 6,
//         salary: "4050$"
//     },
//     {
//         name: "Christopher",
//         section: "Production",
//         workHours: 10
//         salary: "4600$"
//     },
//     {
//         name: "Andrew",
//         section: "HouseKeeping",
//         workHours: 9,
//         salary: "3300$"
//     }
// ]
//

// ------------------------
const employeesBonus = (arr) => {
    let result =[]
    arr.forEach(element => {
      let hour=  element.workHours
      let salary =parseInt(element.salary)
 if(hour>8){
 salary+=100 
  element.salary =salary +"$"
 result.push(element)
 }else if(hour<=8){
     
     salary +=50 
      element.salary =salary +"$"
     result.push(element)
 }

    });
     return result
}

// 4) ---------------------
// 
// Harry wants to buy a new mouse and keyboard for his new setup
// He wants to choose one mouse and one keyboard from the list of prices and take the most expensive combination
// but his budget is limited, help him by finding the most expensive *price* for a combination to buy with his budget
// 
// EX:
//
// budget = 200$
// mouseArray = [35, 15, 75, 180, 150, 50]
// keyBoardArray = [5, 150, 35, 120, 75, 50, 100]
// 
// ==> 200
// ------------------------
const mostExpensive = (budget, mouseArray, keyBoardArray) => {

// function max1(arr){
//         let max = arr[0]
// arr.forEach(e=>{
    
//     if(e>=max){
//        max=e
//             }   
// })
// return max
//     }

// // function maxkeyBoardArray(arr){
// //         let max = arr[0]
// // arr.forEach(e=>{
// //     if(e>=max){
// //        max=e
// //             }   
// // })
// // return max
// //     }
//     let maxend = max1(keyBoardArray)
//     let maxend1 =max1(mouseArray)
//     let maxiam =maxend +maxend1
//   while(maxiam>=budget){
//     let o=try2(maxend,mouseArray)
//     let y =try2(maxend1,keyBoardArray)
//     maxiam = o+y
//   }
       
   
//     function  try2(num,arr){
//         let max = arr[0]
//         let newarr=[]
//         for(i=0;i<=arr.length -1;i++){
//            if(arr[i]!=num){
//                newarr.push(arr[i])
//            }
//         }
// let last= max1(newarr)
// return last
//     }
 
//     return maxiam

}
























//    let max =mouseArray[0]
//    let maxend = 0
//    let maxend1=0
//    let max1=keyBoardArray[0]
//    mouseArray.forEach(el =>{
//        if(el>=max){
//            max = el
//        }
//    })
//    keyBoardArray.forEach(el2 =>{

//     if(el2>=max1){
//         max1=el2
//     }
// });
// if(maxend+maxend1 <=budget){
//     return maxend+maxend1
// }else{
//     mouseArray.forEach(el =>{
//         if(el>=max){
//             maxend = el
//         }
//     })
//     keyBoardArray.forEach(el2 =>{
 
//      if(el2>=max1){
//          maxend1=el2
//      }
//  });
// }



module.exports = { arrInc, roundDecimals, employeesBonus, mostExpensive };
