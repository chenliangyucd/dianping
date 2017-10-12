import React from 'react';
import style from './style.styl';
class MenuSlide extends React.Component {
  render () {
    return (
      <div>
        <div>
          <div>
            <nav className={style['menu-list'] + " clearfix"}>
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>  
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>          
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>          
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>          
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>          
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>          
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>          
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>          
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>          
              <a className={style['menu-item']} href="#">
                <div className={style['menu-img-wrap']}>
                  <img src="//www.dpfile.com/sc/eleconfig/20160126194705meishi.png"/>
                </div>
                <span>美食</span>
              </a>                  
            </nav>
          </div>
          <div className={style['nav-dot-container']}>
            <span className={style['nav-dot']}></span><span className={style['nav-dot']}></span><span className={style['nav-dot']}></span>
          </div>
        </div>
      </div>      
    );
  }	
}

export default MenuSlide;