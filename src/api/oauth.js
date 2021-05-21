import trae from 'trae';

const clientId = '0cae6467ef4e4958bee63238713448b8';

const clientSecret = '5EgU5CZzvsXYhSjlhR68jZXcWWbxEYoS';

const region = 'eu';
const API_URL= `https://${region}.battle.net/ouath/token`;

const getToken = () =>{

    const config = {
        auth: { username: clientId, password: clientSecret}
    }

    return trae.post(API_URL, { grant_type: 'client_credentials'}, config);
}

export default getToken;