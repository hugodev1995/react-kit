import React, { Component } from 'react'

import ContentWrapper from './Layout/ContentWrapper'
import IntlMessages from '../helpers/IntlMessages'

class Home extends Component {
    state = {
        xx: false
    }
    changeLanguage = lng => {

    }
    toggle = () => {
        this.setState({
            xx: !this.state.xx
        });
    }
    render() {
        return (
            <ContentWrapper>
                <div className="content-heading">
                    <IntlMessages id="home" />
                </div>
            </ContentWrapper>
        );
    }
}

export default Home;