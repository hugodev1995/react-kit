import React, { Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as settingsAction from '../../store/settings'
import IntlMessages from '../../helpers/IntlMessages'

import { localeOptions } from "../../constants/defaultValues"

class Header extends Component {
    handleThemeRadio = event => {
        this.props.actions.changeTheme(event.target.value);
    }

    handleChangeLocale = (locale) => {
        this.props.actions.changeLocale(locale);
    }
    render() {
        return (
            <header className="topnavbar-wrapper">
                <nav className="navbar topnavbar">
                    <div className="logo">
                        <img className="" src="" alt="App Logo" />
                    </div>
                </nav>
                <input type="radio" name="setting-theme" checked={this.props.settings.path === 'themes/theme-light.css'} value='themes/theme-light.css' onChange={this.handleThemeRadio} />
                <input type="radio" name="setting-theme" checked={this.props.settings.path === 'themes/theme-dark.css'} value='themes/theme-dark.css' onChange={this.handleThemeRadio} />
                <div><IntlMessages id="user.name" /></div>
                <button onClick={() => this.handleChangeLocale('en')}>English</button>
                <button onClick={() => this.handleChangeLocale('ko')}>한국어</button>
            </header>
        )
    }
}

const mapStateToProps = state => ({ settings: state.settings });
const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({ ...settingsAction }, dispatch)
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);