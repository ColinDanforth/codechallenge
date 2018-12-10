import React from 'react'
import PropTypes from 'prop-types'
import UserDataCard from "../../imageCommon/UserDataCard"
import CameraDetailDataCard from "../../imageCommon/CameraDetailsDataCard"
import Title from "../../imageCommon/Title"

const rootDiv={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const dataCardStyle={
  width: 'auto',
  height:'auto',
  marginBottom: '2%',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const cameraDetailStyle={
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
  width: 'auto',
  height:'auto',
  marginBottom: '2%',
}

const titleDiv = {
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
  width: 'auto',
  height: 'auto',
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
        <UserDataCard dataObject={props.dataObject} thisUserData={props.thisItem} showMoreInfo={true}/>
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
