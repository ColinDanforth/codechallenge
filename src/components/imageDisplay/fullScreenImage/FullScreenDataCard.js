import React from 'react'
import PropTypes from 'prop-types'
import close from '../../close.png'
import FullScreenComments from "./FullScreenComments"

const rootDiv={
  position: 'absolute',
  top: '0',
  left: '0',
  marginTop: '100vh',
  maxHeight: '500px',
  width: 'auto',
  height: 'auto',
  backgroundColor: 'RGBA(250,250,250, 0.4)',
  overflowY: 'scroll',
  zIndex: '31',
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
  top: '0',
  left: '0',
  backgroundColor: 'RGBA(250,250,250,0.6)',
  height: 'auto',
  width: 'auto',
}

class FullScreenDataCard extends React.Component{
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
        <FullScreenComments thisImagesComments={this.props.thisImagesComments}/>
      </div>
    )
  }
}

export default FullScreenDataCard

FullScreenDataCard.propTypes= {
  thisItemId: PropTypes.number,
  thisDataObject: PropTypes.object,
  thisImagesComments: PropTypes.object,
  closeFullScreen: PropTypes.func,
}
