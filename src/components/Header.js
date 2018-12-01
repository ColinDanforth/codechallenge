import React from 'react'
import PropTypes from 'prop-types'
import Logo from './500px_logo_detail.png'
import ReactResizeDetector from 'react-resize-detector';

const headerStyle={
  position: 'fixed',
  top: '0px',
  left: '0px',
  width: '100%',
  hieght: 'auto',
  backgroundColor: '#FFF',
  borderBottom: 'outset'
}

const logoStyle = {
  maxWidth: '100px',
  width: 'auto',
  height: 'auto',
  margin: '0.8%',
}

class Header extends React.Component{
  render(){
    return(
      <div style={headerStyle}>
        <a href='/'>
          <img style={logoStyle} src={Logo} alt='logo'/>
        </a>
        <ReactResizeDetector handleWidth handleHeight onResize={this.props.onResize} />
      </div>
    )
  }
}

export default Header

Header.propTypes={
  onResize: PropTypes.func,
}
