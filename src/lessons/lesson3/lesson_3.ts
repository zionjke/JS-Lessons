import API from "./API";

console.log('lesson 3');


// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

// let promise = new Promise((res, rej) => {
//     let a: number = 5
//     res(a)
// })

// let promise2 = new Promise((res, rej) => {
//     let a = 10
//     rej(a)
// })

// promise2
//     .then(res => {
//         throw 100500
//         console.log('then res', res)
//     }, error => {
//         console.log('error1', error)
//         throw 300500
//         return error + 10
//     })
//     .then(res2 => {
//         console.log('then res2', res2)
//     }, error2 => {
//         throw 500500
//         console.log('error2', error2)
//     })
//     .then(null, error3 => {
//         console.log('error3', error3)
//     })

// Promise.resolve(2);
// Promise.reject('error')
// Promise.all([p1,p2,p3]).then([]).catch()
// Promise.allSettled([p1,p2,p3]).then([])
// Promise.race([p1,p2,p3]).then()
// Promise.any([p1,p2,p3]).then()

//@ts-ignore
// Array.prototype.myMap = function (callback) {
//     const result = []
//     const thisArray = this
//     for (let i = 0; i < thisArray.length; i++) {
//         result.push(callback(thisArray[i], i,thisArray))
//     }
//     return result
// }
// //@ts-ignore
// Array.prototype.myFilter = function (callback) {
//     const result = []
//     const thisArray = this
//     for (let i = 0; i < thisArray.length; i++) {
//         if(callback(thisArray[i], i,thisArray)) {
//             result.push(thisArray[i])
//         }
//     }
//     return result
// }


//
// console.log(promise)
//
// promise
//     .then(value => {
//         return {data: value, something: 'Yo'}
//     })
//     .then(data => {
//         // @ts-ignore
//         console.log(data.data + 1)
//     })

// async function f() {
//     try {
//         let response = await API.searchFilmsByTitle('test');
//     } catch (err) {
//         console.log(err)
//     }
//
//     return 10;
// }


// just a plug
export default () => {
};
