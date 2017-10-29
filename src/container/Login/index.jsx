import React from 'react';
import Head from 'component/Login/Head';
import Foot from 'component/Login/Foot';
import Body from 'component/Login/Body';
class Login extends React.Component {
  render () {
    return <div>
             <Head></Head>
             <Body></Body> 
             <Foot></Foot>
           </div>
  }
}

export default Login;