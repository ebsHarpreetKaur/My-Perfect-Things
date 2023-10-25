import axios from "axios";
import { useEffect, useState } from "react";
// import { BASE_URL_FOR_POSTS } from '@env';
import { BASE_URL_FOR_POSTS } from '../../config'


// const getposts = () => {


let limit = 10;
let page = 1;


let query = `${BASE_URL_FOR_POSTS}?per_page=${limit}&page=${page}`;



async function posts() {

    // console.log("page", page)

    return fetch(`${query}`,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseData) => {

            return responseData;
        })
        .catch(error => console.warn(error));
}

export {
    query,
    posts
}

// }

// export default getposts




