import axios from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '';
const axiosInstance = axios.create(configOMB);

const API = {
    searchFilmsByTitle: (title: string) => {
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};


// const usersApi = {
//     getAllUsers() {
//         return Promise.resolve([{name: 'A'}, {name: 'B'}])
//     },
//     login(login: string, password: string) {
//         if (login !== '123' && password !== '123') {
//             Promise.reject({message: 'Incorrect login or password'})
//         } else {
//             return Promise.resolve({name: 'A', avatarUrl: ''})
//         }
//     }
// }
//
// const pr = usersApi.getAllUsers();
// pr.then(users => console.log(users))
// const pr2 = usersApi.login('123', '123').then(() => {
// })


export default API;
