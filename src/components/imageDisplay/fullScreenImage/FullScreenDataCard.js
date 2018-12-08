import React from 'react'
import PropTypes from 'prop-types'
import close from '../../localImges/close.png'
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
  backgroundColor: 'RGBA(256,256,256, 0.6)',
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
  cursor: 'pointer',
}

const commentsBlock={
  flex: '1',
}

const closeWrapperDiv = {
  position: 'fixed',
  top: '0',
  left: '0',
  backgroundColor: 'RGBA(256,256,256,1)',
  height: 'auto',
  width: 'auto',
  borderRadius: '20%',
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
    console.log(JSON.stringify(this.props.thisImagesComments))
    return(
      <div style={rootDiv}>
        <div style={closeWrapperDiv}>
          <img src={close} alt="close" style={xStyle} onClick={this.handleCloseFullScreen}/>
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
  thisItemId: PropTypes.number,
  thisItem: PropTypes.object,
  thisDataObject: PropTypes.object,
  thisImagesComments: PropTypes.object,
  closeFullScreen: PropTypes.func,
}
