import React from 'react';
import style from './style.styl';

class Theme extends React.Component {
  render () {
    return (
      <div className={style['theme-container']}>
        {
          this.props.themeLine.map ((item, index) => {
            return  <div key={index} className={style['theme-item']}>
                      <section className={style['theme-content']}>
                        <h3 className={style['theme-title']}>{item.title}</h3>
                        <div className={style['theme-des']}>{item.sub_title}</div>
                      </section>
                      <img src={item.img_url} alt="主题图片"/>
                    </div>
          })
        }
      </div>
    );
  }
}

export default Theme;

