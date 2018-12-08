import React from 'react'
import PropTypes from 'prop-types'
import DescriptionObject from "./DescriptionObject"

const rootTitleStyle={
  display: 'flex',
  flexDirection: 'Column',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: '600px',
  width: 'auto',
  height: 'auto',
  backgroundColor: '#FFF',
  borderBottom: 'inset',
}

const Title = (props) => {
  if(props.name !== undefined && props.name !== null && props.name.length > 0) {
    return (
      <div style={rootTitleStyle}>
        <h1>{props.name}</h1>
        <DescriptionObject description={props.description}/>
      </div>
    )
  } else {
    return (
      <div style={rootTitleStyle}>
        <h1>untitled</h1>
        <DescriptionObject description={props.description}/>
      </div>
    )
  }
}

export default Title

Title.propTypes={
  name: PropTypes.string,
  description: PropTypes.string,

}
