import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Post from './Post'

let post = {
    title: 'Intro',
    author: 'Ebag',
    body: "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus illo adipisci voluptas animi earum voluptates repudiandae ipsa qui, deleniti, eligendi quibusdam doloremque at molestias quidem! Neque qui distinctio quos incidunt."
}

ReactDOM.render(<Post title={post.title} author={post.author} body={post.body} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
