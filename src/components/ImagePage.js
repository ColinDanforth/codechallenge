import React from 'react'
import client from './client'

const popularImages = async (page) => {
  return await client.fetchPopular(page)
}

const imageHeight = {
  maxHeight: '280px',
  width: 'auto',
  height: 'auto'
}

class ImagePage extends React.Component{
  constructor(){
    super()
    this.state= {
      images: []
    }
  }

  componentDidMount(){
    popularImages(1)
      .then(response => {
        this.setState({
          images: [response]
        })
      })
  }

  render(){
    return(
      <div>
        {this.state.images.length > 0 ?
          (
            <div>
              {this.state.images[0].photos.map((object, i) => <img style={imageHeight} key={i} src={object.images[0].url} alt="test"/>)}
            </div>
          )
          :
          (<p>but why</p>)
        }
      </div>
    )
  }
}

export default ImagePage
