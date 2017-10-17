import axios from 'axios';

/**
*获取getThemeRect
*/
export function getThemeRect (options) {
  return new Promise(function(resolve, reject) {
  	axios.get('/api/themeRect')
    .then(function (response) {
  	  console.info('打印getThemeRect返回结果');
      console.info(response);
      resolve(response.data);
    }).catch(function (error) {
      console.log(error);
      reject(error);
    });
  }); 
}

/**
*获取getThemeLine
*/
export function getThemeLine () {

}