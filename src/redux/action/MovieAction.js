import api from "../api";

/* 
    리덕스 미들웨어
    - 두개의 개체 사이에서 원만히 통신할 수 있도록 돕는 역할
    - 리덕스 미들웨어는 action 과 reducer 사이의 중간자 역할
    - action(함수) - middleware - reducer - store
    - 비동기 처리 작업을 간편하게 가능 
*/
const API_KEY = process.env.REACT_APP_API_KEY;

function getMovies() {
    return async(dispatch) => {
        try {
            dispatch({
                type:"GET_MOVIES_REQUEST"
            })

            const popularMoiveApi = api.get(`/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`)
            const topRatedApi = api.get(`/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`)
            const upcomingApi = api.get(`/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`)
            const trendListAllApi = api.get(`/trending/all/day?api_key=${API_KEY}&language=ko-KR'`)
            const trendMoviesApi = api.get(`/trending/movie/day?api_key=${API_KEY}&language=ko-KR'`)
            const trendProgramsApi = api.get(`/trending/tv/day?api_key=${API_KEY}&language=ko-KR'`)

            /* 장르정보를 요청하는 api */
            const genreApi = api.get(`/genre/movie/list?api_key=${API_KEY}&language=ko-KR`)

            let [popularMovies, topRatedMovies, upcomingMovies, genreList, trendListAll, trendMovies, trendPrograms] = await Promise.all([
                popularMoiveApi, 
                topRatedApi, 
                upcomingApi,
                genreApi,
                trendListAllApi,
                trendMoviesApi,
                trendProgramsApi,
                
            ]);
            //console.log("장르리스트",genreList)
            dispatch({
                type: "GET_MOVIE_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upcomingMovies: upcomingMovies.data,
                    trendListAll: trendListAll.data,
                    trendMovies: trendMovies.data,
                    trendPrograms: trendPrograms.data,
                    genreList: genreList.data.genres,
                    
                }    
            })
        } catch(error) {
            //에러 핸들링하는 곳
            dispatch({type: "GET_MOVIES_FAILURE"})

        }
    }
}

export const MovieAction = {
    getMovies
}