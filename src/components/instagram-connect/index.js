import React, {Component} from 'react';
import qs from 'qs';
import page from '../../components/page';

class InstagramConnect extends Component {

    componentDidMount(){
        const {actions, routing} = this.props;
        const {location} = routing;
        const {code, error} = qs.parse(location.search.replace('?', ''));
        if(code) return actions.user.instagramLogin(code);
    }

    onClick(){
        const redirectUri = 'http://localhost:3000';
        window.location.href = `https://www.instagram.com/oauth/authorize/?client_id=ef34e21efa4241729ab23cc8f76052c3&redirect_uri=${redirectUri}&response_type=code`;
    }

    render(){
        return (
            <span onClick={() => this.onClick()}>
                {this.props.children}
            </span>
        );
    }
}

export default page(state => ({
    routing: state.routing
}))(InstagramConnect)