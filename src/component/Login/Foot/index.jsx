import React from 'react';
import style from './style.styl';

class Foot extends React.Component {
  render () {
    return <div className={style.foot}>
              登陆即表示你同意大众点评<a href="#">&#60;&#60;用户使用协议&#62;&#62;</a>
           </div>
  }	
}

export default Foot; 