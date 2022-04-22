import {SIGNUP_LOADGING , SIGNUP_SUCCESS , SIGNUP_FAILURE} from "./action" ;

const initState = {
    loading :false ,
    isRegister :false ,
    error : false ,
}

export const SingUpReducer = (store = initState , {type}) => {
    switch(type){
        case SIGNUP_LOADGING:
            return{
                ...store,
                loading:true ,
            }

       case SIGNUP_SUCCESS:
           return{
               ...store,
               loading :false,
               isRegister:true,
           }

        case SIGNUP_FAILURE:
            return{
                ...store,
                loading:false,
                error:true ,
            }

        default:
            return store ;
    }
}