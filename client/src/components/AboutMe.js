import React, {Component} from 'react';

class AboutMe extends Component {

    aboutMeStyle = {
            display: 'grid',
            gridTemplateColumns: '30% 70%',
            gridTemplateRows: '20% 80%',
            height: '100%',
            width: '100%'
    }

    nthChild3Style = {
        margin: '0% 0%',
        top: '0%',
        left: '0%',
        padding: '6px 6px 6px 6px',
        width: '100%',
        height: '100%'
    }

    nthChild4Style = {
        margin: '0% 0%',
        top: '0%',
        left: '0%',
        padding: '6px 6px 6px 6px',
        width: '100%',
        height: '100%',
        overflowY: 'auto'
    }

    imageStyle = {
        display: 'block',
        width: '100%',
        height: '100%'
    }

    render () {
        return (
            <div style={this.aboutMeStyle}>
                <div>
                    <h3>ABOUT ME</h3>
                </div>
                <div></div>
                <div>
                    <figure style={this.nthChild3Style}>
                        <img src={process.env.PUBLIC_URL + 'aboutme.jpg'} alt="" style={this.imageStyle}></img>
                    </figure>
                </div>
                <div style={this.nthChild4Style}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend. Quis lectus nulla at volutpat diam ut venenatis tellus in. Rhoncus dolor purus non enim praesent elementum. Amet justo donec enim diam vulputate ut pharetra sit amet. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Risus at ultrices mi tempus imperdiet nulla. Suspendisse in est ante in. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Justo donec enim diam vulputate ut pharetra.<br></br><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At auctor urna nunc id cursus metus aliquam eleifend. Quis lectus nulla at volutpat diam ut venenatis tellus in. Rhoncus dolor purus non enim praesent elementum. Amet justo donec enim diam vulputate ut pharetra sit amet. Suspendisse interdum consectetur libero id faucibus nisl tincidunt. Risus at ultrices mi tempus imperdiet nulla. Suspendisse in est ante in. Cras ornare arcu dui vivamus arcu felis bibendum ut tristique. Justo donec enim diam vulputate ut pharetra.
                    </p>
                </div>
            </div>
        )
    }
}

export default AboutMe;