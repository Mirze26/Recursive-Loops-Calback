
"use strict"

let user1 = {
    id: 1,
    name: "Mirze",
    surname: "Beshirzade",
    age: 27,
    email: "mirze@gmail.com"
}

let user2 = {
    id: 2,
    name: "Hemze",
    surname: "Alizade",
    age: 24,
    email: "elizadeh@gmail.com"
}

let user3 = {
    id: 3,
    name: "Huseyn",
    surname: "Kazimov",
    age: 20,
    email: "husu@gmail.com"
}

let user4 = {
    id: 4,
    name: "Masan",
    surname: "Hesenov",
    age: 19,
    email: "mesdan@gmail.com"

}


let users = [user1, user2, user3, user4];

let showStuByAge = (users) =>{

    let count = 0;
    for (const item of users) {
        if (item.age > 18 && item.age < 25) {

            count++;
        }

    }
    return count;
}

console.log(showStuByAge(users));



