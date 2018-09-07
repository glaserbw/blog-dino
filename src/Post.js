import React, { Component } from 'react';
import './App.css';

const post = {
      title: "dinosaurs are awesome",
      author: "Stealthy Stegosaurus",
      body: "Check out this body property!",
      comments: ["First!", "Great post", "Hire this author now!"]
} 

class Post extends Component {
  render() {
    return (
      <div className="App">
        <h1>{post.title}</h1>
        <h2>Written by: {post.author}</h2>
        <p>{post.body}</p>
        <h3>Comments:</h3>
        <p>{post.comments[0]}</p>
      </div>
    );
  }
}

export default Post;