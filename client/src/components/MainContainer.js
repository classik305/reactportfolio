import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import AboutMe from './AboutMe';
import BlogPostCollective from './BlogPostCollective';
import BlogPostExpand from './BlogPostExpand';
import PortfolioCollective from './PortfolioCollective';

class MainContainer extends Component {

    mainContainerStyle = () => {
        return {
            display: 'block',
            overflowX: 'hidden',
            overflowY: 'hidden',
            width: this.props.mainContainerOpen ? '75%' : '0px',
            position: 'absolute',
            top: '10%',
            left: '10%',
            height: '75%',
            zIndex: '2',
            transition: '.6s',
            backgroundColor: '#f4f4f4d2',
            opacity: '.8',
            border: this.props.mainContainerOpen ? '3px rgb(69, 188, 204) solid' : '0px'
        }
  }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <div style={this.mainContainerStyle()}>

                    </div>
                </Route>
                <Route exact path="/about">
                    <div style={this.mainContainerStyle()}>
                        <AboutMe />
                    </div>
                </Route>
                <Route exact path="/portfolio">
                    <div style={this.mainContainerStyle()} >
                        <PortfolioCollective />
                    </div>
                </Route>
                <Route exact path="/blog">
                    <div style={this.mainContainerStyle()}>
                        <BlogPostCollective
                            blogPosts={this.props.blogPosts}
                            blogPostCurrent={this.props.blogPostCurrent}
                            toggleCurrentBlogPost={this.props.toggleCurrentBlogPost} />
                    </div>
                </Route>
                <Route exact path="/contact">
                    <div style={this.mainContainerStyle()}>
                        oof
                    </div>
                </Route>
                <Route exact path="/content">
                    <div style={this.mainContainerStyle()}>
                        <BlogPostExpand
                            blogPostCurrent={this.props.blogPostCurrent} />
                    </div>
                </Route>               
            </Switch>
        )
    }
}

export default MainContainer;