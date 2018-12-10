import React from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import FullScreenDataCard from "./FullScreenDataCard"
import close from "../../../localImages/close.png"

const getImage = async(id) => {
  return await client.fetchImage(id)
}

const getComments = async(id) => {
  return await client.fetchImageComments(id)
}

const rootDiv = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100vw',
  maxHeight: '100vh',
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const imageItem = {
  maxWidth: '98vw',
  maxHeight: '98vh',
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const dataCardStyle={
  position: 'absolute',
  top: '0',
  left: '0',
  minWidth: '100%',
  maxWidth: '100%',
  width: 'auto',
  height: '100%',
  overflowY: 'scroll',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const xStyle = {
  maxWidth: '45px',
  minWidth: '35px',
  width: 'auto',
  height: 'auto',
  zIndex: '52'
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

class FullScreenImageItem extends React.Component{
  constructor(){
    super()
    this.state={
      imageDiv: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        cursor: 'pointer',
      },
      image: {},
      dataObject: {},
      commentsObject: {},
    }

    this.handleCloseFullScreen = this.handleCloseFullScreen.bind(this)
  }

  componentDidMount(){
    const imageData = async() => {
      return await getImage(this.props.thisItemId)
    }

    imageData()
      .then(thisImageData => {
        this.setState({
          image: thisImageData.images[0].url,
          dataObject: thisImageData
        })
      })

    getComments(this.props.thisItemId)
      .then(commentsObject => {
        this.setState({
          commentsObject: commentsObject
        })
      })
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
        <div style={this.state.imageDiv} onClick={this.handleCloseFullScreen}>
          <img style={imageItem}
               src={this.state.image}
               alt='chosenImage'
          />
        </div>
        <div style={dataCardStyle}>
          <FullScreenDataCard
            thisItem={this.props.thisItem}
            thisDataObject={this.state.dataObject}
            thisImagesComments={this.state.commentsObject}
          />
        </div>
      </div>
    )
  }
}

export default FullScreenImageItem

FullScreenImageItem.propTypes={
  thisItemId: PropTypes.number,
  thisItem: PropTypes.object,
  closeFullScreen: PropTypes.func,
}
