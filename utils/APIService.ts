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
        Authorization: 'Bearer '.concat('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0Zjg4N2FhYzZlN2QyODBhMGI1MzljZmIwZmIxM2ZkYSIsInN1YiI6IjY0MWVmMTIyNTRhOGFjMDExMjFlODE3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XzaUQJLiWdd5E-OuTerBXMmKKCawfKHbR4hAS8IFqsk')
    },
    params: {
        language: 'ko',
        include_image_language: 'ko'
    },
    timeout: 5000,
    timeoutErrorMessage: 'Request TimeOut'
})
