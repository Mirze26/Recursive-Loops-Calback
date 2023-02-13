
"use strict"

//homework

// function getEvenNumsOfSumBySquare(arr){

//     let sum =0;

//     for(let i =0; i< arr.length; i++){
//         if(arr[i]%2==0){
//             sum += arr[i] **2
//         }
//     }

//     return sum;
// }

// let nums = [1,2,3,4]
// let res = getEvenNumsOfSumBySquare(nums)
// console.log(res)

//---------------------------------------------------

//  let getEvenNumsOfSumBySquare = (arr) => {
//     let sum =0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]%2==0){
//             sum += arr[i] **2
//         }
//     }

//     return sum;
// }

// let nums =[1,2,3,4]
// let res = getEvenNumsOfSumBySquare(nums)
// console.log(res)

//--------------------------------------------------

// function login(email, password) {
//     if (email == "cavid@code.az" && password == "12345") {
//         console.log("girish olundu")
//     }

//     else {
//         console.log("girish ugursuzdu")
//     }


// }

// login("cavid@code.az", "12345")

//----------------------------------------------------

// let login = (email, password) => {
//     if (email == "cavid@code.az" && password == "12345") {
//         console.log("girish olundu")
//     }

//     else {
//         console.log("girish ugursuzdu")
//     }
// }

// login("cavid@edu.az", "369")

//-----------------------------------------------------

//Recursive Function

// function getNumbers(num){
// console.log(num);
// let number = num -1;
// if(number >0){
//     getNumbers(number)
// }

// }

// getNumbers(6)

//------------------------------------

// function sumOfNums(n){
//     let sum =0;
//     for(let i=0; i<=n; i++){
//         sum+=i;
//     }
//     console.log(sum)
// }

// sumOfNums(5)

//-------------------------------

// function sumOfNums(num){
//     if(num ==1){
//         return num;
//     }

//     else{
//         return num + sumOfNums(num-1)
//     }
// }

// console.log(sumOfNums(5))

//------------------------------------------------

// Loops

// let numbers =[11,4,6,8,9];
// numbers.forEach(element => {
//     console.log(element)
// });
//--------------------------------------

// let numbers = [11,4,6,8,9];
// numbers.forEach((element,index) => {
//     if(element == 6){
//         console.log(element)
//     }
// });

//------------------------------------------
// let numbers = [11,4,6,8,9];
// for (const item of numbers) {
//     console.log(item)
// }

//---------------------------------------

// let user1={
//     id:1,
//     name:"Mirze",
//     surname:"Beshirzade"
// }

// let user2={
//     id:2,
//     name:"Mirze",
//     surname:"Beshirzade"
// }


// let user3={
//     id:3,
//     name:"Anar",
//     surname:"Aliyev"
// }

// for (const key in user1) {
//     if (key == "name") {
//        console.log(user1[key])
        
//     }
// }


// let users =[user1,user2,user3];
// let count=0;

// for (const user of users) {
//     for (const key of user) {
//         if(key == "name"){
//             if(user[key] == "Mirze"){
//                 count++;
//             }
//         }
//     }
// }

// console.log(count)

//-----------------------------------------------------


// let user1={
//     id:1,
//     name:"Mirze",
//     surname:"Beshirzade"
// }

// let user2={
//     id:2,
//     name:"Mirze",
//     surname:"Beshirzade"
// }


// let user3={
//     id:3,
//     name:"Anar",
//     surname:"Aliyev"
// }



// let users =[user1,user2,user3];
// let count =0;
// for (const user of users) {
//     if(user.name == "Mirze" && user.surname == "Beshirzade"){
//         count++;
//     }
// }
// console.log(count)

//--------------------------------------------------------------------

//forech ws Map

// let nums1 = [1,4,6,8,9,11];
// console.log(nums1)
// let nums2 = nums1;
// nums2[0] = 100;
// console.log(nums1)



// let nums1 = [1,4,6,8,9,11];
// let newArr = nums1.map(m=>{
//   return m * 2;
// })

// console.log(newArr)
// console.log(nums1)

//-----------------------------------------

// Callback

// function calculateNums(arr,Callback){

//     let sum = 0;
//     for(let i=0; i<arr.length; i++){
//         if(Callback(arr[i])){
//             sum += arr[i]
//         }
//     }
//     console.log(sum)
// }

// let nums = [1,2,3,4,5,6];

// calculateNums(nums, m => m%2 !=0);
// calculateNums(nums, m => m%2==0);
// calculateNums(nums, m => m>5);

//-----------------------------------------------


// let user1={
//     id:1,
//     name:"Mirze",
//     surname:"Beshirzade",
//     age:27
// }

// let user2={
//     id:2,
//     name:"Hemze",
//     surname:"Elizade",
//     age:25
// }


// let user3={
//     id:3,
//     name:"Anar",
//     surname:"Aliyev",
//     age:27
// }

// let users =[user1, user2, user3];

    // function showUsersByAge(people, callback){
    //     for (const item of people) {
    //         if(callback(item.age)){
    //             console.log(item.name + " " + item.surname)
    //         }
    //     }

    // }
    //     showUsersByAge(users, m=> m>25)

    //------------------------------------------------------------------

    // let filteredDatas = users.filter(m=>m.age>25);
   
    // const getSumOfAgesFromFilteredDatas = datas =>{
    //     let sumOfAge =0;
    //     for(const item of datas){
    //         sumOfAge += item.age
    //     }
    //     console.log(sumOfAge)
    // }

    // getSumOfAgesFromFilteredDatas(filteredDatas)

    //---------------------------------------------------------

    let nums = [1,3,4,5];
    let sum = nums.reduce((total,current)=> total+current);
    console.log(sum)
    

  