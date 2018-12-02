import React, { Component } from 'react';
import ImagePage from "./components/imageDisplay/ImagePage"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Logo from "./components/500px_logo_detail.png"
import ReactResizeDetector from "react-resize-detector"
import FullScreenImageItem from "./components/imageDisplay/fullScreenImage/FullScreenImageItem"

const headerStyle={
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  hieght: 'auto',
  backgroundColor: '#FFF',
  borderBottom: 'outset'
}

const logoPosition={
  position: 'relative',
  float: 'left',
}

const logoStyle = {
  maxWidth: '100px',
  width: 'auto',
  height: 'auto',
  marginLeft: '8%',
  marginBottom: '3%',
  marginTop: '8%',
}

const linkPosition={
  position: 'absolute',
  left: '38%',
  top: '53%',
}

const linkStyle={
  margin: '10px',
}

const fullImageFlexStyle = {
  display: 'flex',
  flexDirection:'column',
  justifyContent:'center',
}

const fullScreenImage = ({match}) => {
  return(
    <div style={fullImageFlexStyle}>
      <FullScreenImageItem thisItem={match.params.id}/>
    </div>
  )
}

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
    console.log(height)
  }

  render() {
    return (
      <Router>
        <div>
          <div style={headerStyle}>
            <a style={logoPosition} href='/'>
              <img style={logoStyle} src={Logo} alt='logo'/>
            </a>
            <div style={linkPosition}>
              <Link style={linkStyle} to="/">Popular</Link>
              <Link style={linkStyle} to="/fresh">Fresh</Link>
              <Link style={linkStyle} to="/upcoming">UpComing</Link>
              <Link style={linkStyle} to="/editorschoice">Editor's Choice</Link>
            </div>
            <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResizeHeader}/>
          </div>
          <div style={this.state.headerHeight}/>
          <Route exact path="/" render={()=><ImagePage stream='popular'/>}/>
          <Route exact path="/fresh" render={()=><ImagePage stream='fresh'/>}/>
          <Route exact path="/upcoming" render={()=><ImagePage stream='upcoming'/>}/>
          <Route exact path="/editorschoice" render={()=><ImagePage stream='editorschoice'/>}/>
          <Route path="/fullscreen/:id" component={fullScreenImage}/>
        </div>
      </Router>
    )
  }
}

export default App;
