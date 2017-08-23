import React, {Component} from 'react';
import {css} from 'aphrodite';
import {mapDispatchToProps} from '../../utils';
import {page, Sidebar, Topbar, Popover} from '../../components';
import {connect} from 'react-redux';
import style from './style';

class Layout extends Component {

    constructor(props){
        super(props);
        this.state = {
            content: [
                {name: 'Art items', icon: 'picture', handler: this.navigate('home'), path: '/home'},
                {name: 'On market', icon: 'basket-loaded', handler: this.navigate('home'), path: '/home'},
                {name: 'Sold', icon: 'check', handler: this.navigate('home'),  path: '/home', last: true},
                {name: 'Billing', icon: 'credit-card', handler: this.navigate('billing'), path: '/billing'},
                {name: 'Informations', icon: 'user', handler: this.navigate('informations'),  path: '/informations', last: true},
                {name: 'Add an item', icon: 'plus', handler: this.navigate('add-item'),  path: '/add-item'}
            ],
            active: 0,
            popover: false,
            popoverNode: {},
            popoverContent: null
        }
    }

    componentDidMount(){
        const {routing} = this.props;
        const {content} = this.state;
        const path = routing.location.pathname;
        const active = content.findIndex(c => c.path === path);
        return this.setState({active});
    }

    navigate(name){
        const {actions} = this.props;
        return () => actions.navigation.push(`/${name}`);
    }

    logout(){
        const {actions} = this.props;
        return actions.user.logout();
    }

    render(){
        const {content, active, popover, popoverNode, popoverContent} = this.state;
        return (
            <div className={css(style.container) + ' container'}>
                <div className={css(style.sidebar)}>
                    <Sidebar active={active}
                             onChange={active => this.setState({active})}
                             items={content}/>
                </div>
                <div className={css(style.main)}>
                    <Topbar logout={() => this.logout()}
                            open={data => this.setState(data)}/>
                    <div className={css(style.content)}>
                        {this.props.children}
                    </div>
                </div>
                <Popover node={popoverNode}
                         content={popoverContent}
                         onHide={() => this.setState({popover: false})}
                         open={popover}/>
            </div>
        );
    }
}

export default page(state => ({
    routing: state.routing
}))(Layout)