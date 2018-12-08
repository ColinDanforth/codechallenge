import React from 'react'
import LensDetailsObject from "./LensDetailsObject"

const userCardBackground={
  marginTop: '2%',
  backgroundColor: 'RGBA(256,256,256,1)',
  borderBottom:'inset',
}

const textStyle={
  marginTop: '1%',
  marginLeft: '2%',
  marginRight: '2%',
  marginBottom: '1%',
}

const isThereLensInfo = (data) => {
  if(data.hasOwnProperty('lens_info') && typeof data.lens_info === 'object' && data.lens_info.hasOwnProperty('friendly_name')> 0){
    return <LensDetailsObject lensInfo={data.lens_info}/>
  } else if(data.hasOwnProperty('lens') && data.lens !== null && data.lens.length > 0){
    return <p style={textStyle}>Lens: {data.lens}</p>
  }else{
    return <p style={textStyle}>Lens Info: No details Submitted</p>
  }
}

const cameraName = (data) => {
  if (data.hasOwnProperty('camera') && data.camera !== null && data.camera.length > 0) {
    return <p style={textStyle}>Camera: {data.camera}</p>
  }
}
const shutterSpeed = (data) => {
  if (data.hasOwnProperty('shutter_speed') && data.shutter_speed !== null && data.shutter_speed.length > 0) {
    return <p style={textStyle}>Shutter Speed: {data.shutter_speed}</p>
  }
}

const aperture = (data) => {
  if(data.hasOwnProperty('aperture') && data.aperture !== null && data.aperture.length > 0){
    return <p style={textStyle}>Aperture: {data.aperture}</p>
  }
}

const CameraDetailDataCard = (props) => {
  return(
    <div style={userCardBackground}>
      {cameraName(props.dataObject)}
      {shutterSpeed(props.dataObject)}
      {aperture(props.dataObject)}
      {isThereLensInfo(props.dataObject)}
    </div>
  )
}

export default CameraDetailDataCard
