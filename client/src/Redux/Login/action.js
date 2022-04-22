export const LOGIN_LOADING = "LOGIN_LOADING" ;
export const LOGIN_SUCCESS = "LOGIN_SUCCESS" ;
export const LOGIN_FAILURE = "LOGIN_FAILURE" ;

export const login_loading = () => ({
    type :LOGIN_LOADING
})

export const login_success = (payload) => ({
    type : LOGIN_SUCCESS ,
    payload,
})

export const login_failure = () => ({
    type : LOGIN_FAILURE ,
})
