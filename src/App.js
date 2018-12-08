import React, { Component } from 'react';
import ImagePage from "./components/imageDisplay/ImagePage"
import {BrowserRouter as Router, NavLink, Route, Redirect} from "react-router-dom"
import Logo from "./localImages/500px_logo_detail.png"

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
  justifyContent: 'flex-start',
  verticalAlign: 'bottom',
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
  marginBottom: '2px',
  marginTop: 'auto',
  fontSize: '1.5em',
  textDecoration: 'none',
  color: '#000',
}

const activeStyle={
  marginLeft: '10px',
  marginRight: '10px',
  marginBottom: '2px',
  marginTop: 'auto',
  fontSize: '1.5em',
  textDecoration: 'none',
  color: '#000',
  borderBottom: 'outset',
}


class App extends Component {
  render() {
    const redirectedPage = ({match}) => {
      return <ImagePage stream={match.params.id}/>
    }

    return (
      <Router>
        <div>
          <div style={headerStyle}>
            <a style={logoPosition} href='/'>
              <img style={logoStyle} src={Logo} alt='logo'/>
            </a>
            <div style={linkPosition}>
              <NavLink style={linkStyle} activeStyle={activeStyle} to="/popular">Popular</NavLink>
              <NavLink style={linkStyle} activeStyle={activeStyle} to="/fresh">Fresh</NavLink>
              <NavLink style={linkStyle} activeStyle={activeStyle} to="/upcoming">UpComing</NavLink>
              <NavLink style={linkStyle} activeStyle={activeStyle} to="/editors">Editor's Choice</NavLink>
            </div>
          </div>
            <Route exact path="/" render={()=><Redirect to="/popular"/>}/>
            <Route path="/:id" component={redirectedPage}/>
        </div>
      </Router>
    )
  }
}

export default App;
