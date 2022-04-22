import { FOODDATA_FAILURE, FOODDATA_SUCCESS, FOODDATA_LOADING } from "./action";

const initialState = {
    loading: false,
    data: [],
    error: false ,
};

export const foodDataReducer = (state = initialState, {type , payload}) => {
    switch (type) {
        case FOODDATA_LOADING:
            return {
                ...state,
                loading: true,
                error: false,
            };
        case FOODDATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...payload],
                error: false,
            };
        case FOODDATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: true,
            };
        default:
            return state;
    }
}