import {API} from "./API";
// 여러 가지 서버를 쓸 경우가 있는데, 그 경우에 사용함
export const LocalAPI = new API({
    // baseURL: '/',
    timeout: 5000,
    timeoutErrorMessage:'Request TimeOut'
})

