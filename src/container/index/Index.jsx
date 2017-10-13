import React from 'react';
import Head from 'component/Index/Head';
import App from 'component/Index/App';
import MenuSlide from 'component/Index/MenuSlide';
import HeadLine from 'component/Index/HeadLine';
import ThemeLine from 'component/Index/ThemeLine';
import ThemeRect from 'component/Index/ThemeRect';
import ThemeList from 'component/Index/ThemeList';

class Index extends React.Component {
  render () {
    return (
      <div>
        <Head></Head>
        <App></App>
        <MenuSlide></MenuSlide>
        <HeadLine></HeadLine>
        <ThemeLine></ThemeLine>
        <ThemeList themeinfo= {{title: "天天立减"}}></ThemeList>
        <ThemeList themeinfo= {{title: "超值特惠"}}></ThemeList>
      </div>
    );
  }
}

export default Index;