import React from 'react'
import PropTypes from 'prop-types'
import UserDataCard from "../../imageCommon/UserDataCard"
import CameraDetailDataCard from "../../imageCommon/CameraDetailsDataCard"
import Title from "../../imageCommon/Title"

const rootDiv={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  height: 'auto',
  marginTop: '1%',
  marginRight: '2%',
  marginLeft: '2%',
}

const dataCardStyle={
  maxWidth: '820px',
  minWidth: '820px',
  width: 'auto',
  height:'auto',
}

const cameraDetailStyle={
  maxWidth: '820px',
  minWidth: '820px',
  width: 'auto',
  height:'auto',
  marginBottom: '4%',
}

const titleDiv = {
  maxWidth: '100vw',
  width: 'auto',
  marginBottom: '2%'
}

const FullScreenUserCard = (props)  => {
  return(
    <div style={rootDiv}>
      <div style={titleDiv}>
        <Title
          name={props.dataObject.name}
          description={props.thisItem.description}
        />
      </div>
      <div style={dataCardStyle}>
        <UserDataCard dataObject={props.dataObject}/>
      </div>
      <div style={cameraDetailStyle}>
        <CameraDetailDataCard dataObject={props.dataObject}/>
      </div>
    </div>
  )
}

export default FullScreenUserCard

FullScreenUserCard.propTypes={
  dataObject: PropTypes.object,
  thisItem: PropTypes.object,
}
