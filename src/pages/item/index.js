import React, {Component} from 'react';
import {css} from 'aphrodite';
import {page} from '../../components';
import style from './style';

class Item extends Component {

    constructor(props){
        super(props);
    }

    back(){
        const {actions} = this.props;
        return actions.navigation.back();
    }

    render(){
        return (
            <div>
                <p className={css(style.text)}>
                    {'Item'}
                    <p onClick={() => this.back()}>back</p>
                </p>
            </div>
        );
    }
}

export default page((state) => ({

}))(Item)