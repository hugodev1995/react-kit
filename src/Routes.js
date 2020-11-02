import React, { Suspense, lazy, Component } from 'react'
import { connect } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import AppLocale from './lang'

import PageLoader from './components/Layout/PageLoader'
import Base from './components/Layout/Base'

const waitFor = Tag => props => <Tag {...props}/>;

const Home = lazy(() => import('./components/Home'));
const Test = lazy(() => import('./components/Test'));

class Routes extends Component {
    render() {
        const { locale } = this.props;
        const currentAppLocale = AppLocale[locale];
        console.log(currentAppLocale.locale);
        return (
            <React.Fragment>
            <IntlProvider
                locale={currentAppLocale.locale}
                messages={currentAppLocale.message}
            >
            <React.Fragment>
            <Base>
                <div>
                    <Suspense fallback={<PageLoader />}>
                        <Switch>
                            <Route exact path="/" component={waitFor(Home)} />
                            <Route exact path="/test" component={waitFor(Test)} />
                            <Redirect to="/" />
                        </Switch>
                    </Suspense>
                </div>
            </Base>
            </React.Fragment>
            </IntlProvider>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    locale: state.settings.locale
});
const mapActionsToProps = {};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(Routes);