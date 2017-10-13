import React from 'react';
import style from './style.styl';

class ThemeList extends React.Component {
  render () {
    return (
      <section className={style["theme-conainer"]}>
        <div className={style["theme-head"]}>
          <h2 className={style["theme-title"]}>
            {this.props.themeinfo.title}
          </h2>
          <a className={style["theme-link"]} href="#">更多优惠<i className={"iconfont icon-arrow-bottom " + style["theme-right-arrow"]}></i></a>
        </div>
        <div className={style["theme-list"]}>
          <dl className={style["theme-item"]}>
            <dt className={style["theme-item-img"]}>
              <img src="https://p0.meituan.net/dpdeal/1a0d87b7eed368dc789710540f11877e150359.jpg%40120w_90h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20"/>
            </dt>
            <dd className={style["theme-item-title"]}>鲍师傅糕点</dd>
            <dd className={style["theme-item-info"]}>￥<em className={style["theme-item-money"]}>1</em></dd>
          </dl>
          <dl className={style["theme-item"]}>
            <dt className={style["theme-item-img"]}>
              <img src="https://p0.meituan.net/dpdeal/1a0d87b7eed368dc789710540f11877e150359.jpg%40120w_90h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20"/>
            </dt>
            <dd className={style["theme-item-title"]}>鲍师傅糕点</dd>
            <dd className={style["theme-item-info"]}>￥<em className={style["theme-item-money"]}>1</em></dd>
          </dl>
          <dl className={style["theme-item"]}>
            <dt className={style["theme-item-img"]}>
              <img src="https://p0.meituan.net/dpdeal/1a0d87b7eed368dc789710540f11877e150359.jpg%40120w_90h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20"/>
            </dt>
            <dd className={style["theme-item-title"]}>鲍师傅糕点</dd>
            <dd className={style["theme-item-info"]}>￥<em className={style["theme-item-money"]}>1</em></dd>
          </dl>
        </div>
      </section>
    );
  }	
}

export default ThemeList;