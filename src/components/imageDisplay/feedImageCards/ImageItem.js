import React from 'react'
import PropTypes from 'prop-types'
import UserDataCard from "../imageCommon/UserDataCard"
import Title from "../imageCommon/Title"

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

const titleDiv = {
  maxWidth: '100vw',
  width: 'auto',
  marginTop: '2%',
}

const dataCardPosition = {
  maxWidth: '820px',
  minWidth: '820px',
  maxHeight:'200',
  minHeight: '100px',
  width: 'auto',
  height:'auto',
  margin: '2%',
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

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.props.makeFullScreen(this.props.thisItem.id, this.props.thisItem)
  }

  render(){
    return(
      <div style={rootCard}>
        {this.props.thisItem.name.length > 0 ?
          (
            <div style={titleDiv}>
              <Title
                name={this.props.thisItem.name}
                description=''
              />
            </div>
          )
            :
          (<div/>)
        }
        <div style={imageWrapper}>
          <img style={imageObjectStyle} src={this.props.thisItem.image_url} alt="test" onClick={this.handleClick}/>
        </div>
        <div style={dataCardPosition}>
          <UserDataCard dataObject={this.props.thisItem}/>
        </div>
      </div>
    )
  }
}

export default ImageItem

ImageItem.propTypes={
  thisItem: PropTypes.object,
  makeFullScreen: PropTypes.func,
}
