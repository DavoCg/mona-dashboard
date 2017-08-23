import React, {Component} from 'react';
import {css} from 'aphrodite';
import style from './style';


export default class AddPrice extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }

    setPrice(e){
        const {setPrice} = this.props;
        return setPrice(e.target.value);
    }

    render(){
        const {price} = this.props;

        return(
            <input className={css(style.input)}
                   placeholder={'Add your price'}
                   onChange={(e) => this.setPrice(e)}
                   value={price}
                   type={'number'}/>
        );
    }
}