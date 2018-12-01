import React from 'react'
import client from '../client'
import ImageItem from "./imageCards/ImageItem"
import backgroundImage from '../backgroundimage.jpg'

const background = {
  position: 'fixed',
  zIndex: '-2',
  top: '0px',
  left: '0px',
  width: '100%',
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

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
  maxWidth: '1200px',
  minWidth: '1200px',
  width: 'auto',
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
        <div style={background}/>
        {this.state.images.length > 0 ?
          (
            <div style={feedStyle}>
              {this.state.images.map((imagePages, i) => {
                return imagePages.photos.map((object, i) => <ImageItem key={i} thisItem={object}/>)})}
            </div>
          )
          :
          (<div style={{'display': 'none'}}/>)
        }
      </div>
    )
  }
}

export default ImagePage
