import React from 'react'
import PropTypes from 'prop-types'

const descriptionStyle={
  width: '90%',
  height: 'auto',
  margin: '3%',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
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
