import React from 'react';
import style from './style.styl';
import { withRouter } from 'react-router';

class Head extends React.Component {
  linkPersonCenter () {
    console.info(this.props.history);
    this.props.history.push("/login");
  } 	
  render () {
    return (
      <div className={style['head']}>
         <div className={style['head-city']}>
           北京<i className="iconfont icon-arrow-bottom"></i>
         </div>
         <div className={style['head-search']}>
           <i className={"iconfont icon-sousuo " + style['head-search-icon']}></i>输入商户名、地点
         </div>
         <i onClick={this.linkPersonCenter.bind(this)} className={"iconfont icon-gerenzhongxin " + style['head-person']}></i>
      </div>
    );
  }

}

export default withRouter(Head);
