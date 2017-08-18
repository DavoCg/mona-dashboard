import React, {Component} from 'react';
import {css} from 'aphrodite';
import {mapDispatchToProps} from '../../utils';
import {page, Sidebar, Topbar, Popover} from '../../components';
import {connect} from 'react-redux';
import style from './style';

const content = [
    {name: 'Mes oeuvres', icon: 'picture'},
    {name: 'En vente', icon: 'basket-loaded'},
    {name: 'Vendues', icon: 'check', last: true},
    {name: 'Facturations', icon: 'credit-card'},
    {name: 'Mes informations', icon: 'user', last: true},
    {name: 'Ajouter une oeuvre', icon: 'plus'}
];

class Layout extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: 0,
            popover: false,
            popoverNode: {}
        }
    }

    render(){
        const {active, popover, popoverNode} = this.state;
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

export default page()(Layout)