import React from 'react';
import style from './style.styl';

class Foot extends React.Component {
  render () {
    return (
      <div className={style.foot}>
        <nav className={style['foot-nav']}>
          <a href="#">我的</a><a href="#">社区论坛</a><a href="#">添加商户</a><a href="#">意见反馈</a>
        </nav>
        <nav className={style['foot-nav']}>
          <a href="#">美团网</a><a href="#">美团下载</a><a href="#">结婚</a><a href="#">亲子</a><a href="#">家装</a><a href="#">宴会</a><a href="#">教育</a>
        </nav>
        <nav className={style['foot-nav']}>
          <a href="#">电脑板</a><a href="#">客户端</a>
        </nav>
        <div className={style['foot-copyright']}>
          copyright &copy;2017 dianping.com
        </div>
      </div>
    );
  }
}

export default Foot;