import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import NavBar from './NavBar';

const BackButton = withRouter(props => <NavBar {...props} />)


export default BackButton;