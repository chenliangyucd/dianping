import React from 'react';
import Head from 'component/Index/Head';
import App from 'component/Index/App';
import MenuSlide from 'component/Index/MenuSlide';
import HeadLine from 'component/Index/HeadLine';
import ThemeLine from 'component/Index/ThemeLine';
import ThemeRect from 'component/Index/ThemeRect';
import ThemeList from 'component/Index/ThemeList';
import GuessYouLike from 'component/Index/GuessYouLike';
import {getThemeRect} from 'api/index';

class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      themeRect: [],
      test: 'abc'
    };
  }
  render () {
    return (
      <div>
        <Head></Head>
        <App></App>
        <MenuSlide></MenuSlide>
        <HeadLine></HeadLine>
        <ThemeLine></ThemeLine>
        <ThemeRect themeRect = {this.state.themeRect}></ThemeRect>
        <ThemeList themeinfo= {{title: "天天立减"}}></ThemeList>       
        <GuessYouLike></GuessYouLike>
      </div>
    );
  }
  componentDidMount () {
    getThemeRect().then( (data) => {
      console.info(data);
      console.info('开始设置打印state');
      setTimeout(() => {
        this.setState({themeRect: data});     
        console.info(this.state);
      }, 2000);     
    }).catch( (error) => {
      console.info(error);
    });
  }
}

export default Index;