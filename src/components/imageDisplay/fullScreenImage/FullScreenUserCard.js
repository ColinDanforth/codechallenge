import React from 'react'
import UserDataCard from "../imageCommon/UserDataCard"
import CameraDetailDataCard from "../imageCommon/CameraDetailsDataCard"
import Title from "../imageCommon/Title"

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

const titleDiv = {
  maxWidth: '100vw',
  width: 'auto',
  marginBottom: '2%'
}

const FullScreenUserCard = (props)  => {
  return(
    <div style={rootDiv}>
      <div style={titleDiv}>
        <Title name={props.dataObject.name}/>
      </div>
      <div style={dataCardStyle}>
        <UserDataCard dataObject={props.dataObject}/>
      </div>
      <CameraDetailDataCard dataObject={props.dataObject}/>
    </div>
  )
}

export default FullScreenUserCard
