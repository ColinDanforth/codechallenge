import React from 'react'
import PropTypes from 'prop-types'
import FullScreenComments from "./FullScreenComments"
import FullScreenUserCard from "./FullScreenUserCard"

const rootDiv={
  position: 'absolute',
  top: '0',
  left: '0',
  marginTop: '100vh',
  maxHeight: '300px',
  minWidth: '100vw',
  width: '100wh',
  height: 'auto',
  backgroundColor: 'RGBA(0,0,0,0.5)',
  overflowY: 'scroll',
  zIndex: '31',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
}

const commentsBlock={
  flex: '1',
}

const FullScreenDataCard = (props) => {
  return(
    <div style={rootDiv}>
      <FullScreenUserCard thisItem={props.thisItem} dataObject={props.thisDataObject}/>
      <div style={commentsBlock}>
        <FullScreenComments thisImagesComments={props.thisImagesComments}/>
      </div>
    </div>
  )
}

export default FullScreenDataCard

FullScreenDataCard.propTypes= {
  thisItem: PropTypes.object,
  thisDataObject: PropTypes.object,
  thisImagesComments: PropTypes.object,
}
