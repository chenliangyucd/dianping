var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');

module.exports = {
	// entry: './src/script/main.js',   // 就一个入口文件，直接打包 1对1
	// entry: ['./src/script/main.js', './src/script/main1.js'],// 一个文件有多个文件入口，打包合成一个入口 多对1
	entry: ['webpack/hot/dev-server', './src/app.js'],  //  多个入口文件，打包生成多个文件  多对多,

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'js/[name]-[hash].js'
	},
	module: {
	  rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
          	loader: 'postcss-loader',
          	options: {
          	  plugins : function (loader) {
                 return [autoprefixer()];
              }
          	}
          }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
          	loader: 'postcss-loader',
          	options: {
          	  plugins : function (loader) {
                 return [autoprefixer()];
              }
          	}
          },
          {
          	loader: 'stylus-loader'
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff|svg|eot|ttf)\??.*$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[path][name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      },
      { 
      	test: /\.(js|jsx)$/, 
      	exclude: path.resolve(__dirname, 'node_modules'), 
      	loader: "babel-loader"
      }
    ]
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'),
      common: 'src/common',
      component: 'src/component',
      container: 'src/container'
    },
    extensions:['.js','.jsx']
  },
	plugins: [new HtmlWebpackPlugin({
      title: 'react dianping',
      filename: 'index.html',
      template: 'index.html',
      inject: 'body'
    }),
    new webpack.HotModuleReplacementPlugin()//热模块替换插件
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    historyApiFallback: true,
    inline: true,
    open: true,
    port: 9000
  }
};
