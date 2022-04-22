export const FOODDATA_LOADING = 'FOODDATA_LOADING';
export const FOODDATA_SUCCESS = 'FOODDATA_SUCCESS';
export const FOODDATA_FAILURE = 'FOODDATA_FAILURE';

export const foodDataLoading = () => ({
    type: FOODDATA_LOADING,
});

export const foodDataSuccess = (payload) => ({
    type: FOODDATA_SUCCESS,
    payload
});

export const foodDataFailure = () => ({
    type: FOODDATA_FAILURE,  
});
