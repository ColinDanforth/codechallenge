import React from 'react'
import PropTypes from 'prop-types'
import like from '../../localImages/like.png'

const rootDivStyle={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minWidth: '100%',
  width: 'auto',
  height: 'auto',
  backgroundColor: '#FFF',
  borderBottom: 'inset',
  borderRight: 'inset',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const rootDataCardStyle={
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  minWidth: '100%',
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const extendedDataCardStyle={
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'left',
  minWidth: '100%',
  width: 'auto',
  height: 'auto',
  marginTop: '1%',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const dataBlock = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft: '1%',
  minWidth: '78%',
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const textBlock = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  minWidth: '85%',
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const imageHeight = {
  maxHeight: '120px',
  width: 'auto',
  height: 'auto',
  margin: '0.3%',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const pStyle = {
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const likeStyle = {
  maxWidth: '40px',
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const likePositionDiv = {
  alignSelf: 'right',
  maxHeight: '40px',
  width: 'auto',
  height: 'auto',
  marginTop: '5px',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const textStyle={
  marginTop: '1%',
  marginLeft: '2%',
  marginRight: '2%',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const country = (data) => {
  let country = ''
  let city = ''
  if (data.user.hasOwnProperty('country') && data.user.country !== null && data.user.country.length > 0) {
    country= data.user.country
  }
  if(data.user.hasOwnProperty('city') && data.user.city !== null && data.user.city.length > 0){
    city=data.user.city
  }
  if(city.length > 0 && country.length > 0){
    return <p style={textStyle}>Location: {city}, {country}</p>
  }
}

//planned to implement comments but most extended user profiles don't seem to include contacts.
// const contacts = (data) => {
//   if (data.user.hasOwnProperty('contacts')) {
//     const contactValues = Object.entries(data.user.contacts)
//   }
// }

const UserDataCard = (props) => {
  if (props.dataObject.hasOwnProperty('user') && !props.showMoreInfo) {
    return (
      <div style={rootDivStyle}>
        <div style={rootDataCardStyle}>
          <img style={imageHeight} src={props.dataObject.user.avatars.default.https} alt="avatar"/>
          <div style={dataBlock}>
            <div style={textBlock}>
              <p style={pStyle}>Photographer: {props.dataObject.user.fullname}</p>
              <p style={pStyle}>Rating: {props.dataObject.rating}%</p>
            </div>
            <div style={likePositionDiv}>
              <img style={likeStyle} src={like} alt='like'/>
            </div>
          </div>
        </div>
      </div>
    )
  } if(props.dataObject.hasOwnProperty('user') && props.showMoreInfo){
    return (
      <div style={rootDivStyle}>
        <div style={rootDataCardStyle}>
          <img style={imageHeight} src={props.dataObject.user.avatars.default.https} alt="avatar"/>
          <div style={dataBlock}>
            <div style={textBlock}>
              <p style={pStyle}>Photographer: {props.dataObject.user.fullname}</p>
              <p style={pStyle}>Rating: {props.dataObject.rating}%</p>
            </div>
            <div style={likePositionDiv}>
              <img style={likeStyle} src={like} alt='like'/>
            </div>
          </div>
        </div>
        <div style={extendedDataCardStyle}>
          {country(props.thisUserData)}
        </div>
      </div>
    )
  }else{
    return <div style={{'display': 'none'}}/>
  }
}

export default UserDataCard

UserDataCard.propTypes={
  dataObject: PropTypes.object,
  thisUserData: PropTypes.object,
  showMoreInfo: PropTypes.bool,
}
