import React from 'react'
import PropTypes from 'prop-types'

const rootDataCardStyle={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  width:'70%',
  backgroundColor: '#FFF',
  margin: '2%'
}

class DataCard extends React.Component{
  render(){
    return(
      <div style={rootDataCardStyle}>
        <p>Photographer: {this.props.dataObject.user.fullname}</p>
        <img src={this.props.dataObject.user.avatars.tiny.https} alt="avatar"/>
        <p>{this.props.dataObject.votes_count}</p>
      </div>
    )
  }
}

export default DataCard

DataCard.propTypes={
  dataObject: PropTypes.object
}
