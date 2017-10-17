import React from 'react';
import style from './style.styl';

class GuessYouLike extends React.Component {
  render () {
    return (
      /*gyl  guess you like 简写=。=*/
      <section className={style['gyl-container']}>
        <h2 className={style['gyl-head']}>
          猜你喜欢
        </h2>
        <ul className={style['gyl-list']}>
          <li className={style['gyl-item']}>
            <img className={style['gyl-image']}  src="https://p1.meituan.net/deal/aa9de12e68c2b663e8a58a177758882b2199839.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0" alt="食物图片"/>
            <section className={style['gyl-content']}>
              <h3 className={style['gyl-title']}>
                旺顺阁鱼头泡饼
              </h3>
              <div className={style['gyl-des']}>
                [2店通用] 1斤鱼头卷3选1
              </div>
              <div className={style['gyl-info']}>
                <div>
                  <em className={style['gyl-unit']}>￥<strong className={style['gyl-promo-money']}>1</strong></em><span className={style['gyl-money']}>￥100</span>
                </div>
                <div className={style['gyl-selcount']}>
                  已售738
                </div>
              </div>
            </section>
          </li>
          <li className={style['gyl-item']}>
            <img className={style['gyl-image']}  src="https://p1.meituan.net/deal/aa9de12e68c2b663e8a58a177758882b2199839.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0" alt="食物图片"/>
            <section className={style['gyl-content']}>
              <h3 className={style['gyl-title']}>
                旺顺阁鱼头泡饼
              </h3>
              <div className={style['gyl-des']}>
                [2店通用] 1斤鱼头卷3选1
              </div>
              <div className={style['gyl-info']}>
                <div>
                  <em className={style['gyl-unit']}>￥<strong className={style['gyl-promo-money']}>1</strong></em><span className={style['gyl-money']}>￥100</span>
                </div>
                <div className={style['gyl-selcount']}>
                  已售738
                </div>
              </div>
            </section>
          </li>
          <li className={style['gyl-item'] + ' ' + style['gyl-more']}>
            加载更多
          </li>
        </ul>
      </section>
    );
  }	
}

export default GuessYouLike;