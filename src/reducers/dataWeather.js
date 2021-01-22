const INITIAL_STATE = {
    search_word: '',
    list_cities: [],
    key_city: 0 
}

const reducers = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case 'SET_WORD_SEARCH':
            const {search_word} = action.payload;
            return {...state, search_word}
        case 'SET_LIST_CITIES':
            const {list_cities} = action.payload;
            return {...state, list_cities}
        case 'SET_KEY_CITY':
            const {key_city} = action.payload;
            return {...state, key_city}
        default:    
            return state
    }
}

export default reducers;