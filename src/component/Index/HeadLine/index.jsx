import React from 'react';
import style from './style.styl';

class HeadLine extends React.Component {
  render () {
    return (
      <section className={style['headline-container']}>
        <h2 className={style['headline-title']}>呵呵头条</h2>
        <div className={style['headline-des']}>北京牛排家：做高格调的亲民牛排馆</div>
        <div className={style['headline-img-container']}>
          <img className={style['headline-img']} src="https://p0.meituan.net/poicontent/b4e36693d2a743a02efdfb32a316e06664509.jpg%40100w_100h_1e_1c_1l%7Cwatermark%3D1%26%26r%3D1%26p%3D9%26x%3D20%26y%3D20" alt="头条图片"/>
          <em className={style['headline-num']}>7</em> 
        </div>
      </section>
    );
  }	
}

export default HeadLine;