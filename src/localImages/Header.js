import React from 'react'
import PropTypes from 'prop-types'
import Logo from './500px_logo_detail.png'
import {Link} from "react-router-dom"
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
  constructor(){
    super()
    this.state={
      navBlock: {
        position: 'fixed',
        marginLeft: '0px',
      }
    }

    this.onResize = this.onResize.bind(this)
  }

  onResize(width, height){
    let navBlock = this.state.navBlock
    navBlock.marginLeft = width + 'px'
    this.setState({
      navBlock: navBlock
    })
  }

  render(){
    return(
      <div style={headerStyle}>

      </div>
    )
  }
}

export default Header

Header.propTypes={
  onResize: PropTypes.func,
}
