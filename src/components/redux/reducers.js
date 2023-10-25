import { GET_POSTS, GET_PAGES, GET_CURRENT_WEATHER_DATA } from './actions';


const initialState = {
    posts: [],
    pagelist: [],
    weatherdata: [],
    loading: false,
    moreLoading: false,
    error: null,
    moreError: null,
    data: [],
    isListEnd: false,
};



export function weatherReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER_DATA:
            return { ...state, weatherdata: action.payload };

        default:
            return state;
    }
}


export function postsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS:
            return { ...state, posts: action.payload };

        default:
            return state;
    }
}

export function pagesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PAGES:
            return { ...state, pagelist: action.payload };
        default:
            return state;
    }
}


// export default postsReducer;

