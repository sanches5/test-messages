import { stringify } from "querystring";

export const configFetch = (url, method, body, params) => {
    const configRequest = {
        method: method,
        headers: new Headers({
            "content-type": "application/json;charset=utf-8",
            "Access-Control-Request-Method": "*",
            "Access-Control-Request-Headers": 'origin, content-type, accept'
        })
    };

    let setUrl = url;

    if (body && Object.keys(body).length) {
        configRequest.body = JSON.stringify(body);
    }

    if (params) {
        setUrl = url + "?" + stringify(params);
    }

    return fetch(setUrl, configRequest)
        .then( async (response) => {
            if (response.status === 200) {
                return response.json()
            }
            else {
                throw (await response.json());
            }
        })
        .catch(e => {
            return e.message;
        })
        .then((response) => {
            console.debug(response);
            return response;
        })
};


export const get = (url, body, params) => configFetch(url, "GET", body, params)
export const post = (url, body, params) => configFetch(url, "POST", body, params)
export const del = (url, body, params) => configFetch(url, "DELETE", body, params)
