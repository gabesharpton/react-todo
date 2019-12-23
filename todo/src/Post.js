import React, { Component } from 'react'

export default class Post extends Component{
    // let styles = {
    //     backgroundColor: 'green'
    // }
    render(){
  return (
    <div className="Post">
        
      <h1 style={{backgroundColor: 'green'}}>This is a {this.props.title}</h1>
      <p>By: {this.props.author}</p>
      <div>{this.props.body}</div>

      <h1 style={{backgroundColor: 'red'}}>This is post 2</h1>
    </div>
  );
}
}