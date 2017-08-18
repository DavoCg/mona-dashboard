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
                {name: 'Mes oeuvres', icon: 'picture', handler: this.navigate('home')},
                {name: 'En vente', icon: 'basket-loaded', handler: this.navigate('home')},
                {name: 'Vendues', icon: 'check', handler: this.navigate('home'), last: true},
                {name: 'Facturations', icon: 'credit-card', handler: this.navigate('billing')},
                {name: 'Mes informations', icon: 'user', handler: this.navigate('informations'), last: true},
                {name: 'Ajouter une oeuvre', icon: 'plus', handler: this.navigate('add-item')}
            ],
            active: 0,
            popover: false,
            popoverNode: {}
        }
    }

    navigate(name){
        const {actions} = this.props;
        return () => actions.navigation.push(`/${name}`);
    }

    render(){
        const {content, active, popover, popoverNode} = this.state;
        return (
            <div className={css(style.container)}>
                <div className={css(style.sidebar)}>
                    <Sidebar active={active}
                             onChange={active => this.setState({active})}
                             items={content}/>
                </div>
                <div className={css(style.main)}>
                    <Topbar open={data => this.setState(data)}/>
                    <div className={css(style.content)}>
                        {this.props.children}
                    </div>
                </div>
                <Popover node={popoverNode}
                         onHide={() => this.setState({popover: false})}
                         open={popover}/>
            </div>
        );
    }
}

export default page(state => ({
    routing: state.routing
}))(Layout)