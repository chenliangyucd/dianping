import React from 'react';
import style from './style.styl';

class Head extends React.Component {
  render () {
    return <div className={style['login-head']}>
             <i className={"iconfont icon-arrow-bottom " + style['login-back']}></i>
             <h2 className={style['login-title']}>手机号快捷登陆</h2>
           </div>
  }
}

export default Head;