import trae from 'trae';

import store from '../store/index';

import { locales } from '../utils/regions';

const protocol = 'https://';
const host = '.api.blizzard.com/'

const getApiAccount = ({region, account}) => {
    const resource = `d3/profile/${account}/`;
    const API_URL = `${protocol}${region}${host}${resource}`;
    const locale = locales[region]

    const params = {
        access_token: store.state.oauth.accessToken, locale
    }

    return trae.get(API_URL, { params: params, bodyType: 'json' })
}

const getApiHero = ({region, account, heroId}) => {
    const resource = `d3/profile/${account}/hero/${heroId}`;
    const API_URL = `${protocol}${region}${host}${resource}`;
    const locale = locales[region];

    const params = {
        'access_token': store.state.oauth.accessToken,
        locale
    };

    return trae.get(API_URL, { params:params, bodyType: 'json'})
}

const getApiDetailedHeroItems = ({region,account,heroId}) => {
    const resource =`d3/profile/${account}/hero/${heroId}/items/`;
    const API_URL = `${protocol}${region}${host}${resource}`;
    const locale = locales[region]

    const params = {
        access_token: store.state.oauth.accessToken,
        locale
    }

    return trae.get(API_URL, { params: params, bodyType: 'json' })
}

export { getApiAccount, getApiDetailedHeroItems, getApiHero }