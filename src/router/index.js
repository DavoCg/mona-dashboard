import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Home, Login} from '../pages';

const HomeRouter = () => (
    <Switch>
        <Route exact path='/home' component={Home}/>
        <Redirect from={'/'} exact to={'/home'} />
    </Switch>
);

export default connect(state => ({
    logged: state.user.logged,
    pathname: state.routing.location.pathname
}))((props) => {
    return (
        <Switch>
            <Route exact path='/login' render={() => props.logged ? <Redirect to={'/'}/> : <Login/>}/>
            <Route path='/' render={() => !props.logged ? <Redirect to={'/login'}/> : <HomeRouter/>}/>
        </Switch>
    );
});
