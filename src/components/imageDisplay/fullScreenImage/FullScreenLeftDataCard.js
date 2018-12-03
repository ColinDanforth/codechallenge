import React from 'react'
import PropTypes from 'prop-types'
import close from '../../close.png'

const rootDiv={
  position: 'absolute',
  top: '0',
  left: '0',
  marginTop: '100vh',
  maxWidth: '500px',
  maxHeight: '500px',
  width: 'auto',
  height: 'auto',
  backgroundColor: 'RGBA(250,250,250, 0.4)',
  overflowY: 'scroll',
  zIndex: '31',
}

const textStyle = {
  wordWrap: 'normal',
  maxWidth: '300px',
  width: 'auto',
}

const xStyle = {
  maxWidth: '45px',
  minWidth: '35px',
  width: 'auto',
  height: 'auto',
  cursor: 'pointer',
}

const closeWrapperDiv = {
  position: 'fixed',
  top: '3px',
  left: '3px',
  backgroundColor: 'RGBA(250,250,250,0.6)',
  height: 'auto',
  width: 'auto',
}

class FullScreenLeftDataCard extends React.Component{
  constructor(){
    super()

    this.handleCloseFullScreen = this.handleCloseFullScreen.bind(this)
  }
  handleCloseFullScreen(){
    this.props.closeFullScreen()
  }

  render(){
    return(
      <div style={rootDiv}>
        <div style={closeWrapperDiv}>
          <img src={close} alt="close" style={xStyle} onClick={this.handleCloseFullScreen}/>
        </div>
        <p style={textStyle}>{JSON.stringify(this.props.thisItem)}</p>
      </div>
    )
  }
}

export default FullScreenLeftDataCard

FullScreenLeftDataCard.propTypes= {
  thisItem: PropTypes.object,
  closeFullScreen: PropTypes.func,
}
