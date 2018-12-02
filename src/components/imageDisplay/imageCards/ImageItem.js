import React from 'react'
import PropTypes from 'prop-types'
import DataCard from "./DataCard"
import {Redirect} from 'react-router-dom'

const rootCard = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '70%',
  height: 'auto',
  marginBottom: '1%',
  backgroundColor: '#FFF',
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
  cursor: 'pointer',
}

class ImageItem extends React.Component{
  constructor(){
    super()
    this.state= {
      redirect: false
    }

    this.makeFullScreen = this.makeFullScreen.bind(this)
  }

  makeFullScreen(){
    this.setState({
      redirect: true
    })
  }

  render(){
    if (this.state.redirect) {
      let url = '/fullscreen/' + this.props.thisItem.id
      return <Redirect push to={url} />;
    }
    return(
      <div style={rootCard}>
        {this.props.thisItem.name.length > 0 ?
          (<h1>{this.props.thisItem.name}</h1>)
            :
          (<div/>)
        }
        <div style={imageWrapper}>
          <img style={imageObjectStyle} src={this.props.thisItem.image_url} alt="test" onClick={this.makeFullScreen}/>
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
