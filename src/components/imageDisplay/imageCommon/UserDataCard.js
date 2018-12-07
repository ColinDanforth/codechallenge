import React from 'react'
import PropTypes from 'prop-types'
import like from '../../localImges/like.png'

const rootDataCardStyle={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  height: 'auto',
  backgroundColor: '#FFF',
  borderTop: 'inset',
  borderLeft: 'inset',
  borderBottom: 'inset'
}

const textBlock = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  maxWidth: '700px',
  minWidth: '700px',
  marginLeft: '10px',
  width: 'auto',
  height: 'auto',
}

const imageHeight = {
  maxHeight: '100px',
  width: 'auto',
  height: 'auto',
  margin: '0.3%',
}

const pStyle = {
  maxWidth: '400px',
  minWidth: '400px',
  width: 'auto',
  height: 'auto',
}

const likeStyle = {
  maxWidth: '40px',
  width: 'auto',
  height: 'auto',
  marginTop: '5px',
  marginRight: '10px',
}

const UserDataCard = (props) =>{
  if(props.dataObject.hasOwnProperty('user')) {
    return (
      <div style={rootDataCardStyle}>
        <img style={imageHeight} src={props.dataObject.user.avatars.default.https} alt="avatar"/>
        <div style={textBlock}>
          <div>
            <p style={pStyle}>Photographer: {props.dataObject.user.fullname}</p>
            <p style={pStyle}>Rating: {props.dataObject.rating}%</p>
          </div>
          <div>
            <img style={likeStyle} src={like} alt='like'/>
          </div>
        </div>
      </div>
    )
  }else{
    return <div style={{'display': 'none'}}/>
  }
}

export default UserDataCard

UserDataCard.propTypes={
  dataObject: PropTypes.object
}
