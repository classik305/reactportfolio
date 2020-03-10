import React, {Component} from 'react';

class BlogPostExpand extends Component {

    render() {
        return (
            <div>
                <p>
                    {this.props.blogPostCurrent.content}
                </p>
            </div>
            )
        
    }
}

export default BlogPostExpand;