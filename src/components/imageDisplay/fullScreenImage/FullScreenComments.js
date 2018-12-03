import React from 'react'
import PropTypes from 'prop-types'

const rootCommentDiv = {
  maxWidth: '500px',
  width: 'auto',
}

const pStyleWrapped = {
  wordWrap: 'normal',
  maxWidth: '500px',
  width: 'auto',
}

class FullScreenComments extends React.Component{
  constructor(){
    super()
    this.state={
      comments: {},
    }
  }
  componentDidUpdate(){
    if(
      this.props.thisImagesComments.hasOwnProperty('comments')
      && this.state.comments !== this.props.thisImagesComments
    ){
      console.log('did it')
      this.setState({
        comments: this.props.thisImagesComments
      })
    }
  }

  render(){
    return(
      <div style={rootCommentDiv}>
        {this.state.comments.hasOwnProperty('comments') ?
          (this.state.comments.comments.map((comment, i) => {
            return(
              <div key={i}>
                <h3 sstyle={pStyleWrapped}>{comment.user.username}</h3>
                <p style={pStyleWrapped}>{comment.body}</p>
              </div>
            )
          }))
          :
          (<div style={{'display': 'none'}}/>)
        }
      </div>
    )
  }
}

export default FullScreenComments

FullScreenComments.propTypes={
  thisImagesComments: PropTypes.object,
}
