import React, { Component } from 'react';
import ImagePage from "./components/imageDisplay/ImagePage"
import Header from './components/Header'

class App extends Component {
  constructor(){
    super()
    this.state={
      headerHeight: {
        display: 'hidden',
        height: '0px'
      },
    }

    this.onResizeHeader = this.onResizeHeader.bind(this)
  }

  onResizeHeader(width, height){
    this.setState({
      headerHeight: {
        display: 'hidden',
        height: height + 'px'
      }
    })
  }

  render() {
    return (
      <div>
        <div style={this.state.headerHeight}/>
        <Header onResize={this.onResizeHeader}/>
        <ImagePage/>
      </div>
    );
  }
}

export default App;
