import React from 'react'
import client from '../client'
import ImageItem from "./imageCards/ImageItem"
import backgroundImage from '../backgroundimage.jpg'
import PropTypes from 'prop-types'
import FullScreenImageItem from "./fullScreenImage/FullScreenImageItem"

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
  marginTop: '50px',
}

const fullscreenBase = {
  position: 'absolute',
  zIndex: '30',
  top: '0',
  left: '0',
  width:'100%',
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const fetchImages = async (stream, page) => {
  return await client.fetchFeed(stream, page)
}

class ImagePage extends React.Component{
  constructor(){
    super()
    this.state= {
      images: [],
      page: 1,
      loading: false,
      initialLoad: false,
      fullscreen: false,
      feedStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        maxWidth: '1200px',
        minWidth: '1200px',
        width: 'auto',
        height: 'auto',
      },
      fullscreenData: {}
    }

    this.loadMoreImages = this.loadMoreImages.bind(this)
    this.makeFullScreen = this.makeFullScreen.bind(this)
    this.closeFullScreen = this.closeFullScreen.bind(this)
    this.setFullScreenImageData = this.setFullScreenImageData.bind(this)

    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop
        > document.documentElement.offsetHeight - 2000
        && this.state.loading === false
        && this.state.initialLoad === true
      ) {
        this.setState({
          loading: true,
        })
        this.loadMoreImages()
      }
    }
  }

  componentWillMount(){
    this.loadMoreImages()
  }

  loadMoreImages(){
    fetchImages(this.props.stream, this.state.page)
      .then(response => {
        const page = this.state.page + 1
        this.setState({
          images: this.state.images.concat([response]),
          page:  page,
          loading: false,
          initialLoad: true,
        })
      })
  }

  makeFullScreen(id){
    var feedStyle = {
      display: this.state.feedStyle.display,
      flexDirection: this.state.feedStyle.flexDirection,
      justifyContent: this.state.feedStyle.justifyContent,
      alignItems: this.state.feedStyle.alignItems,
      alignContent: this.state.feedStyle.alignContent,
      maxWidth: this.state.feedStyle.maxWidth,
      minWidth: this.state.feedStyle.minWidth,
      width: this.state.feedStyle.width,
      height: '100vh',
      overflow: 'hidden',
    }

    const scrollTop = document.documentElement.scrollTop
    const windowHeight = window.innerHeight

    this.setState({
      fullscreen: true,
      fullscreenId: id,
      loading: true,
      scrollTop: scrollTop,
      windowHeight: windowHeight,
      feedStyle: feedStyle
    })
  }

  closeFullScreen(){
    var feedStyle = {
      display: this.state.feedStyle.display,
      flexDirection: this.state.feedStyle.flexDirection,
      justifyContent: this.state.feedStyle.justifyContent,
      alignItems: this.state.feedStyle.alignItems,
      alignContent: this.state.feedStyle.alignContent,
      maxWidth: this.state.feedStyle.maxWidth,
      minWidth: this.state.feedStyle.minWidth,
      width: this.state.feedStyle.width,
      height: 'auto',
    }
    const setNewState = async () => {
      await this.setState({
        fullscreen: false,
        feedStyle: feedStyle,
        loading: false,
      })
    }

    setNewState()
      .then(() => {
        document.documentElement.scrollTop = this.state.scrollTop
        window.innerHeight = this.state.windowHeight
      })
  }

  setFullScreenImageData(dataObject){
    this.setState({
      fullscreenData: dataObject
    })
  }

  render(){
    return(
      <div style={centerRootDiv}>
        {this.state.fullscreen ?
          (
            <div style={fullscreenBase}>
              <FullScreenImageItem
                thisItem={this.state.fullscreenId}
                closeFullScreen={this.closeFullScreen}
                setFullScreenImageData={this.setFullScreenImageData}
              />
            </div>
          )
          :
          (<div style={{'display': 'none'}}/>)
        }
        <div style={background}/>
        {this.state.images.length > 0 ?
          (
            <div style={this.state.feedStyle}>
              {this.state.images.map((imagePages, i) => {
                return imagePages.photos.map((object, i) => <ImageItem key={i} thisItem={object} makeFullScreen={this.makeFullScreen}/>)})}
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

ImagePage.propTypes={
  stream: PropTypes.string,
}
