import React from 'react'
import PropTypes from 'prop-types'
import DataCard from "./DataCard"

const rootCard = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  height: 'auto',
  marginBottom: '1%',
  backgroundColor: '#FFF',
  cursor: 'pointer'
}

const imageWrapper = {
  marginTop: '2%',
  marginBottom: '2%',
}

const imageObjectStyle = {
  maxWidth: '840px',
  minWidth: '840px',
  width: 'auto',
  height: 'auto',
}

class ImageItem extends React.Component{
  render(){
    return(
      <div style={rootCard}>
        {this.props.thisItem.name.length > 0 ?
          (<h1>{this.props.thisItem.name}</h1>)
            :
          (<div/>)
        }
        <div style={imageWrapper}>
          <img style={imageObjectStyle} src={this.props.thisItem.image_url} alt="test"/>
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
