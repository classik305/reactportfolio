import React, {Component} from 'react';

import NavBarOption from './NavBarOption';

class NavBar extends Component {

    navBarOptions = [
        {title: 'About Me', path: '/about'},
        {title: 'Portfolio', path: '/portfolio'},
        {title: 'Blog', path: '/blog'},
        {title: 'Contact', path: '/contact'}
    ];

    navBarStyle = () => {
        return {
            height:'100%',
            width: this.props.navBarOpen ? '150px' : '0px',
            position:'absolute',
            top:'0',
            right:'0',
            backgroundColor:'#111',
            opacity:'0.8',
            transition:'0.5s'
        }
    }

    navCloseButton = {
        position:'relative',
        top:'0',
        right:'22px',
        fontSize:'36px',
        marginLeft:'50px',
        display:'block'
      }

    render() {
        return (
            <div
                style={this.navBarStyle()}
                className='side-nav'>
                {this.navBarOptions.map(option => (
                <NavBarOption
                    option={option.title}
                    key={this.navBarOptions.indexOf(option)}
                    path={option.path}
                    toggleMainContainer={this.props.toggleMainContainer}>
                </NavBarOption>
            ))}
            </div>
            
        )
    }
}

export default NavBar