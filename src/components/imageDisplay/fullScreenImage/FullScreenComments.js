import React from 'react'
import PropTypes from 'prop-types'

const rootCommentDiv = {
  maxWidth: '500px',
  width: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: 'auto',
  marginTop: '3%',
  marginBottom: '3%',
  backgroundColor: 'RGBA(256,256,256,0.9)',
  border: 'inset'
}

const pStyleWrapped = {
  wordWrap: 'normal',
  maxWidth: '500px',
  width: 'auto',
}

const headerAndDateBlock = {
  display: 'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginLeft: '1%',
  marginRight: '1%',
}

const pDivStyle ={
  marginLeft: '2%',
  marginRight: '2%',
  width: 'auto',
}

const headerStyleWrapped = {
  wordWrap: 'normal',
  maxWidth: '500px',
  width: 'auto',
  fontWeight: 'bold',
}

const commentsTitle = {
  alignSelf: 'center',
  fontSize: '1.3em',
  fontWeight: 'bold',
}

const commentBlock = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '2%',
  border: 'outset',
  background: 'RGBA(256,256,256,1)'
}

const noCommentsMessage={
  margin: '3%',
  alignSelf: 'center',
}

class FullScreenComments extends React.Component{
  constructor(){
    super()
    this.state={
      comments: {},
    }

    this.commentsBlock = this.commentsBlock.bind(this)
  }

  componentDidUpdate(){
    if(
      this.props.thisImagesComments.hasOwnProperty('comments')
      && this.state.comments !== this.props.thisImagesComments
    ){
      this.setState({
        comments: this.props.thisImagesComments
      })
    }
  }

  commentsBlock(){
    if(this.state.comments.hasOwnProperty('comments') && this.state.comments.comments.length > 0) {
      return (this.state.comments.comments.map((comment, i) => {
        return (
          <div style={commentBlock} key={i}>
            <div style={headerAndDateBlock}>
              <p style={headerStyleWrapped}>{comment.user.username}</p>
              <p>{comment.created_at}</p>
            </div>
            <div style={pDivStyle}>
              <p style={pStyleWrapped}>{comment.body}</p>
            </div>
          </div>
        )
      }))
    } else {
      return <p style={noCommentsMessage}>No comments yet, be the first to comment on this Great Image!</p>
    }
  }

  render(){
    return(
      <div style={rootCommentDiv}>
        <p style={commentsTitle}>User Comments</p>
        {this.commentsBlock()}
      </div>
    )
  }
}

export default FullScreenComments

FullScreenComments.propTypes={
  thisImagesComments: PropTypes.object,
}
