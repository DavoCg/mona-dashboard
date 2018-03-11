import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page} from '../../components';
import style from './style';

class Informations extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p className={css(style.text)}>
                    {'Searches'}
                </p>
            </div>
        );
    }
}

export default page((state) => ({

}))(Informations)