import GphApiClient from 'giphy-js-sdk-core';

let client = GphApiClient('c4beB0XiEfHbhyA2E5vJICrr56Q19Nb7');

export const searchApi = (sentence) => {
    return client.search('gifs', {"q": sentence, "limit":75})
}


export const trending = () => {
    return client.trending('gifs', {"limit":50})
}


export const random = () => {
    return client.random('gifs', {})
}


export const categories = () => {
    return client.categoriesForGifs({})
}

