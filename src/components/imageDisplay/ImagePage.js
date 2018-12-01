import React from 'react'
import client from '../client'

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
      images: [],
      page: 1
    }

    this.loadMoreImages = this.loadMoreImages.bind(this)

    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        this.loadMoreImages()
      }
    }
  }

  componentWillMount(){
    this.loadMoreImages()
  }

  loadMoreImages(){
    popularImages(this.state.page)
      .then(response => {
        const page = this.state.page + 1
        this.setState({
          images: this.state.images.concat([response]),
          page:  page,
        })
      })
  }


  render(){
    return(
      <div>
        {this.state.images.length > 0 ?
          (
            <div>
              {this.state.images.map((imagePages, i) => {
                return imagePages.photos.map((object, i) => <img style={imageHeight} key={i} src={object.images[0].url} alt="test"/>)})}
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
