import React from 'react'
import PropTypes from 'prop-types'
import DataCard from "./DataCard"

const rootCard = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80%',
  height: 'auto',
  marginBottom: '1%',
  backgroundColor: '#000',
}

const imageWrapper = {
  marginTop: '2%',
  marginBottom: '2%',
}

const imageHeight = {
  maxHeight: '280px',
  width: 'auto',
  height: 'auto',
}

class ImageItem extends React.Component{
  render(){
    return(
      <div style={rootCard}>
        <div style={imageWrapper}>
          <img style={imageHeight} src={this.props.thisItem.images[0].url} alt="test"/>
        </div>
        <DataCard dataObject={this.props.thisItem}/>
      </div>
    )
  }
}

export default ImageItem

ImageItem.propTypes={
  thisItem: PropTypes.object
}
