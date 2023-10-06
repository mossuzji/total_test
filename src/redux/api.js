import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-Type" : "application/json"
    }
})

api.interceptors.request.use(function(config) {
    //요청이 전달되기 전에 작업 수행
    // 직접적으로 TMDB에 값이 전송되기 전에 요청하는 값 보기
    //console.log("request start", config) //개발자 확인용
    return config; //자료 요청시 문제가 없을때
}, function(error) {
    //요청 오류가 있는 작업시
    //console.log("request error", error)
    return Promise.reject(error)
    //에러 내용을 받음
})

api.interceptors.response.use(function(response) {
    //console.log("get response", response) //개발자 확인용
    return response;
}, function(error) { 
    //console.log("get error", error)
    return Promise.reject(error)
})

export default api