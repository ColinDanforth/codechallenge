import React from 'react'
import PropTypes from 'prop-types'
import close from '../../../localImages/close.png'
import FullScreenComments from "./FullScreenComments"
import FullScreenUserCard from "./FullScreenUserCard"

const rootDiv={
  position: 'absolute',
  top: '0',
  left: '0',
  marginTop: '100vh',
  maxHeight: '300px',
  minWidth: '100vw',
  width: '100wh',
  height: 'auto',
  backgroundColor: 'RGBA(0,0,0,0.5)',
  overflowY: 'scroll',
  zIndex: '31',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
}

const xStyle = {
  maxWidth: '45px',
  minWidth: '35px',
  width: 'auto',
  height: 'auto',
  zIndex: '52'
}

const commentsBlock={
  flex: '1',
}

const closeWrapperDiv = {
  position: 'fixed',
  top: '3px',
  left: '3px',
  backgroundColor: 'RGB(150,150,150)',
  height: 'auto',
  width: 'auto',
  borderRadius: '20%',
  cursor: 'pointer',
  zIndex: '50',
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
        <div style={closeWrapperDiv} onClick={this.handleCloseFullScreen}>
          <img src={close} alt="close" style={xStyle}/>
        </div>
          <FullScreenUserCard thisItem={this.props.thisItem} dataObject={this.props.thisDataObject}/>
        <div style={commentsBlock}>
          <FullScreenComments thisImagesComments={this.props.thisImagesComments}/>
        </div>
      </div>
    )
  }
}

export default FullScreenDataCard

FullScreenDataCard.propTypes= {
  thisItem: PropTypes.object,
  thisDataObject: PropTypes.object,
  thisImagesComments: PropTypes.object,
  closeFullScreen: PropTypes.func,
}
