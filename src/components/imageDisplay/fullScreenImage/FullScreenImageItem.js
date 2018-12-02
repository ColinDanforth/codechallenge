import React from 'react'
import PropTypes from 'prop-types'
import client from '../../client'

const getImage = async(id) => {
  return await client.fetchImage(id)
}

class FullScreenImageItem extends React.Component{
  constructor(){
    super()
    this.state={
      imageStyle: {
        flex: '1',
        zIndex: '-1',
      }
    }

  }

  componentDidMount(){
    const imageData = async() => {
      return await getImage(this.props.thisItem)
    }

    imageData()
      .then(thisImageData => {
        console.log(thisImageData)
        let imageStyle = {}
        imageStyle.flex = this.state.imageStyle.flex
        imageStyle.zIndex = this.state.imageStyle.zIndex
        imageStyle.backgroundImage = `url(${thisImageData.images[0].url})`
        imageStyle.backgroundPosition= 'center'
        imageStyle.backgroundSize= 'cover'
        imageStyle.backgroundRepeat= 'no-repeat'
        imageStyle.backgroundSize = '100%'

        this.setState({
          imageStyle: imageStyle
        })
      })
  }

  render(){
    return(
      <div style={this.state.imageStyle}/>
    )
  }
}

export default FullScreenImageItem

FullScreenImageItem.propTypes={
  thisItem: PropTypes.string
}
