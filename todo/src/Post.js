import React, { Component } from 'react'
import posts from './posts'

// let posts = [
//     { title: 'Intro',
//     author: 'Ebag',
//     body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo adipisci voluptas animi earum voluptates repudiandae ipsa qui, deleniti, eligendi quibusdam doloremque at molestias quidem! Neque qui distinctio quos incidunt."
//     },
//     { title: "Second",
//       author: 'Gabe',
//       body: "This is the second post Boy"}
// ]

export default class Post extends Component{
    constructor(){
        super()
        this.state = {
           posts: posts
        }
    }
    render(){
  return (
    <div className="Todo">

{this.state.posts.map(posts => {
    if(posts.completed !== true){
    return(
        <div className="Posts" key={posts.title}>
        <h1>Still needs done:</h1>
            <h1>{posts.title}</h1>
        <h2>By: {posts.author}</h2>
        <div>{posts.body}</div>
        <div>{posts.compelted}</div>
    </div>)
    }
    else{return(
    <div>
        Completed:
        <h2>{posts.title}</h2>
        
        </div>)}
})}
      {/* <h1 style={{backgroundColor: 'green'}}>Post 1: {posts.title}</h1>
      <p>By: {this.state.author}</p>
      <div>{this.state.body}</div>

      <h1 style={{backgroundColor: 'red'}}>Post 2: {this.state.title}</h1>
    </div> */}
    </div>)}}
