import React, { Component } from 'react';
import ImagePage from "./components/imageDisplay/ImagePage"
import {BrowserRouter as Router, Link, Route} from "react-router-dom"
import Logo from "./components/500px_logo_detail.png"
import FullScreenImageItem from "./components/imageDisplay/fullScreenImage/FullScreenImageItem"

const headerStyle={
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  hieght: 'auto',
  backgroundColor: '#FFF',
  borderBottom: 'outset',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start'
}

const logoPosition={
  position: 'relative',
  float: 'left',
}

const logoStyle = {
  maxWidth: '100px',
  width: '100%',
  height: 'auto',
  marginLeft: '8%',
  marginBottom: '3%',
  marginTop: '8%',
}

const linkPosition={
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row',
  flex: '1',
}

const linkStyle={
  marginLeft: '10px',
  marginRight: '10px',
  fontSize: '1.8em',
}

const fullScreenImage = ({match}) => {
  return(
    <FullScreenImageItem thisItem={match.params.id}/>
  )
}

class App extends Component {
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
          </div>
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
