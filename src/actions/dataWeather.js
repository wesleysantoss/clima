const actions = {
    setWordSearch: city => ({
        type: 'SET_WORD_SEARCH',
        payload: {
            search_word: city
        }
    }),
    setListCities: list_cities => ({
        type: 'SET_LIST_CITIES',
        payload: {
            list_cities: list_cities
        }
    }),
    setKeyCity: keyCity => ({
        type: 'SET_KEY_CITY',
        payload: {
            key_city: keyCity
        }
    })
}

export default actions;