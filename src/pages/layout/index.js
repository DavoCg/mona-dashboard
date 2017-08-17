import React, {Component} from 'react';
import {css} from 'aphrodite';
import {mapDispatchToProps} from '../../utils';
import {page, Sidebar} from '../../components';
import {connect} from 'react-redux';
import style from './style';

class Layout extends Component {

    render(){
        return (
            <div className={css(style.container)}>
                <div className={css(style.sidebar)}>
                    <Sidebar/>
                </div>
                <div className={css(style.content)}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default page()(Layout)