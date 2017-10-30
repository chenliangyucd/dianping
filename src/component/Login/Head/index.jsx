import React from 'react';
import style from './style.styl';
import { withRouter } from 'react-router';

class Head extends React.Component {
  linkBack () {
    this.props.history.goBack();
  }
  render () {
    return <div className={style['login-head']}>
             <i onClick={this.linkBack.bind(this)} className={"iconfont icon-arrow-bottom " + style['login-back']}></i>
             <h2 className={style['login-title']}>手机号快捷登陆</h2>
           </div>
  }
}

export default withRouter(Head);