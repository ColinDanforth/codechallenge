import React from 'react'
import PropTypes from 'prop-types'

const rootDiv={
  width: '30%',
  height: 'auto',
  marginTop: '100vh',
  zIndex: '31',
  backgroundColor: 'RGBA(50,50,50, 0.4)'
}

class FullScreenLeftDataCard extends React.Component{
  render(){
    return(
      <div style={rootDiv}>
        <p>{JSON.stringify(this.props.thisItem)}</p>
      </div>
    )
  }
}

export default FullScreenLeftDataCard

FullScreenLeftDataCard.propTypes= {
  thisItem: PropTypes.object
}
