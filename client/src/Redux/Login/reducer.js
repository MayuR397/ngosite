import {LOGIN_FAILURE , LOGIN_SUCCESS , LOGIN_LOADING } from "./action" ;

const initState = {
    loading : false ,
    isAuthentication : false ,
    token : "" ,
    error : false 
};


export const loginReducer = (store = initState , {type, payload}) => {
    switch(type){
        case LOGIN_LOADING:
            return{
                ...store ,
                loading:true ,
            };

        case LOGIN_SUCCESS:
            return{
                ...store,
                loading:false,
                isAuthentication:true,
                token:payload,
            }

        case LOGIN_FAILURE:
            return{
                ...store,
                loading:false,
                error:true,
            }

        default:
            return store ;
    }
}
