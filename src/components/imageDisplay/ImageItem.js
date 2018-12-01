import React from 'react'
import PropTypes from 'prop-types'

const imageDiv = {
  display: 'flex',
  justifyContent: 'center',
  width: '80%',
  height: 'auto',
  marginBottom: '1%',
  backgroundColor: '#000',
}

const imageHeight = {
  maxHeight: '280px',
  width: 'auto',
  height: 'auto'
}

class ImageItem extends React.Component{
  render(){
    return(
      <div style={imageDiv}>
        <img style={imageHeight} src={this.props.thisItem.images[0].url} alt="test"/>
      </div>
    )
  }
}

export default ImageItem

ImageItem.propTypes={
  thisItem: PropTypes.object
}
