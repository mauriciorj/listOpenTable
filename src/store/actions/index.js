import * as actionTypes from './actionTypes';
import axios from '../../axios/axios';

export const fecthDataStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    }
}

export const fecthDataSuccess = (data) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        data: data
    }
}

export const fecthDataFail = (error) => {
    return {
        type: actionTypes.FETCH_DATA_FAIL,
        error: error
    }
}

export const fetchData = (city, restaurantName, page) => {
    return dispatch => {
        dispatch(fecthDataStart());
        if (restaurantName !== null) {
            axios.get('restaurants?city=' + city + '&name=' + restaurantName)
                .then(response => {
                    dispatch(fecthDataSuccess([response.data, city, page]))
                    //console.log(response.data)
                })
                .catch(error => {
                    dispatch(fecthDataFail(error))
                    //console.log(error)
                })
        } else {
            if (page !== null) {
                axios.get('restaurants?city=' + city + '&page=' + page)
                    .then(response => {
                        dispatch(fecthDataSuccess([response.data, city, page]))
                        //console.log(response.data)
                    })
                    .catch(error => {
                        dispatch(fecthDataFail(error))
                        //console.log(error)
                    })
            } else {
                axios.get('restaurants?city=' + city)
                    .then(response => {
                        dispatch(fecthDataSuccess([response.data, city, page]))
                        //console.log(response.data)
                    })
                    .catch(error => {
                        dispatch(fecthDataFail(error))
                        //console.log(error)
                    })
            }
        }
    }
}