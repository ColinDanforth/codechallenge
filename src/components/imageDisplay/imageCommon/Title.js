import React from 'react'
import PropTypes from 'prop-types'

const rootTitleStyle={
  display: 'flex',
  flexDirection: 'Column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '600px',
  width: 'auto',
  height: 'auto',
  backgroundColor: '#FFF',
  border: 'inset',
}

const Title = (props) => {
  return(
    <div style={rootTitleStyle}>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Title

Title.propTypes={
  name: PropTypes.string,
}
