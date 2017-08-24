import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Home, Login, Layout, AddItem, Informations, Billing, Item} from '../pages';

const LoggedRouter = () => {
    return (
        <Layout>
            <Switch>
                <Route exact path='/items' component={Home}/>
                <Route exact path='/add-item' component={AddItem}/>
                <Route exact path='/informations' component={Informations}/>
                <Route exact path='/billing' component={Billing}/>
                <Route path='/items/:id' component={Item}/>
                <Redirect from={'/'} exact to={'/items'} />
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
