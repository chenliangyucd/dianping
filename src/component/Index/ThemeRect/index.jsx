import React from 'react';
import style from './style.styl';

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
                     <img src={item.img_url} alt={item.bg_color}/>
                   </div>
         })
        }
      </div>
    );
  }
}

export default Theme;
