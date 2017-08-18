import React, {Component} from 'react';
import {css} from 'aphrodite';
import {mapDispatchToProps} from '../../utils';
import {page, Sidebar} from '../../components';
import {connect} from 'react-redux';
import style from './style';

const content = [
    {name: 'Mes oeuvres'},
    {name: 'En vente'},
    {name: 'Vendues'}
];

class Layout extends Component {

    constructor(props){
        super(props);
        this.state = {
            active: 0
        }
    }

    onChange(active){
        return this.setState({active});
    }

    render(){
        const {active} = this.state;

        return (
            <div className={css(style.container)}>
                <div className={css(style.sidebar)}>
                    <Sidebar active={active}
                             onChange={(index) => this.onChange(index)}
                             items={content}/>
                </div>
                <div className={css(style.main)}>
                    <div className={css(style.top)}>

                    </div>
                    <div className={css(style.content)}>
                        {this.props.children}
                    </div>

                </div>
            </div>
        );
    }
}

export default page()(Layout)