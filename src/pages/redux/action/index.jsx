//import axios from 'axios';


export const LOGIN_DATA = 'LOGIN_DATA';
    
export const Login_maowang=(user,pass)=>{
    console.log('看看参数对不对',user,pass)
    // return {type:LOGIN_DATA, payload:axios.post('http://admin.zhsoft.cc/index.php/login/login',{name:user,pass:pass})}
    return {type:LOGIN_DATA,name:user}


    /*axios.post('https://www.zhsoft.cc/m_api/login', 'name='+user+'&pass='+pass, {headers: {'Content-Type': 'application/x-www-form-urlencoded;'}})
    .then(function (response) {
        console.log(response);
        if(response.data.code=='000000'){//登陆成功
            //hashHistory.push('/');
            console.log('登陆成功了')
            return ({type:Increment, payload:response.data})

        }else{
            //that.setState({errtip:true})
        }
        console.log(response.data.code)
    })
    .catch(function (error) {
        console.log(error);
    });*/

  }

/*export const getsydata=()=>{
    let now = new Date();
    //小时,分钟，秒，毫秒
    //凌晨2点50分50秒0毫秒
    now.setHours(0, 0, 0,0);
    let Stime=now.getTime()/1000;
    now.setHours(23, 59, 59,999);
    let Etime=now.getTime()/1000;

    return {type:GETSY_DATA, payload:axios.post('http://admin.zhsoft.cc/index.php//business/indexFrom', 'startTime='+Stime+'&endTime='+Etime, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})}

}*/