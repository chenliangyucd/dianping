import React from 'react';
import style from './style.styl';

class Body extends React.Component {
  render () {
    return <div className={style['login-body']}>
             <div className={style['login-container']}>
               <div className={style['login-line']}>
                 <label className={style['login-left']}>验证码</label>
                 <input className={style['login-input']} type="text" placeholder="请输入手机号" name="mobile" /> 
                 <button className={style['login-verify-btn']} type="button">发送验证码</button>
               </div>
               <div className={style['login-line']}>
                 <label className={style['login-left']}>验证码</label>
                 <input className={style['login-input']} type="text" placeholder="请输入验证码" name="verifyCode" /> 
               </div>
             </div>
             <div className={style['login-des']}>
               未注册的手机号码验证后自动创建点评账户
             </div>
             <div className={style['login-btn-wrap']}>
               <button className={style['login-btn']} type="button">登录</button>
             </div>
             <div className={style['login-account-wrap']}>
               <a className={style['login-account-link']} href="#" >账号密码登陆</a>
             </div>
             <div className={style['login-third-wrap']}>
               <div className={style['login-third-line']}></div>
               <div className={style['login-third-text']}>第三方账号登陆</div>
               <div className={style['login-third-line']}></div>
             </div>
             <div className={style['login-thirdway-wrap']}>
                <a className={style['login-thirdway-item'] + ' ' + style['login-thirdway-qq']}  href="#" ></a>
                <a className={style['login-thirdway-item'] + ' ' + style['login-thirdway-wb']}  href="#" ></a>
             </div>
           </div>
  }
}

export default Body;