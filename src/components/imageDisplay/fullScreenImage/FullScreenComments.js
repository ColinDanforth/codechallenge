import React from 'react'
import PropTypes from 'prop-types'

const rootCommentDiv = {
  maxWidth: '100%',
  width: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 'auto',
  backgroundColor: 'RGB(256,256,256)',
  borderBottom: 'inset',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const pStyleWrapped = {
  wordWrap: 'normal',
  maxWidth: '100%',
  width: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const headerAndDateBlock = {
  display: 'flex',
  flexDirection:'row',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginLeft: '1%',
  marginRight: '1%',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const pDivStyle ={
  marginLeft: '2%',
  marginRight: '2%',
  width: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const headerStyleWrapped = {
  wordWrap: 'normal',
  maxWidth: '90%',
  width: 'auto',
  fontWeight: 'bold',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const commentsTitle = {
  alignSelf: 'center',
  fontSize: '1.3em',
  fontWeight: 'bold',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const commentBlock = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: '2%',
  border: 'outset',
  background: 'RGBA(256,256,256,1)',
  maxWidth: '96%',
  minWidth: '96%',
  width: 'auto',
  height: 'auto',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

const noCommentsMessage={
  margin: '3%',
  alignSelf: 'center',
  flex: "none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]",
}

class FullScreenComments extends React.Component{
  constructor(){
    super()
    this.state={
      comments: {},
    }

    this.commentsBlock = this.commentsBlock.bind(this)
  }

  componentWillMount(){
    this.setState({
      comments: this.props.thisImagesComments
    })
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
