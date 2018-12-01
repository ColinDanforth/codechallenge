import React from 'react'
import client from '../client'
import ImageItem from "./ImageItem"

const centerRootDiv={
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: 'auto',
}

const feedStyle={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  width: '70%',
  height: 'auto',
}

const popularImages = async (page) => {
  return await client.fetchPopular(page)
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
      <div style={centerRootDiv}>
        {this.state.images.length > 0 ?
          (
            <div style={feedStyle}>
              {this.state.images.map((imagePages, i) => {
                return imagePages.photos.map((object, i) => <ImageItem key={i} thisItem={object}/>)})}
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
