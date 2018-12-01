import React from 'react'
import PropTypes from 'prop-types'
import like from '../../like.png'

const rootDataCardStyle={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  maxWidth: '820px',
  minWidth: '820px',
  backgroundColor: '#FFF',
  margin: '2%',
  borderTop: 'inset',
  borderLeft: 'inset',
  borderBottom: 'inset',
}

const textBlock = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '700px',
  minWidth: '700px',
  marginLeft: '10px',
  width: 'auto',
  height: 'auto',
}

const imageHeight = {
  maxHeight: '100px',
  width: 'auto',
  height: 'auto',
  margin: '0.3%',
}

const pStyle = {
  maxWidth: '400px',
  minWidth: '400px',
  width: 'auto',
  height: 'auto',
}

const likeStyle = {
  maxWidth: '40px',
  width: 'auto',
  height: 'auto',
  marginTop: '5px',
  marginRight: '10px',
}

class DataCard extends React.Component{
  render(){
    return(
      <div style={rootDataCardStyle}>
        <img style={imageHeight} src={this.props.dataObject.user.avatars.default.https} alt="avatar"/>
        <div style={textBlock}>
          <div>
            <p style={pStyle}>Photographer: {this.props.dataObject.user.fullname}</p>
            <p style={pStyle}>Rating: {this.props.dataObject.rating}%</p>
          </div>
          <div>
            <img style={likeStyle} src={like} alt='like'/>
          </div>
        </div>
      </div>
    )
  }
}

export default DataCard

DataCard.propTypes={
  dataObject: PropTypes.object
}
