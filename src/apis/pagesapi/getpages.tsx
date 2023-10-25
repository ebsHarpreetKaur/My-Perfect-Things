import axios from "axios";
import Config from "react-native-config";
// import { BASE_URL_FOR_PAGES } from '@env';
import { BASE_URL_FOR_PAGES} from '../../config'
// console.log("env access", process.env.BASE_URL_FOR_PAGES)

export function pages() {
    return fetch(`${BASE_URL_FOR_PAGES}`,

        {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => response.json())
        .then((responseData) => {
            // console.log(responseData);
            return responseData;
        })
        .catch(error => console.warn(error));
}

