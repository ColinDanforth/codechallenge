import React from 'react'

const textStyle={
  marginLeft: '30px',
  marginRight: '30px',
  marginBottom: '15px',
}

const innerTextStyle={
  marginLeft: '60px',
  marginRight: '30px',
  marginBottom: '15px',
}

const splitFeatures = (features) => {
  if(features !== null) {
    const lines = features.split('<br/>')
    return lines
  }
  return []
}

const LensDetailsObject = (props) => {
  return(
    <div>
      <p style={textStyle}>
        Lens Info:
      </p>
      <p style={innerTextStyle}>Name: {props.lensInfo.friendly_name}</p>
      {splitFeatures(props.lensInfo.features).map((feature, i) => {
        if (i === 0) {
          return <p key={i} style={innerTextStyle}>Feature: {feature}</p>
        } else {
          return <p key={i} style={innerTextStyle}>{feature}</p>
        }
      })}
    </div>
  )
}

export default LensDetailsObject
