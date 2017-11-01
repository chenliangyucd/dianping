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
  componentDidMount () {
    this.beginSlider();

  }
  init () {
    let flagDirection = this.props.direction === 'column' ? false : true;
    let count = Number.parseInt(this.props.count) + 1;
    let time = 3000;
    // 第二层嵌套的html样式
    let styleInner = {display: 'flex', flexDirection: flagDirection? 'row' : 'column', width: flagDirection? 100 * count + '%' : '100%', height: flagDirection? '100%': 100 * count + '%', transitionProperty: 'transform', transitionDuration: '0ms', transitionTimingFunction: 'liner'};
   


    // 计算每层的item的长度
    let itemLen = Math.floor(100 / count * 100) / 100;
    let styleItem = {width: flagDirection? itemLen + '%': '100%', height: flagDirection? '100%': itemLen + '%'};
    
    // 初始化index 默认从0开始
    let index = 0; 
    // 设置state
    this.state = {
       count,
       flagDirection,
       styleInner,
       styleItem,
       itemLen, // 每个item的长度
       index,
       time // 每次间隔三秒进入下一个轮播
    };
  }
  /**
  *
  */
  beginSlider () {
    let sliderInner = this.refs.sliderInner;
    window.setInterval(() => {      
       let tempIndex = this.state.index + 1;
       let flag = false;
       //  因为第一个和第四个相同，当运行到第四个的时候，直接指到第二个节点
       if (this.state.count  === tempIndex) {
         tempIndex = 1;
       }
       // index指向倒数第二个节点的时候, 
       if (this.state.count - 1  === tempIndex) {
          flag = true;
       }
       
       let func = () => {
         let style = this.getStyleInner('0ms', 'translate3d(0, 0, 0)');
         this.setState({styleInner: style});
         //移除事件
         sliderInner.removeEventListener('transitionend', func, false);
       }
       flag&&sliderInner.addEventListener('transitionend', func, false);

       let translate3D = this.getTranslate3d(tempIndex);
       let style = this.getStyleInner('500ms', translate3D);

       this.setState({styleInner: style});       
       this.setState({index: tempIndex});
       
    }, this.state.time);
  }
  onceEvent (dom, eventType, func, that) {
    return function () {
      func.apply(that, Array.prototype.slice.call(arguments));
      dom.removeEventListener(eventType, func, false);
    }
  }
  /**
  *获取translate3D
  */
  getTranslate3d (index) {
    let len = index * this.state.itemLen * -1 + '%'; 
    let translate3D;
    if (this.state.flagDirection) {
      translate3D = `translate3d(${len}, 0, 0)`;
    } else {
      translate3D = `translate3d(0, ${len}, 0)`;
    }
    
    return translate3D;
  }
  /**
  * 获取styleInner，只设置时间
  */
  getStyleInner (transitionDuration, transform) {
     let style = {};
     style.transitionDuration = transitionDuration;
     style.transform = transform;
     style = Object.assign({}, this.state.styleInner, style);
     return style;
  }
  /**
  * 暂停滑动
  */
  stopSlider () {

  }
  /**
  * 渲染子节点
  */
  renderChildren () {
    let beginChild;
    let childrenLength = this.props.children && this.props.children.length ? this.props.children.length : 0;
    let childArray = React.Children.map(this.props.children, (child, index) => {
      if (index === 0) {
        beginChild = <div style={this.state.styleItem} key={childrenLength + 1} data-index={index}>
                        {child}
                     </div>     
      }
      
      return <div style={this.state.styleItem} key={index} data-index={index}>
                 {child}
               </div>     
                
    })

    if (childArray.length > 0) {
      childArray.push(beginChild);
    }
    return childArray;
  }
  render () {
    return <div className={style['slider-wrap']}>
             <div ref="sliderInner" style={this.state.styleInner}>
               {
                 this.renderChildren()
               }
             </div>
           </div>
  }	
}

export default Slider;
