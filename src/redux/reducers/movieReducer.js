let initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upcomingMovies: [],
    trendListAll: [],
    trendMovies: [],
    trendPrograms: [],
    genreList: [],
    genreTagTv: [],
    loading: true
}

const movieReducer = (state = initialState, action) => {
    let {type, payload} = action;
    switch(type) {
      case "GET_MOVIES_REQUEST" :
        return {...state, loading: true};
      case "GET_MOVIE_SUCCESS" :
          return {
              ...state,
              popularMovies: payload.popularMovies,
              topRatedMovies: payload.topRatedMovies,
              upcomingMovies: payload.upcomingMovies,
              trendListAll: payload.trendListAll,
              trendMovies: payload.trendMovies,
              trendPrograms: payload.trendPrograms,
              genreList: payload.genreList,
              genreTagTv: payload.genreTagTv,
              loading: false
          };
      case "GET_MOVIES_FAILURE" :
          return {...state, loading: false}
      
          default:
              return {...state}
    }
 
}

export default movieReducer