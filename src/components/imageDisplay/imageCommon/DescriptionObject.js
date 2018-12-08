import React from 'react'
import PropTypes from 'prop-types'

const descriptionStyle={
  minWidth: '600px',
  maxWidth: '820px',
  width: 'auto',
  height: 'auto',
  margin: '3%',
}

const DescriptionObject = (props) => {
  if(props.description !== undefined && props.description !== null && props.description.length > 0) {
    return <div style={descriptionStyle} dangerouslySetInnerHTML={{__html: props.description}}/>
  }else{
    return <div style={{'display': 'none'}}/>
  }
}

export default DescriptionObject

DescriptionObject.propTypes={
  description: PropTypes.string
}
