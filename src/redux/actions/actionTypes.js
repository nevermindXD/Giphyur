export const FETCH_RANDOM_GIFS = 'FETCH_RANDOM_GIFS';
export const FETCH_SEARCH_GIFS = 'FETCH_SEARCH_GIFS';
export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const CHANGE_PRESENTATION = 'CHANGE_PRESENTATION';
export const GET_PRESENTATION = 'GET_PRESENTATION';
export const GET_HEIGHT_NAVBAR = 'GET_HEIGHT_NAVBAR';
export const CHANGE_HEIGHT_NAVBAR = 'CHANGE_HEIGHT_NAVBAR';

export const getRandomGifs = (cards) => ({
        type:FETCH_RANDOM_GIFS,
        cards
})

export const getSearchGifs = (cards) => (
    {
        type:FETCH_SEARCH_GIFS,
        payload:cards
    }
)

export const getCategories = (categories) => (
    {
        type:FETCH_CATEGORIES,
        payload:categories
    }
)

export const getPresentation = (waterfall) => (
    {
        type:GET_PRESENTATION,
        waterfall
    }
)

export const changePresentation = (waterfall) => (
    {
        type: CHANGE_PRESENTATION,
        payload:waterfall
    }
)

export const changeHeightNavbar = (heightNavbar) => (
    {
        type: CHANGE_HEIGHT_NAVBAR,
        payload:heightNavbar
    }
)

export const getHeightNavbar = (heightNavbar) => (
    {
        type: GET_HEIGHT_NAVBAR,
        heightNavbar
    }
)