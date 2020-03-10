import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';

import './App.css';

import NavBar from './components/NavBar';
import MainContainer from './components/MainContainer';


class App extends Component {
  state = {
    navBarOpen: false,
    mainContainerOpen: false,
    blogPosts: [],
    blogPostCurrent: {}
  }
  
  toggleNav = () => {
    this.setState({navBarOpen: !this.state.navBarOpen});
  }

  toggleMainContainer = (path) => {
    
    if(path !== '/') {
      this.setState({mainContainerOpen: true});
    }
    
    if(path==='/blog') {
      axios.get('/api/blogposts')
      .then(res => this.setState({blogPosts: [...res.data]}));
    };
  }

  toggleCurrentBlogPost = (id) => {
    this.state.blogPosts.forEach(statePost => {
      if(statePost['_id'] === id) {
        return this.setState({blogPostCurrent: statePost});
      }
    });
  }

  render() {
    document.body.style=`background-image: url(${process.env.PUBLIC_URL + 'hex-gray.jpg'})`;
    return (
      <Router>
        <div>
          <p style={{color: 'white'}}>Let's goooooo</p>
          <button
                    style={{
                      position:'absolute',
                      top:'5px',
                      right:'5px',
                      fontSize:'36px',
                      marginLeft:'50px',
                      display:'block',
                      zIndex: '2'
                    }}
                    onClick={this.toggleNav}>&times;
                </button>
          <NavBar
            navOptions={this.state.navOptions}
            toggleNav={this.toggleNav}
            navBarOpen={this.state.navBarOpen}
            toggleMainContainer={this.toggleMainContainer}>
          </NavBar>
          <MainContainer
            navOptions={this.state.navOptions}
            
            mainContainerOpen={this.state.mainContainerOpen}
            mainContainerSelection={this.state.mainContainerSelection}
            
            blogPosts={this.state.blogPosts}
            blogPostCurrent={this.state.blogPostCurrent}
            toggleCurrentBlogPost={this.toggleCurrentBlogPost}
            />
        </div>
      </Router>
    )
  }
}

export default App;