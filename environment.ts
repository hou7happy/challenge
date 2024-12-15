export const production={}
const is_production = false
export const development={

    apiBaseUrl:"http://localhost",
    apiPort:"8080"

}
export function getToken(){
    return localStorage.getItem('token');
}
export function getUserId(){
    return localStorage.getItem('user');
}
export function setUser(user){
    localStorage.setItem('user',user);
}
