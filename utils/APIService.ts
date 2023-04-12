import {API} from "./API";
// 여러 가지 서버를 쓸 경우가 있는데, 그 경우에 사용함
export const LocalAPI = new API({
    // baseURL: '/',
    timeout: 5000,
    timeoutErrorMessage: 'Request TimeOut'
})


export const ExternalAPI = new API({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: process.env.NEXT_PUBLIC_MOVIE_DB_API_ACCESS_TOKEN && 'Bearer '.concat(process.env.NEXT_PUBLIC_MOVIE_DB_API_ACCESS_TOKEN)
    },
    params: {
        language: 'ko',
        include_image_language: 'ko'
    },
    timeout: 5000,
    timeoutErrorMessage: 'Request TimeOut'
})
