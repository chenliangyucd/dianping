import React from 'react';
import style from './style.styl';
import appimg from './imgs/app.png';

class App extends React.Component {
  render () {
    return  (
      <div className = {style['app-container']}>
        <img className = {style['app-img']} src = {appimg} />
        <div>
          <a className = {style['app-open']} href = "#">打开呵呵点评</a><a className = {style['app-download']} href = "#">下载APP享特价</a>
        </div>
      </div>
    );
  }	
}

export default App;