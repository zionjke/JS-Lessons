// @ts-nocheck
import {log} from "util";

console.log('lesson 4');


// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const pr0 = new Promise((res, rej) => {
    console.log("Promise is created")
});
console.log(pr0)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const pr1 = new Promise((res, rej) => {
    res('Promise Data')
}).then(response => console.log(response));


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const pr2 = new Promise((res, rej) => {
    rej('Promise Error')
}).then(response => console.log(response)).catch(e => console.log(e));

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const pr3 = new Promise((res, rej) => {
    setTimeout(() => res('Promise Data after 3 sec'), 3000)
}).then(response => console.log(response)).catch(e => console.log(e));

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type testObjType = {
    promise: null | Promise<any>;
    resolve: null | Function;
    reject: null | Function;
    onSuccess: (paramName: string) => void;
    onError: (paramName: string) => void;
}

export const handlePromise: testObjType = {
    promise: null,
    reject: null,
    resolve: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
};

export const createPromise = () => {
    const somePromise: Promise<any> = new Promise((res, rej) => {
        handlePromise.resolve = res;
        handlePromise.reject = rej;
    });
    handlePromise.promise = somePromise;
    handlePromise.promise
        .then(res => handlePromise.onSuccess(res))
        .catch(err => handlePromise.onError(err));
};

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('1')
};

export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('some error')
};

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.


// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

let pr4 = new Promise((res, rej) => {
    setTimeout(() => {
        res({name: 'Anna'})
    }, 2000)
})

let pr5 = new Promise((res, rej) => {
    setTimeout(() => {
        res({age: 16})
    }, 3000)
})

let pr6 = new Promise((res, rej) => {
    setTimeout(() => {
        res({city: ""})
    }, 3000)
})

let promise = Promise.all([pr4, pr5, pr6])
promise.then(data => {
    return Object.assign(...data)
}).then(data => console.log(data))


const arr = [1, 2, 3, 4]

const arr2 = arr.map((item, index) => {
    return Array(index + 1).fill(item)
})

console.log(arr2)

const obj = {name: 'test'}
const obj2 = {age: "2"}
const obj3 = {
    name: 'test3', toString() {
        return this.name
    }
}

obj[obj2] = 100;
obj[obj3] = 'hey'
obj[{}] = 400
console.log(obj)

Function.prototype.myBind = function (context, ...args) {
    const that = this
    return function (...newArgs) {
        that.apply(context, args.concat(newArgs))
    }
}



// just a plug
export default () => {
};
