import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class NavBarOption extends Component {

    navOptionStyle = {
            padding:'10px 10px 10px 30px',
            textDecoration:'none',
            fontSize:'22px',
            color:'#ccc',
            display:'block',
            //transition:0.3s;
            alignItems: 'center'
    }

    render() {
        return (
        <Link
            to={this.props.path}
            style={this.navOptionStyle}
            onClick={this.props.toggleMainContainer.bind(this, this.props.path)}
            >
                {this.props.option}
        </Link>
        )
    }
}

export default NavBarOption;