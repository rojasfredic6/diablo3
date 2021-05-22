import trae from 'trae';

const clientId = '9a3fdf1f66d842449fcd852d653d3344';

const clientSecret = '52T9XBISSf2JsIdwW4JFEOhM4rg1Y6LK';

const region = 'us';
const API_URL= `https://${region}.battle.net/oauth/token`;

const getToken = () =>{

    const data = 'grant_type=client_credentials';
    
    const auth = btoa(`${clientId}:${clientSecret}`);
    
    const config = {
        headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${auth}`,
            },
        bodyType: 'json'
    }

    return trae.post(API_URL, data, config);
}

export { getToken };