import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class PortfolioCollective extends Component {

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
                <Link to='/portfolio/loanamort'>Loan Amort
                </Link>
            </div>
        )
        
    }
}

export default PortfolioCollective;