const CALL_SINGER = "CALL_SINGER"
const CALL_SINGER_PAYLOAD = "CALL_SINGER_PAYLOAD"
const LOGIN_SINGER = "LOGIN_SINGER"
const LOGOUT_SINGER = "LOGOUT_SINGER"
const PUT_LOGIN_SINGER = "PUT_LOGIN_SINGER"
const PUT_LOGOUT_SINGER = "PUT_LOGOUT_SINGER"
const callSinger = () => ({type:CALL_SINGER})
const callSingerPayload = (payload:string) => ({type:CALL_SINGER_PAYLOAD,payload})
const doLoginAsync = (payload:string) => ({type:LOGIN_SINGER,payload})
const doLogoutAsync = (payload:string) => ({type:LOGOUT_SINGER,payload})
const putLoginResult = (payload:string) => ({type:PUT_LOGIN_SINGER,payload})
const putLogoutResult = (payload:string) => ({type:PUT_LOGOUT_SINGER,payload})

export {
    CALL_SINGER,
    callSinger,
    CALL_SINGER_PAYLOAD,
    callSingerPayload,
    LOGIN_SINGER,
    LOGOUT_SINGER,
    doLoginAsync,
    doLogoutAsync,
    PUT_LOGIN_SINGER,
    PUT_LOGOUT_SINGER,
    putLoginResult,
    putLogoutResult
}