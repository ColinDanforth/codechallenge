import React from 'react'
import client from './client'

class ImagePage extends React.Component{
  constructor(){
    super()
    this.state={
      images: []
    }
  }

  componentWillMount(){
    const fetchPopular = client.fetchPopular()
    this.setState={
      images: fetchPopular
    }
  }

  render(){
    return(
      <div>
        <p>{this.state.images}</p>
      </div>
    )
  }
}

export default ImagePage
