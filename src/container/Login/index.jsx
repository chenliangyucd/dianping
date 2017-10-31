import React from 'react';
import Head from 'component/Login/Head';
import Foot from 'component/Login/Foot';
import Body from 'component/Login/Body';
import Slider from 'component/Slider';
import style from './style.styl';
class Login extends React.Component {
  render () {
    return <div className={style['login-wrap']}>
             <Head></Head>
             <Slider count="3" direction="row" time="5">
               <span>123</span>
               <span>456</span>
               <span>789</span>
             </Slider>
             <Body></Body> 
             <Foot></Foot>
           </div>
  }
}

export default Login;