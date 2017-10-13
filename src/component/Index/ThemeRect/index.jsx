import React from 'react';
import style from './style.styl';
import example1 from './imgs/example1.png';
import example2 from './imgs/example2.png';

class Theme extends React.Component {
  render () {
    return (
      <div className={style['theme-container']}>
        <div className={style['theme-item']}>
          <section className={style['theme-content']}>
            <h3 className={style['theme-title']}>拼手气赢豪礼</h3>
            <div className={style['theme-des']}>大奖免费抽取</div>
          </section>
          <img src={example1} alt="主题图片1"/>
        </div>
        <div className={style['theme-item']}>
          <section className={style['theme-content']}>
            <h3 className={style['theme-title']}>旅行说走就走</h3>
            <div className={style['theme-des']}>独家</div>
          </section>
          <img src={example2} alt="主题图片2"/>
        </div>
      </div>
    );
  }
}

export default Theme;