import React from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import FullScreenDataCard from "./FullScreenDataCard"

const getImage = async(id) => {
  return await client.fetchImage(id)
}

const getComments = async(id) => {
  return await client.fetchImageComments(id)
}

const imageItem = {
  maxWidth: '100vw',
  maxHeight: '100vh',
  width: 'auto',
  height: 'auto',
}

const dataCardStyle={
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
  height: '100vh',
  overflowY: 'scroll',
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


  render(){
    return(
      <div>
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
            closeFullScreen={this.props.closeFullScreen}
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
