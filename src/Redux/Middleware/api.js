import axios from 'axios';

export const ApiCall = ({
    url = 'https://shopserver.firebaseapp.com',
    endpoint = '',
    method = 'GET',
    body = {},
    headers = {}
}) => {
    const getMethod = method.toLowerCase();
    return new Promise((resolve, reject) => {
        axios({
                baseURL: `${url}${endpoint}`,
                method: getMethod,
                catalog: body
            })
            .then(responce => resolve(responce))
        // .cath(err => reject(err))
    })

}

export default state => next => action => {
    if (action.type !== 'API_REQUEST' || !action.apiData) return next(action)
    const {
        url,
        endpoint,
        method,
        body,
        headers,
        types
    } = action.apiData
    next({
        type: types.REQUEST
    })


    const onSuccess = (responce) => {
        console.log('Api success');
        console.log("responce", responce.data)
        const resp = responce.data
        next({
            type: types.SUCCESS, ...resp
        })
    }

    const onFailure = (err) => {
        console.log('Api error');

        let errorType = ''
        if (err.data && err.staus === 404) {
            errorType = 'Unauthorised'
        }
        next({
            type: types.FAILURE,
            errorType
        })
    }



    ApiCall({
            url,
            endpoint,
            method,
            body,
            headers
        })
        .then(onSuccess, onFailure)
        .catch(err => console.log('err>>>>', err))

}