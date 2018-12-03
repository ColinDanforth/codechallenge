import React from 'react'
import PropTypes from 'prop-types'
import client from '../../client'
import FullScreenLeftDataCard from "./FullScreenLeftDataCard"

const getImage = async(id) => {
  return await client.fetchImage(id)
}


const imageItem = {
  maxWidth: '100vw',
  minHeight: '100vh',
  maxHeight: '100vh',
  width: 'auto',
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
        maxWidth: '100%',
        height: 'auto',
        width: 'auto',
        cursor: 'pointer',
        overflowY: 'scroll',
      },
      image: {},
      dataObject: {}
    }
  }

  componentDidMount(){
    const imageData = async() => {
      return await getImage(this.props.thisItem)
    }

    imageData()
      .then(thisImageData => {
        this.setState({
          image: thisImageData.images[0].url,
          dataObject: thisImageData
        })
      })
      .then(() => this.props.setFullScreenImageData(this.state.dataObject))
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
          <FullScreenLeftDataCard
            thisItem={this.state.dataObject}
            closeFullScreen={this.props.closeFullScreen}
          />
        </div>
      </div>
    )
  }
}

export default FullScreenImageItem

FullScreenImageItem.propTypes={
  thisItem: PropTypes.number,
  closeFullScreen: PropTypes.func,
  setFullScreenImageData: PropTypes.func,
}
