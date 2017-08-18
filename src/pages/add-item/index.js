import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page} from '../../components';
import style from './style';

class AddItem extends Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <p className={css(style.text)}>
                    {'Add item'}
                </p>
            </div>
        );
    }
}

export default page((state) => ({

}))(AddItem)