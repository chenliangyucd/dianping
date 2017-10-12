import React from 'react';
import Head from 'component/Index/Head';
import App from 'component/Index/App';
import MenuSlide from 'component/Index/MenuSlide';
import HeadLine from 'component/Index/HeadLine';

class Index extends React.Component {
  render () {
    return (
      <div>
        <Head></Head>
        <App></App>
        <MenuSlide></MenuSlide>
        <HeadLine></HeadLine>
      </div>
    );
  }
}

export default Index;