import React from 'react';
import style from './style.styl';
import example1 from './imgs/example1.png';
import example2 from './imgs/example2.png';

class Theme extends React.Component {
  render () {
    return (
      <div className={style['theme-container']}>
        { 
         this.props.themeRect.map((item, index) => {
           return <div key={index} style={{backgroundColor: item.bg_color}} className={style['theme-item']}>
              <section className={style['theme-content']}>
                <h3 className={style['theme-title']}>{item.title}</h3>
                <div className={style['theme-des']}>{item.sub_title}</div>
              </section>
              <img src={example1} alt={item.bg_color}/>
            </div>
         })
        }
      </div>
    );
  }
}

export default Theme;
