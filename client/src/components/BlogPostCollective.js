import React, {Component} from 'react';
import BlogPost from './BlogPost';

class BlogPostCollective extends Component {

    blogPostCollectiveStyle = {
        display: 'grid',
        gridTemplateColumns: '30% 70%',
        gridTemplateRows: '20% 80%',
        height: '100%',
        width: '100%'
    }
    
    render() {
        return (
            <div>
                {this.props.blogPosts.map(post => (
                    <BlogPost
                        post={post}
                        key={post['_id']}
                        title={post.title}
                        content={post.content}
                        toggleCurrentBlogPost={this.props.toggleCurrentBlogPost}/>
                        )
                    )}
            </div>
        )
    }
}

export default BlogPostCollective;