import React from 'react';

class App extends React.Component {
  render () {
    <div>
      <div>header</div>
      {this.props.children}
      <div>footer</div>
    </div>
  }	
}

export default App;