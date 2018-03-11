import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page} from '../../components';
import style from './style';

export default class Search extends Component {

    constructor(props){
        super(props);
    }

    render(){
        const {placeholder = 'Search'} = this.props;
        return (
            <input {...this.props}
                   className={css(style.container)}
                   placeholder={placeholder}
                   type={'text'}/>
        );
    }
}