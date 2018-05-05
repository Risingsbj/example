import {LOGIN_DATA,LOGIN_PASS} from '../action'
//import {GETSY_DATA, GETSY_DATA_PENDING, GETSY_DATA_FULFILLED, GETSY_DATA_REJECTED} from '../action'
import { hashHistory } from 'react-router';
export default (state, action) => {
    const name = state.name;
    const pas = state.pas;


    console.log('3状态来了啊', state, action)


    switch (action.type) {
        case LOGIN_DATA://该值被中间件处理了，并不会接受到

            console.log('4登陆开始了')
            console.log(...state)
            
            return {...state,name:name+1}
        case LOGIN_PASS:
            return {...state,pas:pas+2}


        /*case LOGIN_DATA_PENDING:
            console.log('登陆等待中')
            return {...state, login_error: '正在登陆，请稍后...'}
        case LOGIN_DATA_FULFILLED://请求结束了
            if (action.payload.data.code == '000000') {//登陆成功了
                //hashHistory.push('/')
                return {...state,login_data:action.payload.data.data ,login_ok:true}
            }
            else {
                return {...state, login_error: '账号或密码有误，请重新输入！'}
            }
            return state;
        case LOGIN_DATA_REJECTED:
            console.log('请求失败了')
            return {...state, login_error: '登陆失败，请检查你的连接！'}



        case GETSY_DATA://该值被中间件处理了，并不会接受到
            console.log('正在拉取数据')
            return state
        case GETSY_DATA_PENDING:
            console.log('拉取数据中')
            return state
        case GETSY_DATA_FULFILLED://请求结束了
            if (action.payload.data.code == '000000') {//登陆成功了
                return {...state,sy_data:action.payload.data.data,sy_data_ok:true}
            }
            else {
                return state
            }
            return state;
        case GETSY_DATA_REJECTED:
            console.log('请求失败了')
            return {...state, login_error: '登陆失败，请检查你的连接！'}*/







        default:
            console.log('z走到默认')
            return state;
    }
}