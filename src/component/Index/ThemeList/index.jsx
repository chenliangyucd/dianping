import React from 'react';
import style from './style.styl';

class ThemeList extends React.Component {
  /* 老子来测试下注释 */
  constructor (props, context) {
    super(props, context);
    this.state = {
      themeList: [{},{},{}]
    };
  }
  getThemeMoney (type, discount) {
    if (type === 0) {
      return <em className={style["theme-discount-money"]}>{discount}</em>
    } else {
      return <em className={style["theme-minus-money"]}>立减{discount}元</em>
    }
  }
  render () {
    return (
      <section className={style["theme-conainer"]}>
        <div className={style["theme-head"]}>
          <h2 className={style["theme-title"]} style={{color: this.props.themeList.titleColor}}>
            {this.props.themeList.title}
          </h2>
          <a className={style["theme-link"]} href="#">更多优惠<i className={"iconfont icon-arrow-bottom " + style["theme-right-arrow"]}></i></a>
        </div>
        <div className={style["theme-list"]}>
          {
            this.props.themeList.list && this.props.themeList.list.map(function (item, index) {
              return <dl key={index} className={style["theme-item"]}>
                       <dt className={style["theme-item-img"]}>
                              <img src="https://p0.meituan.net/dpdeal/1a0d87b7eed368dc789710540f11877e150359.jpg%40120w_90h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20"/>
                       </dt>
                       <dd className={style["theme-item-title"]}>{item.title}</dd>
                       <dd className={style["theme-item-info"]}>
                         ￥<strong className={style["theme-item-money"]}>{item.price}</strong>
                         { this.getThemeMoney(this.props.themeList.type, item.discount) }
                       </dd>
                     </dl>
            }.bind(this))
          }
          
        </div>
      </section>
    );
  }	
}

export default ThemeList;