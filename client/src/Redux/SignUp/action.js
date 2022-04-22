export const SIGNUP_LOADGING = "SIGNUP_LOADGING" ;
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS" ;
export const SIGNUP_FAILURE = "SIGNUP_FAILURE" ;

export const signUp_loading = () => ({
    type : SIGNUP_LOADGING ,
})

export const signUp_success = () => ({
    type : SIGNUP_SUCCESS ,
})

export const signUp_failure = () => ({
    type : SIGNUP_FAILURE ,
})

