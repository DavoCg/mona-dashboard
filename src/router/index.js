import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Home, Login, Layout, Offers, Searches, Users, Item} from '../pages';

const LoggedRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/offers' component={Offers}/>
                <Route exact path='/searches' component={Searches}/>
                <Route exact path='/users' component={Users}/>
                <Route path='/items/:id' component={Item}/>
                <Redirect from={'/'} exact to={'/users'} />
            </Switch>
        </Layout>
    );
};

export default connect(state => ({
    logged: state.user.logged,
    pathname: state.routing.location.pathname
}))((props) => {
    return (
        <Switch>
            <Route exact path='/login' render={() => props.logged ? <Redirect to={'/'}/> : <Login/>}/>
            <Route path='/' render={() => !props.logged ? <Redirect to={'/login'}/> : <LoggedRouter/>}/>
        </Switch>
    );
});
