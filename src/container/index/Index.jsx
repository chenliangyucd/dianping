import React from 'react';
import Head from 'component/Index/Head';
import App from 'component/Index/App';
import MenuSlide from 'component/Index/MenuSlide';
import HeadLine from 'component/Index/HeadLine';
import ThemeLine from 'component/Index/ThemeLine';
import ThemeRect from 'component/Index/ThemeRect';
import ThemeList from 'component/Index/ThemeList';
import GuessYouLike from 'component/Index/GuessYouLike';
import Foot from 'component/Foot';
import {getThemeRect, getThemeLine, getThemeList} from 'api/index';

class Index extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      themeRect: [],
      themeLine: [],
      themeList0: {},
      themeList1: {},
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
        <ThemeLine themeLine= {this.state.themeLine}></ThemeLine>
        <ThemeRect themeRect = {this.state.themeRect}></ThemeRect>
        <ThemeList themeList= {this.state.themeList0}></ThemeList>       
        <ThemeList themeList= {this.state.themeList1}></ThemeList>
        <GuessYouLike></GuessYouLike>
        <Foot></Foot>
      </div>
    );
  }
  componentDidMount () {
    getThemeRect().then( (data) => {
      // 只有setState的时候才会触发视图更新
      this.setState({themeRect: data});     
    }).catch( (error) => {
      // 进行错误处理,基本上只能给用户提示，将所有渲染的元素移除，我感觉最好的是给元素加上点击重试
    });

    getThemeLine().then( (data) => {
      this.setState({themeLine: data});
    }).catch( (error) => {
      // 进行错误处理,基本上只能给用户提示，将所有渲染的元素移除，我感觉最好的是给元素加上点击重试    
    });
    
    getThemeList().then( (data) => {
      console.info('打印获取到的themeList');
      console.info(data);
      this.setState({
        themeList0: data.themeList0,
        themeList1: data.themeList1
      });
     // this.setState({themeLine: data});
    }).catch( (error) => {
      // 进行错误处理,基本上只能给用户提示，将所有渲染的元素移除，我感觉最好的是给元素加上点击重试    
    });

  }
}

export default Index;