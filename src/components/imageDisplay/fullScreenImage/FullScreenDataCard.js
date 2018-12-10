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
  minWidth: '100%',
  maxWidth: '100%',
  width: 'auto',
  height: 'auto',
  backgroundColor: 'RGBA(0,0,0,0.5)',
  overflowY: 'scroll',
  zIndex: '31',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'flex-start',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const commentsBlock={
  marginLeft: '2%',
  marginRight: '2%',
  marginTop: '1%',
  maxWidth: '55%',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const userCardBlock={
  marginTop: '1%',
  marginLeft: '2%',
  marginRight: '2%',
  maxWidth: '55%',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const FullScreenDataCard = (props) => {
  return(
    <div style={rootDiv}>
      <div style={userCardBlock}>
        <FullScreenUserCard thisItem={props.thisItem} dataObject={props.thisDataObject}/>
      </div>
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
