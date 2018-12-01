import React from 'react'
import PropTypes from 'prop-types'

const rootDataCardStyle={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  maxWidth: '500px',
  minWidth: '200px',
  backgroundColor: '#FFF',
  margin: '2%',
  borderTop: 'inset',
  borderLeft: 'inset',
  borderBottom: 'inset',
}

const textBlock = {
  maxWidth: '600px',
  minWidth: '400px',
  marginLeft: '15px',
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
  marginLeft: '1%',
}

class DataCard extends React.Component{
  render(){
    return(
      <div style={rootDataCardStyle}>
        <img style={imageHeight} src={this.props.dataObject.user.avatars.default.https} alt="avatar"/>
        <div style={textBlock}>
        <p style={pStyle}>Photographer: {this.props.dataObject.user.fullname}</p>
        <p style={pStyle}>Rating: {this.props.dataObject.rating}%</p>
        </div>
      </div>
    )
  }
}

export default DataCard

DataCard.propTypes={
  dataObject: PropTypes.object
}
