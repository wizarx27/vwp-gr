import {call,put,takeEvery,all} from "redux-saga/effects"
import { LOGIN_SINGER, LOGOUT_SINGER, putLoginResult } from "./SingerAction";
import { Singer, baseUrl } from "../const";

const sleeping = async (time:number)=>{
    await new Promise(resolve => setTimeout(resolve, time));
    return
}

const fetchApi = async ()=>{
    const data = await fetch(baseUrl+"singer").then(res => res.json())
    return data
}

function* doLoginAsync(action:any):any{
    // yield sleeping(2000)
    console.log(action)
    const data = yield call(fetchApi)
    yield put(putLoginResult(data))
}
function* doLogoutAsync(){
    
}

function* SingerWatcher(){
    yield all([
        takeEvery(LOGIN_SINGER,doLoginAsync),
        takeEvery(LOGOUT_SINGER,doLogoutAsync),
    ])
}
export {SingerWatcher}