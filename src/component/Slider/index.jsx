import React from 'react';
import style from './style.styl';

class Slider extends React.Component {
  constructor (props, context) {
    super(props, context);
    /**
    * props 中含有的参数
    * count 数量
    * direction:  row 横向滚动  column 纵向滚动
    * time  轮播空隙  几秒滚动一次
    */
    this.init();
  }
  init () {
    let flagDirection = this.props.direction === 'column' ? false : true;
    
    // 第二层嵌套的html样式
    let styleInner = {width: flagDirection? 100 * this.props.count + '%' : '100%', height: flagDirection? '100%': 100 * this.props.count + '%'  };

    // 计算每层的item的长度
    let itemLen = Math.floor(100 / this.props.count * 100) / 100 + '%';
    let styleItem = {width: flagDirection? itemLen: '100%', height: flagDirection? '100%': itemLen};

    //设置state
    this.state = {
       flagDirection,
       styleInner,
       styleItem
    };
  }
  render () {
    return <div className={style['slider-wrap']}>
             <div style={this.state.styleInner}>
               {
                 React.Children.map(this.props.children, (child) => {
                    return <div style={this.state.styleItem}>
                             {child}
                           </div>                
                 })
               }
             </div>
           </div>
  }	
}

export default Slider;
