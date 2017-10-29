import axios from 'axios';

/**
*获取getThemeRect
*/
export function getThemeRect (options) {
  return new Promise(function(resolve, reject) {
  	axios.get('/api/themeRect')
    .then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  }); 
}

/**
*获取getThemeLine
*/
export function getThemeLine () {
  return new Promise((resolve, reject) => {
    axios.get('/api/themeLine')
    .then(function (response) {
      console.info(response);
      resolve(response.data);      
    }).catch(function (error) {
      reject(error); 
    });
  });
}

/**
*获取getThemeList
*/
export function getThemeList () {
  return new Promise( (resolve, reject) => {
    axios.get('/api/themeList')
    .then(function (response) {
      resolve(response.data);
    }).catch(function (error) {
      reject(error);
    });
  });
}