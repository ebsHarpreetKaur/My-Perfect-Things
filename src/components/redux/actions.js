import axios from 'axios';
export const GET_POSTS = 'GET_POSTS';
export const GET_PAGES = 'GET_PAGES';
export const GET_CURRENT_WEATHER_DATA = 'GET_CURRENT_WEATHER_DATA';
import { BASE_URL_FOR_POSTS, BASE_URL_FOR_PAGES } from '../../config';
let query = `${BASE_URL_FOR_POSTS}?per_page=${limit}&page=${page}`;
let limit = 10;
export let page = 1;
// let query = `${BASE_URL_FOR_POSTS}?per_page=${limit}`;

// export const setPage = page => dispatch => {
//     dispatch({
//         type: SET_PAGE,
//         payload: page
//     })
// }
import { useEffect, useState } from "react";
const weatherUnit = 'metric' // 'standard' , 'imperial'



const getCurrentLocationData = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let lat = position.coords.latitude
            let long = position.coords.longitude
            // setLocation({position: {latitude, longitude}})
            getCurrentWeather(long, lat)
        })
    }
}
getCurrentLocationData()


export const getCurrentWeather = (long, lat) => {
    console.log("long", long)
    console.log("lat", lat)
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=a7aec0005ad81a470818c6ecdd2c313b&units=${weatherUnit}`


    try {
        return async dispatch => {
            const res = await axios.get(`${apiURL}`);
            // console.log('res', res.data);

            if (res.data) {
                dispatch({
                    type: GET_CURRENT_WEATHER_DATA,
                    payload: res.data,
                });


            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {
        console.log('error', error);

    }
};


export const getPosts = () => {
    console.log("page in action", page)
    try {
        return async dispatch => {
            const res = await axios.get(`${query}`);
            // console.log('res', res.data);

            if (res.data) {
                dispatch({
                    type: GET_POSTS,
                    payload: res.data,
                });


            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {
        console.log('error', error);

    }
};

export const getPages = () => {
    try {
        return async dispatch => {
            const res = await axios.get(`${BASE_URL_FOR_PAGES}`);
            // console.log('PAGE res', res.data);

            if (res.data) {
                dispatch({
                    type: GET_PAGES,
                    payload: res.data,
                });


            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {
        console.log('error', error);

    }
};
