import { CALL_SINGER, CALL_SINGER_PAYLOAD, LOGIN_SINGER, PUT_LOGIN_SINGER, PUT_LOGOUT_SINGER } from "./SingerAction"

export interface SingerState{
    data:any
    status:string
}
const initialState:SingerState = {
    data:null,
    status:"idle"
}

const SingerReducer = (state = initialState,action:{type:string,payload:any})=>{
    switch(action.type){
        case CALL_SINGER:
            state.data = "CHHH"
            state.status = "CHANGED"
            return {...state}
        case CALL_SINGER_PAYLOAD:
            state.data = action.payload
            state.status = "CHANGED PAYLOAD"
            return {...state}
        case PUT_LOGIN_SINGER:
            state.data = action.payload
            state.status = "LOGIN PAYLOAD"
            return {...state}
        case PUT_LOGOUT_SINGER:
            state.data = action.payload
            state.status = "LOGOUT PAYLOAD"
            return {...state}
        default:
            return state
    }
} 

export { SingerReducer }