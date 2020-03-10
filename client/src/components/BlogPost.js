import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class BlogPost extends Component {

blogPostStyle = {
    display: 'block',
    padding: '10px 10px 10px 10px',
    alignItems: 'center',
    fontSize: '22px'
}

    render() {
        console.log(this.props);
        return (
            <Link
                to='/content'
                style={this.blogPostStyle}
                // content={this.props.content}
                onClick={this.props.toggleCurrentBlogPost.bind(this, this.props.post['_id'])}>
                    {this.props.title}
            </Link>
        )
    }
}

export default BlogPost;