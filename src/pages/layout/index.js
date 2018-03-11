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
                {name: 'Users', icon: 'user', handler: this.navigate('users'),  path: '/users', last: true},
                {name: 'Offers', icon: 'list', handler: this.navigate('offers'), path: '/offers'},
                {name: 'Searches', icon: 'list', handler: this.navigate('searches'),  path: '/searches', last: true}
            ],
            active: 0,
            popover: false,
            popoverNode: {},
            popoverContent: null
        }
    }

    componentDidMount(){
        const {path} = this.props;
        return this.setActive(path);
    }
    
    componentWillReceiveProps(next){
        const {path} = this.props;
        if(next.path !== path) this.setActive(next.path);
    }

    setActive(path){
        const {content} = this.state;
        const active = content.findIndex(c => path.includes(c.path));
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
        const {path} = this.props;
        const {content, active, popover, popoverNode, popoverContent} = this.state;

        return (
            <div className={css(style.container) + ' container-mona'}>
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
    path: state.routing.location.pathname
}))(Layout)