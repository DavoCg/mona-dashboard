import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page} from '../../components';
import style from './style';

class Billing extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p className={css(style.text)}>
                    {'Billing'}
                </p>
            </div>
        );
    }
}

export default page((state) => ({

}))(Billing)